import React from 'react';
import './home.css';

import image1 from '../../img/imageSlider1.png';
import image2 from '../../img/imageSlider2.png';
import image3 from '../../img/imageSlider3.png';
import ImageSlider from './imageSlider/imageSlider.jsx';

import CardSection from './cardSection/cardSection.jsx';

import { useResponsive } from '../hooks/useResponsive.jsx';
import { useLayoutResize } from '../hooks/useLayoutResize.jsx';

import Kakao from './maps/kakao.jsx';

import CustomCalendar from './customCalendar/customCalendar.jsx';
import { HiMenu } from 'react-icons/hi';

const Home = () => {
  const slides = [{image: image1}, {image: image2}, {image: image3}];
  const { isMobile, isTablet, isDesktop } = useResponsive();
  useLayoutResize();
  
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
        {/* 툴바 + 제휴업체 검색이 딱 한 화면에 나오도록 부탁드립니다. */}
        <div className='map-container'>
          지도 api 대기중
          <Kakao />
          <div className='list-button'>
            <button>
              <HiMenu/> 목록 보기
            </button>
          </div>
        </div>
      </div>

      <div className='third-screen'>
        {/* 툴바 + 행사 달력이 딱 한 화면에 나오도록 부탁드립니다. */}
        <div className='calender-container'>
          <CustomCalendar />
        </div>
      </div>
    </div>
  );
};

export default Home; 