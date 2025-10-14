import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiClock, FiUser, FiEye, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { BsPinAngleFill } from 'react-icons/bs';

export default function AnnouncementContent({
  notices,
  pinnedNotices,
  loading,
  currentPage,
  setCurrentPage,
  totalPages,
  formatDate
}) {
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

  if (loading) {
    return (
      <>
        {[1, 2, 3, 4, 5].map((i) => (
          <SkeletonCard key={i} />
        ))}
      </>
    );
  }

  return (
    <>
      {/* 고정 공지사항 */}
      <AnimatePresence>
        {pinnedNotices.length > 0 && (
          <motion.div
            className="pinned-notices"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
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
                transition={{ delay: 0.3 + index * 0.1 }}
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
        transition={{ delay: 0.2 }}
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
    </>
  );
}
