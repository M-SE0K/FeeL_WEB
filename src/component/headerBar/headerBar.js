import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './headerBar.css';
import logoImg from '../../img/logo192.png';

function HeaderBar() {
  return (
    <>
      <header className="header-bar">
        <div className="logo">
          <Link to="/"><img src={logoImg} className="logo-img" alt="로고" /></Link>
          <Link to="/" className="logo-title">전북대학교 공과대학 학생회</Link>
        </div>
        <nav className="nav-menu">
          <ul className="nav-list">
            <li><Link to="/about">학생회소개</Link></li>
            <li><Link to="/notice">알림</Link></li>
            <li><Link to="/benefits">제휴 혜택</Link></li>
            <li><Link to="/contact">문의</Link></li>
            <li><Link to="/resources">자료실</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/about" element={<div>학생회소개 컴포넌트</div>} />
        <Route path="/notice" element={<div>알림 컴포넌트</div>} />
        <Route path="/benefits" element={<div>제휴 혜택 컴포넌트</div>} />
        <Route path="/contact" element={<div>문의 컴포넌트</div>} />
        <Route path="/resources" element={<div>자료실 컴포넌트</div>} />
        <Route path="/" element={<div>홈 컴포넌트</div>} />
      </Routes>
    </>
  );
}

export default HeaderBar;
