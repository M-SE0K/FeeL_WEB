import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/home/home.jsx';

import Benefits from './component/benefits/benefits.jsx';
import Contact from './component/contact/contact.jsx';
import Notice from './component/notice/notice.jsx';
import Resources from './component/resources/resources.jsx';
import Intro from './component/about/intro/intro.jsx';
import Organization from './component/about/organization/organization.jsx';
import HeaderBar from './layouts/headerBar/headerBar.jsx';
import Banner from './layouts/banner/banner.jsx';
import './App.css';

import { useResponsive } from './component/hooks/useResponsive.jsx';
import { useLayoutResize } from './component/hooks/useLayoutResize.jsx';

function App() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  useLayoutResize();
  
  return (
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/FeeL_WEB' : '/'}>
      <div className="app-container">
        <TopBar />
        <div id="header-container" className='header-container'>
          <HeaderBar isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} />
        </div>

        <main className="main-content">
            <Routes>
              <Route path="/FeeL_WEB" element={<Home />} />
              <Route path="/notice" element={<Notice />} />
              <Route path="/benefits" element={<Benefits />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/about/intro" element={<Intro />} />
              <Route path="/about/organization" element={<Organization />} />
              <Route path="/about/organization" element={<Intro />} />
            </Routes>
          </main>

        <div className='banner-container'>
            <Banner />
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App; 