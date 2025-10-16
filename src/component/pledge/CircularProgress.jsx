import React from 'react';
import './CircularProgress.css';

function CircularProgress({ percentage, color, size = 120, strokeWidth = 8 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="circular-progress-svg">
        {/* 배경 원 */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e0e0e0"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* 진행률 원 */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="progress-circle"
          style={{
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%'
          }}
        />
      </svg>
      <div className="circular-progress-text">
        <span className="percentage">{percentage}%</span>
      </div>
    </div>
  );
}

export default CircularProgress;
