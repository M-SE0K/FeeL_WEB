import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cards.css'; // 공통 스타일을 공유해도 좋음
import { FaQuestionCircle } from 'react-icons/fa';

function FaqCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/resources');
  };

  return (
    <div className="card notice-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <FaQuestionCircle size={40} />
      <h2>FAQ</h2>
      <p className='FaqCard-text'>궁금한 점이 생기셨나요?
      <br/>자주 묻는 질문을 확인해보세요!</p>
    </div>
  );
}

export default FaqCard; 