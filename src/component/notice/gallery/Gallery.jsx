import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiEye, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ImageSlider from './ImageSlider';
import './gallery.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

export default function Gallery() {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const categories = [
    { id: 'all', label: '전체' },
    { id: '행사', label: '행사' },
    { id: '일상', label: '일상' },
    { id: '기타', label: '기타' }
  ];

  const fetchGalleries = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      let url = `${API_URL}/api/gallery?page=${currentPage}&₩ize=12`;
      if (selectedCategory !== 'all') {
        url += `&category=${encodeURIComponent(selectedCategory)}`;
      }
      const response = await fetch(url);
      if (!response.ok) throw new Error('갤러리를 불러오는데 실패했습니다.');
      const data = await response.json();
      setGalleries(data.content);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [currentPage, selectedCategory]);

  useEffect(() => {
    fetchGalleries();
  }, [fetchGalleries]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchKeyword.trim()) {
      fetchGalleries();
      return;
    }

    setLoading(true);
    setError(null);
    try {
      let url = `${API_URL}/api/gallery/search?keyword=${encodeURIComponent(searchKeyword)}&page=${currentPage}&size=12`;
      if (selectedCategory !== 'all') {
        url += `&category=${encodeURIComponent(selectedCategory)}`;
      }
      const response = await fetch(url);
      if (!response.ok) throw new Error('검색에 실패했습니다.');
      const data = await response.json();
      setGalleries(data.content);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(0);
    setSearchKeyword('');
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseSlider = () => {
    setSelectedImageIndex(null);
  };

  // 스켈레톤 로딩
  const SkeletonCard = () => (
    <div className="gallery-card skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-title"></div>
    </div>
  );

  return (
    <div className="gallery-container">
      {/* 헤더 */}
      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>갤러리</h1>
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-input-wrapper">
            <FiSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="검색어를 입력하세요"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
          </div>
          <button type="submit" className="search-button">
            검색
          </button>
        </form>
      </motion.div>

      {/* 카테고리 필터 */}
      <motion.div
        className="category-filter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.label}
          </motion.button>
        ))}
      </motion.div>

      {/* 에러 메시지 */}
      {error && (
        <motion.div
          className="gallery-error"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {error}
        </motion.div>
      )}

      {/* 갤러리 그리드 */}
      <motion.div
        className="gallery-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {loading ? (
          // 스켈레톤 로딩
          [...Array(12)].map((_, i) => <SkeletonCard key={i} />)
        ) : galleries.length === 0 ? (
          <div className="no-galleries">갤러리 항목이 없습니다.</div>
        ) : (
          galleries.map((gallery, index) => (
            <motion.div
              key={gallery.id}
              className="gallery-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              onClick={() => handleImageClick(index)}
            >
              <div className="gallery-image-container">
                <img
                  src={`${API_URL}${gallery.imageUrl}`}
                  alt={gallery.title}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <FiEye className="view-icon" />
                  <span>{gallery.viewCount}</span>
                </div>
              </div>
              <div className="gallery-info">
                <h3>{gallery.title}</h3>
                {gallery.category && (
                  <span className="gallery-category">{gallery.category}</span>
                )}
              </div>
            </motion.div>
          ))
        )}
      </motion.div>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <motion.div
          className="pagination"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="pagination-button"
            whileHover={{ scale: currentPage === 0 ? 1 : 1.05 }}
            whileTap={{ scale: currentPage === 0 ? 1 : 0.95 }}
          >
            <FiChevronLeft /> 이전
          </motion.button>
          <span className="pagination-info">
            {currentPage + 1} / {totalPages}
          </span>
          <motion.button
            onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
            disabled={currentPage >= totalPages - 1}
            className="pagination-button"
            whileHover={{ scale: currentPage >= totalPages - 1 ? 1 : 1.05 }}
            whileTap={{ scale: currentPage >= totalPages - 1 ? 1 : 0.95 }}
          >
            다음 <FiChevronRight />
          </motion.button>
        </motion.div>
      )}

      {/* 이미지 슬라이더 모달 */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <ImageSlider
            images={galleries}
            initialIndex={selectedImageIndex}
            onClose={handleCloseSlider}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
