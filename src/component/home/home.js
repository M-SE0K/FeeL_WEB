import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderBar from '../headerBar/headerBar.js';
import './home.css';

import image1 from '../../img/imageSlider1.png';
import image2 from '../../img/imageSlider2.png';
import image3 from '../../img/imageSlider3.png';
import ImageSlider from './imageSlider/imageSlider.js';

import CardSection from './cardSection/cardSection.js';

import About from '../about/about.js';
import Benefits from '../benefits/benefits.js';
import Contact from '../contact/contact.js';
import Notice from '../notice/notice.js';
import Resources from '../resources/resources.js';

import { useResponsive } from '../hooks/useResponsive.js';
import { useLayoutResize } from '../hooks/useLayoutResize';

import Kakao from './maps/kakao.js';
import Banner from '../../img/banner.png';

import CustomCalendar from './customCalendar/customCalendar.js';
import { HiMenu } from 'react-icons/hi';

import Intro from '../about/intro/intro.js';
function Home() {
  const slides = [{image: image1}, {image: image2}, {image: image3}];
  const { isMobile, isTablet, isDesktop } = useResponsive();
  useLayoutResize();
    return(
        <BrowserRouter>
          <div className="app-container">
            <div id= "header-container" className='header-container'> 
            <HeaderBar isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} /> 
              <Routes>
                  <Route path="/about" element={ <About/> } />
                  <Route path="/notice" element={ <Notice/>} />
                  <Route path="/benefits" element={<Benefits/>} />
                  <Route path="/contact" element={<Contact/>} />
                  <Route path="/resources" element={<Resources/>} />
                  <Route path="/" element={<div/>} />
                  <Route path="/about/intro" element={<Intro/>} />
                </Routes>
            </div>

            <div className='first-screen'>
              {/* 여기까지가 pc로 한 화면으로 나오게 부탁드립니다.. */}
              <div id = "slider-container" className='slider-container'> <ImageSlider slides={slides} /> </div>
              <div id = "cards-container" className='cards-container'>  <CardSection isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop}/> </div>
            </div>

            <div className='second-screen'>
              {/* 툴바 + 제휴업체 검색이 딱 한 화면에 나오도록 부탁드립니다. */}
              <div className='map-container'>
                <Kakao />
                <div className='list-button'>
                  <button> <HiMenu/> 목록 보기</button>
                </div>
              </div>
            </div>

            <div className='third-screen'>
              {/* 툴바 + 행사 달력이 딱 한 화면에 나오도록 부탁드립니다. */}
              <div className='calender-container'>
                <CustomCalendar
                />
              </div>
            </div>


            <div className='banner'>
                <img src={Banner} className='banner-img' alt="배너"/>
            </div>
          </div>
        </BrowserRouter>
    );
}

export default Home;