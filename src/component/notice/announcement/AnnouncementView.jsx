import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './announcement.css';
import noticesIndex from './notices.index.json';

export default function AnnouncementView() {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const notice = noticesIndex.find(n => n.slug === slug);

  useEffect(() => {
    if (!notice) return;
    const base = process.env.PUBLIC_URL || '';
    const filePath = notice.file.startsWith('/') ? `${base}${notice.file}` : `${base}/${notice.file}`;
    fetch(filePath)
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to load: ${filePath}`);
        return r.text();
      })
      .then(setContent)
      .catch(() => setContent('# 문서를 불러오지 못했습니다.'));
  }, [slug]);

  if (!notice) return (
    <div className="announce-view">
      <h2>문서를 찾을 수 없습니다.</h2>
      <Link to="/notice/announcement">목록으로</Link>
    </div>
  );

  return (
    <div className="announce-view">
      <div className="announce-view-header">
        <h1 className="announce-view-title">{notice.title}</h1>
        <div className="announce-view-date">{new Date(notice.date).toLocaleString()}</div>
      </div>
      <article className="announce-markdown">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
      <div className="announce-back">
        <Link to="/notice/announcement">← 목록으로</Link>
      </div>
    </div>
  );
}


