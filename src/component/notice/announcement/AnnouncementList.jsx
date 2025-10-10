import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './announcement.css';

// 정적 자산으로 포함될 마크다운 파일 목록을 JSON으로 관리
// 형식: { slug: '2025-09-10-welcome', title: '환영합니다', date: '2025-09-10', file: '/notices/2025-09-10-welcome.md' }
import noticesIndex from './notices.index.json';

export default function AnnouncementList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // 작성일(date) 내림차순 정렬
    const sorted = [...noticesIndex].sort((a, b) => new Date(b.date) - new Date(a.date));
    setItems(sorted);
  }, []);

  return (
    <div className="announce-list">
      <h1 className="announce-title">공지사항</h1>
      <ul className="announce-items">
        {items.map(n => (
          <li key={n.slug} className="announce-item">
            <Link to={`/notice/announcement/${n.slug}`} className="announce-link">
              <span className="announce-item-title">{n.title}</span>
              <span className="announce-item-date">{new Date(n.date).toLocaleDateString()}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


