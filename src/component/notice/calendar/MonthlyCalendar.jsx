import React, { useState, useEffect, useMemo } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/ko';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './monthlyCalendar.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// moment 한국어 설정
moment.locale('ko');
const localizer = momentLocalizer(moment);

function MonthlyCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [eventsData, setEventsData] = useState({});

  // calendar.json 파일 로드 및 파싱
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/calendar.json`)
      .then(response => response.json())
      .then(data => {
        const parsedEvents = parseCalendarData(data);
        setEventsData(parsedEvents);
      })
      .catch(error => console.error('Failed to load calendar.json:', error));
  }, []);

  // calendar.json 파싱 함수
  const parseCalendarData = (jsonData) => {
    const events = {};

    jsonData.forEach(item => {
      const startDate = new Date(item.date_start);
      const endDate = new Date(item.date_end);

      const eventData = {
        title: item.event_korean,
        titleEn: item.event_english,
        dateRange: item.date_start === item.date_end
          ? moment(startDate).format('M/D')
          : `${moment(startDate).format('M/D')} - ${moment(endDate).format('M/D')}`
      };

      // 시작 날짜부터 종료 날짜까지 모든 날짜에 이벤트 추가
      let currentDate = new Date(startDate);

      while (currentDate <= endDate) {
        const dateKey = moment(currentDate).format('YYYY-MM-DD');
        if (!events[dateKey]) events[dateKey] = [];
        events[dateKey].push(eventData);
        currentDate.setDate(currentDate.getDate() + 1);
      }
    });

    return events;
  };

  // eventsData를 react-big-calendar 형식으로 변환
  const events = useMemo(() => {
    const eventList = [];

    Object.keys(eventsData).forEach(dateStr => {
      const date = new Date(dateStr);
      eventsData[dateStr].forEach(event => {
        eventList.push({
          title: event.title,
          start: date,
          end: date,
          allDay: true,
          resource: event
        });
      });
    });

    return eventList;
  }, [eventsData]);

  // 날짜를 'YYYY-MM-DD' 형식으로 변환
  const formatDate = (date) => {
    return moment(date).format('YYYY-MM-DD');
  };

  // 선택된 날짜의 이벤트 가져오기
  const getEventsForDate = (date) => {
    const dateKey = formatDate(date);
    return eventsData[dateKey] || [];
  };

  const selectedEvents = getEventsForDate(selectedDate);

  // 날짜 선택 핸들러
  const handleSelectSlot = (slotInfo) => {
    setSelectedDate(slotInfo.start);
  };

  // 이벤트 클릭 핸들러
  const handleSelectEvent = (event) => {
    setSelectedDate(event.start);
  };

  // 커스텀 이벤트 스타일
  const eventStyleGetter = (event) => {
    return {
      style: {
        backgroundColor: '#4CAF50',
        borderRadius: '4px',
        border: 'none',
        color: 'white',
        fontWeight: '600',
        fontSize: '0.85rem',
        padding: '2px 6px'
      }
    };
  };

  // 커스텀 날짜 셀 스타일
  const dayPropGetter = (date) => {
    const hasEvent = events.some(event =>
      moment(event.start).format('YYYY-MM-DD') === moment(date).format('YYYY-MM-DD')
    );

    if (hasEvent) {
      return {
        className: 'has-event'
      };
    }
    return {};
  };

  // 한국어 메시지
  const messages = {
    today: '오늘',
    previous: '이전',
    next: '다음',
    month: '월',
    week: '주',
    day: '일',
    agenda: '일정',
    date: '날짜',
    time: '시간',
    event: '이벤트',
    showMore: (total) => `+${total} 더보기`
  };

  // 월 이동 핸들러
  const handlePreviousMonth = () => {
    setCurrentDate(prevDate => moment(prevDate).subtract(1, 'month').toDate());
  };

  const handleNextMonth = () => {
    setCurrentDate(prevDate => moment(prevDate).add(1, 'month').toDate());
  };

  // 커스텀 툴바 컴포넌트
  const CustomToolbar = ({ label }) => {
    return (
      <div className="calendar-toolbar">
        <button className="toolbar-nav-button" onClick={handlePreviousMonth}>
          <FaChevronLeft />
        </button>
        <span className="toolbar-label">{label}</span>
        <button className="toolbar-nav-button" onClick={handleNextMonth}>
          <FaChevronRight />
        </button>
      </div>
    );
  };

  return (
    <div className="monthly-calendar-page">
      <div className="page-title">
        <h1>월별 행사 일정</h1>
        <p>공과대학 학생회 행사 일정을 확인하세요</p>
      </div>

      <div className="calendar-container">
        <div className="calendar-section">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100%' }}
            views={['month']}
            defaultView="month"
            date={currentDate}
            onNavigate={(date) => setCurrentDate(date)}
            selectable
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleSelectEvent}
            eventPropGetter={eventStyleGetter}
            dayPropGetter={dayPropGetter}
            messages={messages}
            popup
            max={3}
            className="big-calendar"
            components={{
              toolbar: CustomToolbar
            }}
          />
        </div>

        <div className="events-section">
          <div className="events-box">
            <div className="events-header">
              <h2>행사 일정</h2>
              <div className="selected-date">
                {moment(selectedDate).format('YYYY년 M월 D일')}
              </div>
            </div>

            {selectedEvents.length > 0 ? (
              <ul className="events-list">
                {selectedEvents.map((event, index) => (
                  <li key={index} className="event-item">
                    <div className="event-marker"></div>
                    <div className="event-content">
                      <div className="event-title">{event.title}</div>
                      {event.dateRange && (
                        <div className="event-date-range">{event.dateRange}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="no-events">선택한 날짜에 일정이 없습니다.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonthlyCalendar;
