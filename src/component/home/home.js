import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderBar from '../headerBar/headerBar.js';

import image1 from '../../img/imageSlider1.png';
import image2 from '../../img/imageSlider2.png';
import image3 from '../../img/imageSlider3.png';
import ImageSlider from './imageSlider/imageSlider.js';

import './home.css';

import CardSection from './cardSection/cardSection.js';

import About from '../about/about.js';
import Benefits from '../benefits/benefits.js';
import Contact from '../contact/contact.js';
import Notice from '../notice/notice.js';
import Resources from '../resources/resources.js';

import { useResponsive } from '../hooks/useResponsive.js';

function Home() {
  const slides = [{image: image1}, {image: image2}, {image: image3}];
  const { isMobile, isTablet, isDesktop } = useResponsive();
    return(
      <Router>
        <div className="app-container">
          <div className='header-container'> 
          <HeaderBar isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} />            
          <Routes>
              <Route path="/about" element={ <About/> } />
              <Route path="/notice" element={ <Notice/>} />
              <Route path="/benefits" element={<Benefits/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/resources" element={<Resources/>} />
              <Route path="/" element={<div></div>} />
            </Routes>
          </div>
          <div className='slider-container'> <ImageSlider slides={slides} /> </div>
          <div className='cards-container'>  <CardSection /> </div>
        </div>
      </Router>

    );
}

export default Home;