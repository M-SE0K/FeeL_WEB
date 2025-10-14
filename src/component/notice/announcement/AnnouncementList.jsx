import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiClock, FiUser, FiEye, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { BsPinAngleFill } from 'react-icons/bs';
import './announcement.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

const CATEGORIES = [
  { id: 'all', label: '전체' },
  { id: '학과소식', label: '학과소식' },
  { id: '일반공지', label: '일반공지' },
  { id: '학사공지', label: '학사공지' },
  { id: '사업단공지', label: '사업단공지' },
  { id: '취업정보', label: '취업정보' },
];

export default function AnnouncementList() {
  const [notices, setNotices] = useState([]);
  const [pinnedNotices, setPinnedNotices] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchNotices();
    fetchPinnedNotices();
  }, [currentPage, selectedCategory]);

  const fetchNotices = async () => {
    setLoading(true);
    setError(null);
    try {
      let url = `${API_URL}/api/notices?page=${currentPage}&size=10`;
      if (selectedCategory !== 'all') {
        url += `&category=${encodeURIComponent(selectedCategory)}`;
      }
      const response = await fetch(url);
      if (!response.ok) throw new Error('공지사항을 불러오는데 실패했습니다.');
      const data = await response.json();
      setNotices(data.content);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchPinnedNotices = async () => {
    try {
      const response = await fetch(`${API_URL}/api/notices/pinned`);
      if (response.ok) {
        const data = await response.json();
        setPinnedNotices(data);
      }
    } catch (err) {
      console.error('고정 공지사항 로드 실패:', err);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchKeyword.trim()) {
      fetchNotices();
      return;
    }

    setLoading(true);
    setError(null);
    try {
      let url = `${API_URL}/api/notices/search?keyword=${encodeURIComponent(searchKeyword)}&page=${currentPage}&size=10`;
      if (selectedCategory !== 'all') {
        url += `&category=${encodeURIComponent(selectedCategory)}`;
      }
      const response = await fetch(url);
      if (!response.ok) throw new Error('검색에 실패했습니다.');
      const data = await response.json();
      setNotices(data.content);
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  // 스켈레톤 로딩 컴포넌트
  const SkeletonCard = () => (
    <div className="skeleton-card">
      <div className="skeleton-badge"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-meta">
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
        </div>
      </div>
    </div>
  );

  if (loading && currentPage === 0) {
    return (
      <div className="announcement-container">
        <div className="announcement-header">
          <h1>공지사항</h1>
        </div>
        {[1, 2, 3, 4, 5].map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="announcement-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="announcement-header">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          공지사항
        </motion.h1>
        <motion.form
          onSubmit={handleSearch}
          className="search-form"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="search-input-wrapper">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="search-input"
            />
          </div>
          <motion.button
            type="submit"
            className="search-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            검색
          </motion.button>
        </motion.form>
      </div>

      <AnimatePresence>
        {error && (
          <motion.div
            className="announcement-error"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 카테고리 필터 */}
      <motion.div
        className="category-filter"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {CATEGORIES.map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.label}
          </motion.button>
        ))}
      </motion.div>

      {/* 고정 공지사항 */}
      <AnimatePresence>
        {pinnedNotices.length > 0 && (
          <motion.div
            className="pinned-notices"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="pinned-header">
              <BsPinAngleFill className="pin-icon" />
              <h2>고정 공지</h2>
            </div>
            {pinnedNotices.map((notice, index) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Link
                  to={`/notice/announcement/${notice.id}`}
                  className="notice-item pinned"
                >
                  <div className="notice-badge">
                    <BsPinAngleFill /> 고정
                  </div>
                  <div className="notice-info">
                    <h3>{notice.title}</h3>
                    <div className="notice-meta">
                      <span className="notice-author">
                        <FiUser /> {notice.author}
                      </span>
                      <span className="notice-date">
                        <FiClock /> {formatDate(notice.createdAt)}
                      </span>
                      <span className="notice-views">
                        <FiEye /> {notice.viewCount}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 일반 공지사항 목록 */}
      <motion.div
        className="notice-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <AnimatePresence mode="wait">
          {notices.length === 0 ? (
            <motion.div
              className="no-notices"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              공지사항이 없습니다.
            </motion.div>
          ) : (
            notices.map((notice, index) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <Link
                  to={`/notice/announcement/${notice.id}`}
                  className="notice-item"
                >
                  {notice.category && (
                    <span className="notice-category">[{notice.category}]</span>
                  )}
                  <div className="notice-info">
                    <h3>{notice.title}</h3>
                    <div className="notice-meta">
                      <span className="notice-author">
                        <FiUser /> {notice.author}
                      </span>
                      <span className="notice-date">
                        <FiClock /> {formatDate(notice.createdAt)}
                      </span>
                      <span className="notice-views">
                        <FiEye /> {notice.viewCount}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </motion.div>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <motion.div
          className="pagination"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
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
    </motion.div>
  );
}
