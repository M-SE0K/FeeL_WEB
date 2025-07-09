import React from 'react';
import './cards.css'; // 공통 스타일을 공유해도 좋음
import { FaCompass } from 'react-icons/fa';

function AllianceCard() {
  return (
    <div className="card notice-card">
      <FaCompass size={50} />
      <h2>제휴지도</h2>
      <p className='AllianceCard-text'>공과대학 학생만을 위한 <br/> 제휴 정보를 확인해보세요!</p>
    </div>
  );
}

export default AllianceCard;
