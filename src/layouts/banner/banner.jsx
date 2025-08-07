import React from 'react';
import './banner.css';
import feelLogo from '../../img/feel_logo.png';

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        {/* 왼쪽 섹션 - 로고와 슬로건 */}
        <div className="banner-left">
          <div className="banner-logo">
            <img src={feelLogo} alt="Feel Logo" />
          </div>
        </div>

        {/* 중앙 섹션 - 개인정보처리방침, 주소, 저작권 */}
        <div className="banner-center">
          <div className="banner-links">
            <span>개인정보처리방침</span>
            <span className="separator">|</span>
            <span>오시는길</span>
          </div>
          <div className="banner-divider"></div>
          <div className="banner-address-container">
            <div className="banner-address">
              [54896]전북특별자치도 전주시 덕진구 백제대로 567 공과대학 1호관 243호
            </div>
            <div className="instagram-container">
              <div className="instagram-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <div className="instagram-username">jbnu_coe</div>
            </div>
          </div>
          <div className="banner-copyright">
            Copyright © Jeonbuk National University. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner; 