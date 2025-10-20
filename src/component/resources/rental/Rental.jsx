import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './rental.css';

// 대여 물품 데이터
const rentalItems = [
  { id: 1, name: '공학용 계산기', quantity: 12, category: '학용품' },
  { id: 2, name: '우산', quantity: 20, category: '생활용품' },
  { id: 3, name: '헬멧', quantity: 13, category: '안전용품' },
  { id: 4, name: '배구공', quantity: 10, category: '체육용품' },
  { id: 5, name: '피구공(탱탱볼)', quantity: 5, category: '체육용품' },
  { id: 6, name: '농구공', quantity: 2, category: '체육용품' },
  { id: 7, name: '축구공', quantity: 5, category: '체육용품' },
  { id: 8, name: '탁구공', quantity: 9, category: '체육용품' },
  { id: 9, name: '조끼(빨)', quantity: 4, category: '체육용품' },
  { id: 10, name: '조끼(연)', quantity: 16, category: '체육용품' },
  { id: 11, name: '조끼(평)', quantity: 10, category: '체육용품' },
  { id: 12, name: '조끼(주)', quantity: 6, category: '체육용품' },
  { id: 13, name: '조끼(흰)', quantity: 1, category: '체육용품' },
  { id: 14, name: '조끼(파)', quantity: 13, category: '체육용품' },
  { id: 15, name: '조끼(학교지킴이)', quantity: 9, category: '안전용품' },
  { id: 16, name: '조끼(안전)', quantity: 13, category: '안전용품' },
];

const categories = ['전체', '학용품', '생활용품', '안전용품', '체육용품'];

export default function Rental() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchKeyword, setSearchKeyword] = useState('');

  // 필터링된 물품 목록
  const filteredItems = rentalItems.filter(item => {
    const matchesCategory = selectedCategory === '전체' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // 총 물품 수
  const totalItems = filteredItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.div
      className="rental-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* 헤더 */}
      <div className="rental-header">
        <h1>대여사업 물품 목록</h1>
        <div className="rental-search">
          <input
            type="text"
            placeholder="물품명 검색..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="rental-search-input"
          />
        </div>
      </div>

      {/* 카테고리 필터 */}
      <div className="rental-category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`rental-category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 통계 정보 */}
      <div className="rental-stats">
        <div className="rental-stat-card">
          <div className="stat-number">{filteredItems.length}</div>
          <div className="stat-label">물품 종류</div>
        </div>
        <div className="rental-stat-card">
          <div className="stat-number">{totalItems}</div>
          <div className="stat-label">총 수량</div>
        </div>
      </div>

      {/* 물품 테이블 */}
      <div className="rental-table-container">
        <table className="rental-table">
          <thead>
            <tr>
              <th>번호</th>
              <th>물품명</th>
              <th>카테고리</th>
              <th>수량</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="rental-table-row"
                >
                  <td className="text-center">{index + 1}</td>
                  <td className="item-name">{item.name}</td>
                  <td>
                    <span className={`category-badge ${item.category}`}>
                      {item.category}
                    </span>
                  </td>
                  <td className="text-center">
                    <span className={`quantity-badge ${item.quantity <= 5 ? 'low' : ''}`}>
                      {item.quantity}개
                    </span>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-results">
                  검색 결과가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 안내 메시지 */}
      <div className="rental-notice">
        <h3>📋 대여 안내</h3>
        <ul>
          <li>공과대학 학생회실에서 대여 가능합니다.</li>
          <li>신분증을 지참하여 주시기 바랍니다.</li>
          <li>파손 및 분실 시 변상 처리됩니다.</li>
          <li>사용 후 반드시 반납해 주세요.</li>
        </ul>
      </div>
    </motion.div>
  );
}

