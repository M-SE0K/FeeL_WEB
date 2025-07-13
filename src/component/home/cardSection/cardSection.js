import React from 'react';
import NoticeCard from './cards/noticeCard';
import AllianceCard from './cards/allianceCard';
import FaqCard from './cards/faqCard';
import ReportCard from './cards/reportCard';
import './cardSection.css';

import { useResponsive } from '../../hooks/useResponsive.js';
import { useLayoutResize } from '../../hooks/useLayoutResize.js';


function CardSection({ isMobile, isTablet, isDesktop }) {
  // const { isMobile, isTablet, isDesktop } = useResponsive();

  useLayoutResize();

  // 카드 배열
  const cards = [
    <div className="card1" key="1"><NoticeCard /></div>,
    <div className="card2" key="2"><AllianceCard /></div>,
    <div className="card3" key="3"><FaqCard /></div>,
    <div className="card4" key="4"><ReportCard /></div>
  ];

  // 조건에 따라 보여줄 카드 수 조정
  let displayedCards = cards;

  return (
    <div className="card-section">
      {displayedCards}
    </div>
  );
}

export default CardSection;
