import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './resources.css';

const resourceCards = [
  {
    id: 1,
    title: '공과대학 지도',
    description: '공과대학 각 호관의 위치와 평면도를 확인할 수 있습니다.',
    icon: '🗺️',
    link: '/resources/map',
    color: 'blue'
  },
  {
    id: 2,
    title: '학생회칙',
    description: '공과대학 학생회의 회칙 및 규정을 확인할 수 있습니다.',
    icon: '📜',
    link: '/resources/constitution',
    color: 'green'
  },
  {
    id: 3,
    title: '대여사업 물품 목록',
    description: '학생회에서 대여 가능한 물품 목록과 수량을 확인할 수 있습니다.',
    icon: '📦',
    link: '/resources/rental',
    color: 'purple'
  },
  {
    id: 4,
    title: '회계 내역 공개',
    description: '공과대학 학생회의 투명한 재정 운영을 위한 회계 내역을 확인할 수 있습니다.',
    icon: '💰',
    link: '/resources/finance',
    color: 'green'
  },
  {
    id: 5,
    title: '시설 점검 결과',
    description: '공과대학 월별 시설 점검 현황을 확인할 수 있습니다.',
    icon: '📋',
    link: '/resources/inspection',
    color: 'orange'
  }
];

const Resources = () => {
  return (
    <motion.div
      className="resources-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="resources-header">
        <h1>학생회 자료실</h1>
        <p>공과대학 학생회의 다양한 자료를 확인하실 수 있습니다.</p>
      </div>

      <div className="resources-grid">
        {resourceCards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Link to={card.link} className={`resource-card ${card.color}`}>
              <div className="resource-icon">{card.icon}</div>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <div className="resource-arrow">→</div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Resources;
