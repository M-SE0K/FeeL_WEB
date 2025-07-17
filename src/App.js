import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/home/home.js';

import Benefits from './component/benefits/benefits.js';
import Contact from './component/contact/contact.js';
import Notice from './component/notice/notice.js';
import Resources from './component/resources/resources.js';
import Intro from './component/about/intro/intro.js';
import HeaderBar from './component/headerBar/headerBar.js';

import Banner from './img/banner.png';
import './App.css';

import { useResponsive } from './component/hooks/useResponsive.js';
import { useLayoutResize } from './component/hooks/useLayoutResize.js';
function App() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  useLayoutResize();
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className='header-container'>              
          <HeaderBar isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} /> 
        </div>

        <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/FeeL_WEB" element={<Home />} />
              <Route path="/notice" element={<Notice />} />
              <Route path="/benefits" element={<Benefits />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/about/intro" element={<Intro />} />
            </Routes>
          </main>

        <div className='banner-container'>
            <img src={Banner} className='banner-img' alt="배너"/>
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
