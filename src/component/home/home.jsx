import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './home.css';

import image1 from '../../img/imageSlider1.png';
import image2 from '../../img/imageSlider2.png';
import image3 from '../../img/imageSlider3.png';

import hogwan1_0 from '../../img/hogwan_1_0.JPG';
import hogwan1_1 from '../../img/hogwan_1_1.JPG';
import hogwan3_0 from '../../img/hogwan_3_0.JPG';
import hogwan5_0 from '../../img/hogwan_5_0.JPG';
import hogwan6_0 from '../../img/hogwan_6_0.JPG';
import hogwan7_0 from '../../img/hogwan_7_0.JPG';
import hogwan8_0 from '../../img/hogwan_8_0.JPG';

import ImageSlider from './imageSlider/imageSlider.jsx';

import CardSection from './cardSection/cardSection.jsx';

import { useResponsive } from '../hooks/useResponsive.jsx';
import { useLayoutResize } from '../hooks/useLayoutResize.jsx';

import PartnerShowcase from './partnerSlider/PartnerShowcase.jsx';

import CustomCalendar from './customCalendar/customCalendar.jsx';
import { HiMenu } from 'react-icons/hi';

const Home = () => {
  const slides = [{image: hogwan1_0}, {image: hogwan1_1}, {image: hogwan3_0}, {image: hogwan5_0}, {image: hogwan6_0}, {image: hogwan7_0}, {image: hogwan8_0}];
  const { isMobile, isTablet, isDesktop } = useResponsive();
  useLayoutResize();
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  // 샘플 이벤트 데이터
  const eventsData = {
    "2025-04-14": [
      { title: "해동학습실 개방", dateRange: "4/14 ~ 4/25" }
    ],
    "2025-04-15": [
      { title: "해동학습실 개방", dateRange: "4/14 ~ 4/25" }
    ],
    "2025-04-16": [
      { title: "해동학습실 개방", dateRange: "4/14 ~ 4/25" }
    ],
    "2025-04-17": [
      { title: "해동학습실 개방", dateRange: "4/14 ~ 4/25" },
      { title: "간식행사", dateRange: "4/17 ~ 4/17" }
    ],
    "2025-04-18": [
      { title: "해동학습실 개방", dateRange: "4/14 ~ 4/25" }
    ],
    "2025-04-19": [
      { title: "해동학습실 개방", dateRange: "4/14 ~ 4/25" }
    ],
    "2025-04-20": [
      { title: "해동학습실 개방", dateRange: "4/14 ~ 4/25" }
    ],
    "2025-04-21": [
      { title: "해동학습실 개방", dateRange: "4/14 ~ 4/25" }
    ],
    "2025-04-22": [
      { title: "해동학습실 개방", dateRange: "4/14 ~ 4/25" }
    ],
    "2025-04-23": [
      { title: "해동학습실 개방", dateRange: "4/14 ~ 4/25" }
    ],
    "2025-04-24": [
      { title: "해동학습실 개방", dateRange: "4/14 ~ 4/25" }
    ],
    "2025-04-25": [
      { title: "해동학습실 개방", dateRange: "4/14 ~ 4/25" }
    ],
    "2025-10-15": [
      { title: "중간고사", description: "전공 시험 기간" }
    ],
    "2025-10-20": [
      { title: "학생회 MT", description: "1박 2일", time: "09:00" }
    ]
  };

  // JS 강제 페이지 넘김(휠/키 이벤트 + transform) 해제: CSS scroll-snap만 사용
  
  return (
    <div className="app-container">
      <div className='first-screen'>
        {/* 여기까지가 pc로 한 화면으로 나오게 부탁드립니다.. */}
        <div id="slider-container" className='slider-container'>
          <ImageSlider slides={slides} />
        </div>
        <div id="cards-container" className='cards-container'>
          <CardSection isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop}/>
        </div>
      </div>

      <div className='second-screen'>
        <div className='benefit-toolbar'>
          <div className='benefit-title'>제휴 업체 검색</div>
          <div className='benefit-search'>
            <input type='text' placeholder='' aria-label='제휴 업체 검색' value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
          </div>
          <button className='benefit-add' aria-label='업체 제안'>+</button>
        </div>

        <PartnerShowcase query={searchText} />

        <div className='benefit-footer'>
          <button className='benefit-list-btn' onClick={() => navigate('/benefits')}>
            <HiMenu/> 목록 보기
          </button>
        </div>
      </div>

      <div className='third-screen'>
        {/* 툴바 + 행사 달력이 딱 한 화면에 나오도록 부탁드립니다. */}
        <div className='calender-container'>
          <CustomCalendar eventsData={eventsData} />
        </div>
      </div>
    </div>
  );
};

export default Home; 