import React from 'react';
import './pledge.css';
import CircularProgress from './CircularProgress';
import PledgeList from './PledgeList';

function Pledge() {
  // 공약 이행률 데이터
  const pledgeData = {
    overall: {
      title: "전체 공약 이행률",
      percentage: 71,
      color: "#004ca5"
    },
    categories: [
      {
        id: "culture",
        title: "문화/예술",
        percentage: 62,
        color: "#ff6b6b",
        pledges: [
          "공학체전",
          "공과대학 E-sports 대회 개최",
          "공과대학 축제",
          "국토 대장정"
        ]
      },
      {
        id: "communication",
        title: "소통/복지",
        percentage: 78,
        color: "#4ecdc4",
        pledges: [
          "찾아가는 공대 학생회",
          "예비군 버스 지원",
          "공대 월간 집필",
          "시험기간 간식 사업"
        ]
      },
      {
        id: "employment",
        title: "취업/학습",
        percentage: 60,
        color: "#45b7d1",
        pledges: [
          "시험 기간 해동 활성화",
          "전공 커리큘럼 로드맵",
          "기업 인터뷰 큐레이터",
          "장학금 알리미"
        ]
      },
      {
        id: "facility",
        title: "시설/안전",
        percentage: 87,
        color: "#96ceb4",
        pledges: [
          "흡연 구역 재정비",
          "공과대학 호관별 지도",
          "펌프형 비누 설치",
          "무인 유료 프린터 유지/보수"
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
