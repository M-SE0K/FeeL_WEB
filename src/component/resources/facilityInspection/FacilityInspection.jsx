import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiCalendar } from 'react-icons/fi';
import './facilityInspection.css';

// 월별 이미지 데이터
const inspectionData = [
  {
    month: '2024년 12월',
    period: '2024-12',
    images: [
      { id: 1, src: require('../../../img/2024-12/post1.jpeg'), alt: '2024년 12월 시설 점검 1' },
      { id: 2, src: require('../../../img/2024-12/post2.jpeg'), alt: '2024년 12월 시설 점검 2' }
    ]
  },
  {
    month: '2025년 1월',
    period: '2025-01',
    images: [
      { id: 1, src: require('../../../img/2025-01/post1.jpeg'), alt: '2025년 1월 시설 점검 1' },
      { id: 2, src: require('../../../img/2025-01/post2.jpeg'), alt: '2025년 1월 시설 점검 2' }
    ]
  },
  {
    month: '2025년 2월',
    period: '2025-02',
    images: [
      { id: 1, src: require('../../../img/2025-02/post1.jpeg'), alt: '2025년 2월 시설 점검 1' },
      { id: 2, src: require('../../../img/2025-02/post2.jpeg'), alt: '2025년 2월 시설 점검 2' }
    ]
  },
  {
    month: '2025년 3월',
    period: '2025-03',
    images: [
      { id: 1, src: require('../../../img/2025-03/post1.jpeg'), alt: '2025년 3월 시설 점검 1' },
      { id: 2, src: require('../../../img/2025-03/post2.jpeg'), alt: '2025년 3월 시설 점검 2' }
    ]
  },
  {
    month: '2025년 4월',
    period: '2025-04',
    images: [
      { id: 1, src: require('../../../img/2025-04/post1.jpeg'), alt: '2025년 4월 시설 점검 1' },
      { id: 2, src: require('../../../img/2025-04/post2.jpeg'), alt: '2025년 4월 시설 점검 2' }
    ]
  },
  {
    month: '2025년 5월',
    period: '2025-05',
    images: [
      { id: 1, src: require('../../../img/2025-05/post1.jpeg'), alt: '2025년 5월 시설 점검 1' },
      { id: 2, src: require('../../../img/2025-05/post2.jpeg'), alt: '2025년 5월 시설 점검 2' }
    ]
  },
  {
    month: '2025년 7월',
    period: '2025-07',
    images: [
      { id: 1, src: require('../../../img/2025-07/post1.jpeg'), alt: '2025년 7월 시설 점검 1' },
      { id: 2, src: require('../../../img/2025-07/post2.jpeg'), alt: '2025년 7월 시설 점검 2' }
    ]
  },
  {
    month: '2025년 8월',
    period: '2025-08',
    images: [
      { id: 1, src: require('../../../img/2025-08/post1.jpeg'), alt: '2025년 8월 시설 점검 1' },
      { id: 2, src: require('../../../img/2025-08/post2.jpeg'), alt: '2025년 8월 시설 점검 2' }
    ]
  },
  {
    month: '2025년 9월',
    period: '2025-09',
    images: [
      { id: 1, src: require('../../../img/2025-09/post1.png'), alt: '2025년 9월 시설 점검 1' },
      { id: 2, src: require('../../../img/2025-09/post2.png'), alt: '2025년 9월 시설 점검 2' }
    ]
  }
];

// 이미지 모달 컴포넌트
const ImageModal = ({ image, allImages, currentIndex, onClose, onNext, onPrev }) => {
  return (
    <motion.div
      className="image-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="image-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          <FiX />
        </button>

        {allImages.length > 1 && (
          <>
            <button className="modal-nav-button modal-prev" onClick={onPrev}>
              <FiChevronLeft />
            </button>
            <button className="modal-nav-button modal-next" onClick={onNext}>
              <FiChevronRight />
            </button>
          </>
        )}

        <motion.div
          className="modal-image-wrapper"
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <img src={image.src} alt={image.alt} className="modal-image" />
          <div className="modal-info">
            <p>{image.alt}</p>
          </div>
        </motion.div>

        {allImages.length > 1 && (
          <div className="modal-counter">
            {currentIndex + 1} / {allImages.length}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function FacilityInspection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedMonthImages, setSelectedMonthImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleImageClick = (image, monthImages) => {
    const imageIndex = monthImages.findIndex(img => img.id === image.id);
    setSelectedImage(image);
    setSelectedMonthImages(monthImages);
    setCurrentImageIndex(imageIndex);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedMonthImages([]);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % selectedMonthImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(selectedMonthImages[nextIndex]);
  };

  const handlePrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + selectedMonthImages.length) % selectedMonthImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(selectedMonthImages[prevIndex]);
  };

  const handleNextSlide = () => {
    if (currentSlide < inspectionData.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="facility-inspection-container">
      {/* 헤더 */}
      <motion.div
        className="facility-inspection-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-icon">
          <FiCalendar />
        </div>
        <h1>시설 점검 결과</h1>
        <p>공과대학 학생회 월별 시설 점검 현황입니다</p>
      </motion.div>

      {/* 슬라이더 */}
      <div className="slider-container">
        <div className="slider-wrapper">
          {/* 이전 버튼 */}
          <button
            className="slider-control-button slider-prev-button"
            onClick={handlePrevSlide}
            disabled={currentSlide === 0}
          >
            <FiChevronLeft />
          </button>

          {/* 슬라이드 */}
          <div className="slider-content">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="slide"
              >
                <div className="month-header-slide">
                  <div className="month-badge">{inspectionData[currentSlide].month}</div>
                </div>

                <div className="inspection-grid">
                  {inspectionData[currentSlide].images.map((image, imageIndex) => (
                    <motion.div
                      key={image.id}
                      className="inspection-card"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: imageIndex * 0.1, duration: 0.3 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      onClick={() => handleImageClick(image, inspectionData[currentSlide].images)}
                    >
                      <div className="inspection-image-container">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="inspection-image"
                          loading="lazy"
                        />
                        <div className="inspection-overlay">
                          <span className="view-text">자세히 보기</span>
                        </div>
                      </div>
                      <div className="inspection-info">
                        <p>{image.alt}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 다음 버튼 */}
          <button
            className="slider-control-button slider-next-button"
            onClick={handleNextSlide}
            disabled={currentSlide === inspectionData.length - 1}
          >
            <FiChevronRight />
          </button>
        </div>

        

        {/* 슬라이드 카운터 */}
        <div className="slider-counter-display">
          <span className="current-slide">{currentSlide + 1}</span>
          <span className="separator"> / </span>
          <span className="total-slides">{inspectionData.length}</span>
        </div>
      </div>

      {/* 안내 메시지 */}
      <motion.div
        className="inspection-notice"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p>📋 시설 점검은 매월 정기적으로 진행되며, 학우들의 편의를 위해 지속적으로 개선하고 있습니다.</p>
      </motion.div>

      {/* 이미지 모달 */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            allImages={selectedMonthImages}
            currentIndex={currentImageIndex}
            onClose={handleCloseModal}
            onNext={handleNextImage}
            onPrev={handlePrevImage}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

