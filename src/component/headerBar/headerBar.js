import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

import './headerBar.css';
import logoImg from '../../img/logo192.png';

function HeaderBar({isMobile}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header-bar">
        <div className="logo">
          <Link to="/"><img src={logoImg} className="logo-img" alt="로고" /></Link>
          <Link to="/" className="logo-title">전북대학교 공과대학 학생회</Link>
        </div>
        {!isMobile && (
        <nav className="nav-menu">
          <ul className="nav-list">
            <li><Link to="/about">학생회소개</Link></li>
            <li><Link to="/notice">알림</Link></li>
            <li><Link to="/benefits">제휴 혜택</Link></li>
            <li><Link to="/contact">문의</Link></li>
            <li><Link to="/resources">자료실</Link></li>
          </ul>
        </nav>
        )}

        {isMobile && (
        <>
          <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="메뉴 열기">
            <HiMenu />
          </button>=-
          {/* 사이드 메뉴 오픈 시 표시 */}
          {menuOpen && (
            <div className="mobile-menu-overlay">
              <div className="mobile-menu">
                <button className="close-button" onClick={() => setMenuOpen(false)} aria-label="메뉴 닫기">
                  <HiX />
                </button>
                <ul className="mobile-nav-list">
                  <li><Link to="/about" onClick={() => setMenuOpen(false)}>학생회소개</Link></li>
                  <li><Link to="/notice" onClick={() => setMenuOpen(false)}>알림</Link></li>
                  <li><Link to="/benefits" onClick={() => setMenuOpen(false)}>제휴 혜택</Link></li>
                  <li><Link to="/contact" onClick={() => setMenuOpen(false)}>문의</Link></li>
                  <li><Link to="/resources" onClick={() => setMenuOpen(false)}>자료실</Link></li>
                </ul>
              </div>
            </div>
          )}
        </>
      )}
      </header>
    </>
  );
}

export default HeaderBar;
