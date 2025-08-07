// HeaderBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import './headerBar.css';
import logoImg from '../../img/logo192.png';

function HeaderBar({ isMobile }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  return (
    <>
      <header className="header-bar">
        <div className='header-left'>
          <div className="logo">
            <Link to="/"><img src={logoImg} className="logo-img" alt="로고" /></Link>
            <Link to="/" className="logo-title">전북대학교 공과대학 학생회</Link>
          </div>
        </div>

        {!isMobile && (
          <nav className="nav-menu">
            <ul className="nav-list">
              <li className="dropdown"
                onMouseEnter={() => toggleMenu('about')}
                onMouseLeave={() => toggleMenu(null)}>
                <ul> 학생회 소개</ul>
                {activeMenu === 'about' && (
                  <div className="dropdown-container">
                    <li><Link to="/about/intro">공과대학 학생회 소개</Link></li>
                    <li><Link to="/about/org">조직도</Link></li>
                  </div>
                )}
              </li>
              <li className="dropdown"
                onMouseEnter={() => toggleMenu('notice')}
                onMouseLeave={() => toggleMenu(null)}>
                <Link to="/notice">알림</Link>
                {activeMenu === 'notice' && (
                  <div className="dropdown-container">
                    <li><Link to="/notice/announcement">공지사항</Link></li>
                    <li><Link to="/notice/calendar">월별 행사</Link></li>
                    <li><Link to="/notice/study-support">학습필력</Link></li>
                    <li><Link to="/notice/promises">공약 이행률</Link></li>
                    <li><Link to="/notice/gallery">갤러리</Link></li>
                  </div>
                )}
              </li>

              <li className="dropdown"
                onMouseEnter={() => toggleMenu('benefits')}
                onMouseLeave={() => toggleMenu(null)}>
                <Link to="/benefits">제휴 혜택</Link>
                {activeMenu === 'benefits' && (
                  <div className="dropdown-container">
                    <li><Link to="/benefits/partners">제휴업체 리스트</Link></li>
                  </div>
                )}
              </li>

              <li className="dropdown"
                onMouseEnter={() => toggleMenu('contact')}
                onMouseLeave={() => toggleMenu(null)}>
                <Link to="/contact">문의</Link>
                {activeMenu === 'contact' && (
                  <div className="dropdown-container">
                    <li><Link to="/contact/faq">FAQ</Link></li>
                    <li><Link to="/contact/qna">Q&A</Link></li>
                    <li><Link to="/contact/board-help">게시판 이용 문의</Link></li>
                    <li><Link to="/contact/report">민원 접수</Link></li>
                  </div>
                )}
              </li>

              <li className="dropdown"
                onMouseEnter={() => toggleMenu('resources')}
                onMouseLeave={() => toggleMenu(null)}>
                <Link to="/resources">자료실</Link>
                {activeMenu === 'resources' && (
                  <div className="dropdown-container">
                    <li><Link to="/resources/map">공과대학 내부 지도</Link></li>
                    <li><Link to="/resources/borrow-list">대여사업 물품 목록</Link></li>
                    <li><Link to="/resources/constitution">공과대학 학생회칙</Link></li>
                    <li><Link to="/resources/finance">회계 내역 공개</Link></li>
                    <li><Link to="/resources/inspection">시설 정기 점검 결과</Link></li>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        )}

        {isMobile && (
          <div className='header-right'>
            <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="메뉴 열기">
              <HiMenu />
            </button>
            {menuOpen && (
              <div className="mobile-menu-overlay">
                <div className="mobile-menu">
                  <button className="close-button" onClick={() => setMenuOpen(false)} aria-label="메뉴 닫기">
                    <HiX />
                  </button>
                  <ul className="mobile-nav-list">
                    <li>
                    <button className={`mobile-nav-button ${activeMenu === 'about' ? 'active' : ''}`} onClick={() => toggleMenu('about')}>학생회 소개</button>
                      {activeMenu === 'about' && (
                        <ul className="mobile-submenu">
                          <li><Link to="/about/intro" onClick={() => setMenuOpen(false)}>공과대학 학생회 소개</Link></li>
                          <li><Link to="/about/greeting" onClick={() => setMenuOpen(false)}>인사말</Link></li>
                          <li><Link to="/about/org" onClick={() => setMenuOpen(false)}>조직도</Link></li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <button className={`mobile-nav-button ${activeMenu === 'notice' ? 'active' : ''}`} onClick={() => toggleMenu('notice')}>알림</button>
                      {activeMenu === 'notice' && (
                        <ul className="mobile-submenu">
                          <li><Link to="/notice/announcement" onClick={() => setMenuOpen(false)}>공지사항</Link></li>
                          <li><Link to="/notice/calendar" onClick={() => setMenuOpen(false)}>월별 행사</Link></li>
                          <li><Link to="/notice/study-support" onClick={() => setMenuOpen(false)}>학습필력</Link></li>
                          <li><Link to="/notice/promises" onClick={() => setMenuOpen(false)}>공약 이행률</Link></li>
                          <li><Link to="/notice/gallery" onClick={() => setMenuOpen(false)}>갤러리</Link></li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <button className={`mobile-nav-button ${activeMenu === 'benefits' ? 'active' : ''}`} onClick={() => toggleMenu('benefits')}>제휴 혜택</button>
                      {activeMenu === 'benefits' && (
                        <ul className="mobile-submenu">
                          <li><Link to="/benefits/partners" onClick={() => setMenuOpen(false)}>제휴업체 리스트</Link></li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <button className={`mobile-nav-button ${activeMenu === 'contact' ? 'active' : ''}`} onClick={() => toggleMenu('contact')}>문의</button>
                      {activeMenu === 'contact' && (
                        <ul className="mobile-submenu">
                          <li><Link to="/contact/faq" onClick={() => setMenuOpen(false)}>FAQ</Link></li>
                          <li><Link to="/contact/qna" onClick={() => setMenuOpen(false)}>Q&A</Link></li>
                          <li><Link to="/contact/board-help" onClick={() => setMenuOpen(false)}>게시판 이용 문의</Link></li>
                          <li><Link to="/contact/report" onClick={() => setMenuOpen(false)}>민원 접수</Link></li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <button className={`mobile-nav-button ${activeMenu === 'resources' ? 'active' : ''}`} onClick={() => toggleMenu('resources')}>자료실</button>
                      {activeMenu === 'resources' && (
                        <ul className="mobile-submenu">
                          <li><Link to="/resources/map" onClick={() => setMenuOpen(false)}>공과대학 내부 지도</Link></li>
                          <li><Link to="/resources/borrow-list" onClick={() => setMenuOpen(false)}>대여사업 물품 목록</Link></li>
                          <li><Link to="/resources/constitution" onClick={() => setMenuOpen(false)}>공과대학 학생회칙</Link></li>
                          <li><Link to="/resources/finance" onClick={() => setMenuOpen(false)}>회계 내역 공개</Link></li>
                          <li><Link to="/resources/inspection" onClick={() => setMenuOpen(false)}>시설 정기 점검 결과</Link></li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            )}

          </div>
        )}
      </header>
    </>
  );
}

export default HeaderBar; 