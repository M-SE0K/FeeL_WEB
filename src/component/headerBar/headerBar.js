// components/HeaderBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './headerBar.css'; // 스타일 분리

function HeaderBar() {
  return (
    <header className="header-bar">
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
  );
}

export default HeaderBar;
