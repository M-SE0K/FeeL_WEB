import React from 'react';
import './cards.css'; // 공통 스타일을 공유해도 좋음
import { FaHandPaper } from 'react-icons/fa';

function ReportCard() {
  return (
    <div className="card notice-card">
      <FaHandPaper size={40} />
      <h2>민원접수</h2>
      <p className='ReportCard-text'>불편사항이 있으시다면?<br/>지금 바로 접수해주세요!</p>
    </div>
  );
}

export default ReportCard; 