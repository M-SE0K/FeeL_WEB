import React from 'react';
import NoticeCard from './cards/noticeCard';
import AllianceCard from './cards/allianceCard';
import FaqCard from './cards/faqCard';
import ReportCard from './cards/reportCard';
import './cardSection.css';

function CardSection() {
  return (
    <div className="card-section">
      <div className='card1'><NoticeCard /></div>
      <div className='card2'><AllianceCard /></div>
      <div className='card3'><FaqCard /></div>
      <div className='card4'><ReportCard /></div>
    </div>
  );
}

export default CardSection;
