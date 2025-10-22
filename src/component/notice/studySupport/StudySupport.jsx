import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './studySupport.css';

// 월별 데이터 구조: 3월~11월
const AVAILABLE_MONTHS = [3, 4, 5, 6, 7, 8, 9, 10, 11];

const MONTH_NAMES = {
  3: '3월', 4: '4월', 5: '5월', 6: '6월', 7: '7월',
  8: '8월', 9: '9월', 10: '10월', 11: '11월'
};

export default function StudySupport() {
  const [selectedMonth, setSelectedMonth] = useState(3);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 선택된 월의 이미지 경로 배열 생성
  const getMonthImages = (month) => {
    const images = [];
    for (let i = 1; i <= 6; i++) {
      images.push(`${process.env.PUBLIC_URL}/feel_calendar/${month}/${month}_${i}.png`);
    }
    return images;
  };

  const currentImages = getMonthImages(selectedMonth);

  // 월 변경 핸들러
  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    setCurrentImageIndex(0);
  };

  // 이미지 네비게이션
  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="study-support-page">
      {/* 헤더 */}
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
      </motion.div>

      {/* 월 선택 */}
      <motion.div
        className="month-selector-bar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {AVAILABLE_MONTHS.map((month) => (
          <motion.button
            key={month}
            className={`month-btn ${selectedMonth === month ? 'active' : ''}`}
            onClick={() => handleMonthChange(month)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {MONTH_NAMES[month]}
          </motion.button>
        ))}
      </motion.div>

      {/* 이미지 슬라이더 */}
      <motion.div
        className="slider-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="slider-main">
          {/* 이전 버튼 */}
          <motion.button
            className="nav-button prev-btn"
            onClick={handlePrevImage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronLeft />
          </motion.button>

          {/* 이미지와 인디케이터 */}
          <div className="image-section">
            <motion.div
              className="image-container"
              key={`${selectedMonth}-${currentImageIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={currentImages[currentImageIndex]}
                alt={`${MONTH_NAMES[selectedMonth]} 행사 일정 ${currentImageIndex + 1}`}
                className="calendar-image"
              />
            </motion.div>

            {/* 인디케이터 */}
            <div className="image-indicators">
              {currentImages.map((_, index) => (
                <button
                  key={index}
                  className={`indicator-dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`${index + 1}번째 이미지로 이동`}
                />
              ))}
            </div>

            {/* 카운터 */}
            <div className="image-counter">
              {currentImageIndex + 1} / {currentImages.length}
            </div>
          </div>

          {/* 다음 버튼 */}
          <motion.button
            className="nav-button next-btn"
            onClick={handleNextImage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronRight />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
