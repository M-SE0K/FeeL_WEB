import React, { useState, useMemo } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/ko';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CustomCalendar.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// moment 한국어 설정
moment.locale('ko');
const localizer = momentLocalizer(moment);

function CustomCalendar({ eventsData = {} }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

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
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: '50px',
        border: 'none',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        padding: '2px 8px'
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
      <div className="rbc-toolbar">
        <button className="nav-button" onClick={handlePreviousMonth}>
          <FaChevronLeft />
        </button>
        <span className="rbc-toolbar-label">{label}</span>
        <button className="nav-button" onClick={handleNextMonth}>
          <FaChevronRight />
        </button>
      </div>
    );
  };

  return (
    <div className="calendar-wrapper">
      <div className="calendar-left">
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
          className="custom-big-calendar"
          components={{
            toolbar: CustomToolbar
          }}
        />
      </div>

      <div className="calendar-right">
        <div className="schedule-box">
          <div className="schedule-title">월간 일정</div>
          <div className="schedule-date">
            {moment(selectedDate).format('YYYY년 M월 D일')}
          </div>
          {selectedEvents.length > 0 ? (
            <ul className="schedule-list">
              {selectedEvents.map((event, index) => (
                <li key={index}>
                  <div className="event-title">{event.title}</div>
                  {event.description && (
                    <div className="event-description">{event.description}</div>
                  )}
                  {event.time && (
                    <div className="event-time">{event.time}</div>
                  )}
                  {event.dateRange && (
                    <div className="event-date-range">{event.dateRange}</div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-events">선택한 날짜에 일정이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomCalendar;
