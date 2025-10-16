import React from 'react';
import './pledge.css';
import CircularProgress from './CircularProgress';
import PledgeList from './PledgeList';

function Pledge() {
  // 공약 이행률 데이터
  const pledgeData = {
    overall: {
      title: "전체 공약 이행률",
      percentage: 75,
      color: "#004ca5"
    },
    categories: [
      {
        id: "culture",
        title: "문화/예술",
        percentage: 80,
        color: "#ff6b6b",
        pledges: [
          "학술제 개최 및 지원",
          "E-sports 대회 개최",
          "문화 행사 기획",
          "동아리 지원 프로그램"
        ]
      },
      {
        id: "communication",
        title: "소통/복지",
        percentage: 70,
        color: "#4ecdc4",
        pledges: [
          "정기 소통 창구 운영",
          "학우 의견 수렴 시스템",
          "투명한 정책 결정 과정",
          "학생 복지 정책 추진"
        ]
      },
      {
        id: "employment",
        title: "취업/학습",
        percentage: 65,
        color: "#45b7d1",
        pledges: [
          "취업 지원 프로그램",
          "학습 공간 확충",
          "멘토링 프로그램",
          "자격증 취득 지원"
        ]
      },
      {
        id: "facility",
        title: "시설/안전",
        percentage: 85,
        color: "#96ceb4",
        pledges: [
          "낡은 시설 개선",
          "편의 공간 확충",
          "안전 시설 점검",
          "쾌적한 환경 조성"
        ]
      }
    ]
  };

  return (
    <div className="pledge-container">
      <div className="pledge-header">
        <h1>공약 이행률</h1>
        <p>제57대 공과대학 학생회 '필:花'의 공약 이행 현황을 확인해보세요</p>
      </div>

      <div className="pledge-content">
        {/* 전체 공약 이행률 */}
        <div className="overall-progress-section">
          <h2>전체 공약 이행률</h2>
          <div className="overall-progress-container">
            <CircularProgress 
              percentage={pledgeData.overall.percentage}
              color={pledgeData.overall.color}
              size={200}
              strokeWidth={15}
            />
            <div className="overall-progress-text">
              <span className="percentage">{pledgeData.overall.percentage}%</span>
              <span className="description">전체 공약 이행률</span>
            </div>
          </div>
        </div>

        {/* 분야별 공약 이행률 */}
        <div className="category-progress-section">
          <h2>분야별 공약 이행률</h2>
          <div className="category-grid">
            {pledgeData.categories.map((category) => (
              <div key={category.id} className="category-card">
                <div className="category-header">
                  <CircularProgress 
                    percentage={category.percentage}
                    color={category.color}
                    size={160}
                    strokeWidth={10}
                  />
                  <div className="category-info">
                    <h3>{category.title}</h3>
                    <span className="category-percentage">{category.percentage}%</span>
                  </div>
                </div>
                <div className="category-content">
                  <PledgeList pledges={category.pledges} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pledge;
