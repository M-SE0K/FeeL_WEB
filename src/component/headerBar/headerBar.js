// components/HeaderBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './headerBar.css';

function HeaderBar() {
  return (
    <header className="header-bar">
      <nav className="nav-menu">
        <li className='nav-logo'><Link to="/">전북대학교 공과대학 학생회</Link></li>
        <ul className="nav-list">
          <li className='nav-about'><Link to="/about">학생회소개</Link></li>
          <li className='nav-notice'><Link to="/notice">알림</Link></li>
          <li className='nav-benefits'><Link to="/benefits">제휴 혜택</Link></li>
          <li className='nav-contact'><Link to="/contact">문의</Link></li>
          <li className='nav-resources'><Link to="/resources">자료실</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderBar;
