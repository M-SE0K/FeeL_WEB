import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import './Finance.css';
import { financeTransactions, financeSummary } from './financeData.js';
import { financeIncome, incomeSummary } from './income.js';

export default function Finance() {
  const [activeTab, setActiveTab] = useState('지출');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // 필터링된 거래 내역 (지출)
  const filteredTransactions = useMemo(() => {
    return financeTransactions.filter(transaction => {
      const matchesSearch = 
        transaction.detail?.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        transaction.content?.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        transaction.vendor?.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        transaction.items?.some(item => item.item?.toLowerCase().includes(searchKeyword.toLowerCase()));
      
      const category = transaction.eventManagement > 0 ? '행사관리' :
                      transaction.officeManagement > 0 ? '사무관리' :
                      transaction.organizationManagement > 0 ? '조직관리' :
                      transaction.other > 0 ? '기타' : '';
      
      const matchesCategory = selectedCategory === '전체' || category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchKeyword, selectedCategory]);

  // 필터링된 수입 내역
  const filteredIncome = useMemo(() => {
    return financeIncome.filter(income => {
      const matchesSearch = 
        income.detail?.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        income.content?.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        income.categoryItem?.toLowerCase().includes(searchKeyword.toLowerCase());
      
      const matchesCategory = selectedCategory === '전체' || income.categoryItem === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchKeyword, selectedCategory]);

  // 페이지별 데이터
  const paginatedTransactions = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredTransactions.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredTransactions, currentPage]);

  const paginatedIncome = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredIncome.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredIncome, currentPage]);

  const totalPages = useMemo(() => {
    const total = activeTab === '지출' ? filteredTransactions.length : filteredIncome.length;
    return Math.ceil(total / itemsPerPage);
  }, [activeTab, filteredTransactions.length, filteredIncome.length]);

  // 금액 포맷팅
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ko-KR').format(amount);
  };

  // 날짜 포맷팅
  const formatDate = (dateString) => {
    return dateString;
  };

  const categories = ['전체', '행사관리', '사무관리', '조직관리', '기타'];

  // 지출 사용 비율 계산
  const totalExpenditure = financeSummary.totalExpenditure;
  const calculateExpenditurePercentage = (amount) => {
    if (totalExpenditure === 0) return 0;
    return ((amount / totalExpenditure) * 100).toFixed(2);
  };

  const expenditureRates = {
    event: calculateExpenditurePercentage(financeSummary.eventManagement),
    office: calculateExpenditurePercentage(financeSummary.officeManagement),
    organization: calculateExpenditurePercentage(financeSummary.organizationManagement),
    other: calculateExpenditurePercentage(financeSummary.other)
  };

  // 수입 대비 지출 비율 계산
  const totalIncome = incomeSummary.totalIncome;
  const incomeOrganizationRate = 3.05; // 수입에 대한 조직 관리 사용비율
  
  // 탭 변경 시 페이지 초기화
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSelectedCategory('전체');
  };

  return (
    <motion.div
      className="finance-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* 헤더 */}
      <div className="finance-header">
        <h1>회계 내역 공개</h1>
        <div className="finance-search">
          <input
            type="text"
            placeholder="검색어를 입력하세요 (내역, 거래처, 품목 등)..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="finance-search-input"
          />
        </div>
      </div>

      {/* 탭 */}
      <div className="finance-tabs">
        <button
          className={`finance-tab ${activeTab === '지출' ? 'active' : ''}`}
          onClick={() => handleTabChange('지출')}
        >
          지출
        </button>
        <button
          className={`finance-tab income-tab ${activeTab === '수입' ? 'active' : ''}`}
          onClick={() => handleTabChange('수입')}
        >
          수입
        </button>
      </div>

      {/* 카테고리 필터 */}
      {activeTab === '지출' && (
        <div className="finance-category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`finance-category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* 요약 정보 */}
      {activeTab === '지출' ? (
        <div className="finance-summary">
          <div className="summary-card">
            <div className="summary-label">총 지출액</div>
            <div className="summary-value total">{formatCurrency(financeSummary.totalExpenditure)}원</div>
          </div>
          <div className="summary-card">
            <div className="summary-label">행사관리</div>
            <div className="summary-value event">{formatCurrency(financeSummary.eventManagement)}원</div>
            <div className="summary-percentage">사용 비율: {expenditureRates.event}%</div>
            <div className="summary-progress">
              <div className="progress-bar event" style={{ width: `${expenditureRates.event}%` }}></div>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-label">사무관리</div>
            <div className="summary-value office">{formatCurrency(financeSummary.officeManagement)}원</div>
            <div className="summary-percentage">사용 비율: {expenditureRates.office}%</div>
            <div className="summary-progress">
              <div className="progress-bar office" style={{ width: `${expenditureRates.office}%` }}></div>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-label">조직관리</div>
            <div className="summary-value org">{formatCurrency(financeSummary.organizationManagement)}원</div>
            <div className="summary-percentage">사용 비율: {expenditureRates.organization}%</div>
            <div className="summary-progress">
              <div className="progress-bar org" style={{ width: `${expenditureRates.organization}%` }}></div>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-label">기타</div>
            <div className="summary-value other">{formatCurrency(financeSummary.other)}원</div>
            <div className="summary-percentage">사용 비율: {expenditureRates.other}%</div>
            <div className="summary-progress">
              <div className="progress-bar other" style={{ width: `${expenditureRates.other}%` }}></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="finance-summary">
          <div className="summary-card">
            <div className="summary-label">총 수입액</div>
            <div className="summary-value total">{formatCurrency(incomeSummary.totalIncome)}원</div>
          </div>
          <div className="summary-card">
            <div className="summary-label">총 지출액</div>
            <div className="summary-value total">{formatCurrency(financeSummary.totalExpenditure)}원</div>
          </div>
          <div className="summary-card income-summary-card" style={{ borderColor: '#10b981', background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)' }}>
            <div className="summary-label">잔액</div>
            <div className="summary-value income-org" style={{ color: '#10b981' }}>
              {formatCurrency(incomeSummary.totalIncome - financeSummary.totalExpenditure)}원
            </div>
            <div className="summary-percentage">수입 - 지출</div>
          </div>
          <div className="summary-card income-summary-card">
            <div className="summary-label">조직관리 사용비율</div>
            <div className="summary-value income-org">{incomeOrganizationRate}%</div>
            <div className="summary-percentage">수입 대비 조직관리 사용 비율</div>
            <div className="summary-progress">
              <div className="progress-bar org" style={{ width: `${incomeOrganizationRate}%` }}></div>
            </div>
          </div>
          <div className="summary-card income-summary-card">
            <div className="summary-label">수입 대비 지출 비율</div>
            <div className="summary-value income-org">
              {totalIncome > 0 ? ((financeSummary.totalExpenditure / totalIncome) * 100).toFixed(2) : 0}%
            </div>
            <div className="summary-percentage">전체 사용률</div>
            <div className="summary-progress">
              <div className="progress-bar event" style={{ width: `${totalIncome > 0 ? ((financeSummary.totalExpenditure / totalIncome) * 100) : 0}%` }}></div>
            </div>
          </div>
        </div>
      )}

      {/* 거래 내역 테이블 */}
      {activeTab === '지출' ? (
        <div className="finance-table-wrapper">
          <div className="finance-table-container">
            <table className="finance-table">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>영수증<br/>날짜</th>
                  <th>내역</th>
                  <th>내용</th>
                  <th>거래처</th>
                  <th>품목</th>
                  <th>행사관리</th>
                  <th>사무관리</th>
                  <th>조직관리</th>
                  <th>기타</th>
                  <th>합계</th>
                  <th>비고</th>
                </tr>
              </thead>
              <tbody>
                {paginatedTransactions.length > 0 ? (
                  paginatedTransactions.map((transaction, index) => (
                    <motion.tr
                      key={transaction.no}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.02 }}
                      className="finance-table-row"
                    >
                      <td className="text-center">{transaction.no}</td>
                      <td className="text-center date">{formatDate(transaction.receiptDate)}</td>
                      <td>{transaction.detail || '-'}</td>
                      <td>{transaction.content || '-'}</td>
                      <td>{transaction.vendor || '-'}</td>
                      <td className="items-cell">
                        {transaction.items?.map((item, idx) => (
                          <div key={idx} className="item-detail">
                            {item.item} ({formatCurrency(item.amount)}원)
                          </div>
                        )) || '-'}
                      </td>
                      <td className="text-right amount">{transaction.eventManagement > 0 ? formatCurrency(transaction.eventManagement) : '-'}</td>
                      <td className="text-right amount">{transaction.officeManagement > 0 ? formatCurrency(transaction.officeManagement) : '-'}</td>
                      <td className="text-right amount">{transaction.organizationManagement > 0 ? formatCurrency(transaction.organizationManagement) : '-'}</td>
                      <td className="text-right amount">{transaction.other > 0 ? formatCurrency(transaction.other) : '-'}</td>
                      <td className="text-right total-amount">{formatCurrency(transaction.total)}</td>
                      <td className="remarks">{transaction.remarks || '-'}</td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="12" className="no-results">
                      검색 결과가 없습니다.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="finance-table-wrapper">
          <div className="finance-table-container">
            <table className="income-table">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>카테고리</th>
                  <th>세부내역</th>
                  <th>내용</th>
                  <th>금액</th>
                  <th>비고</th>
                </tr>
              </thead>
              <tbody>
                {paginatedIncome.length > 0 ? (
                  paginatedIncome.map((income, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.02 }}
                      className="finance-table-row"
                    >
                      <td className="text-center">{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                      <td>{income.categoryItem || '-'}</td>
                      <td>{income.detail || '-'}</td>
                      <td>{income.content || '-'}</td>
                      <td className="text-right amount">{formatCurrency(income.amount)}</td>
                      <td className="remarks">{income.remarks || '-'}</td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="no-results">
                      검색 결과가 없습니다.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="finance-pagination">
          <button
            className="pagination-button"
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            이전
          </button>
          <span className="pagination-info">
            {currentPage} / {totalPages}
          </span>
          <button
            className="pagination-button"
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            다음
          </button>
        </div>
      )}

      {/* 안내 메시지 */}
      <div className="finance-notice">
        <h3>📋 회계 내역 안내</h3>
        <ul>
          <li>위 회계 내역은 공과대학 학생회의 투명한 재정 운영을 위해 공개됩니다.</li>
          <li>모든 거래 내역은 영수증과 함께 보관되며, 감사 시 확인 가능합니다.</li>
          <li>문의사항이 있으시면 학생회로 연락 부탁드립니다.</li>
        </ul>
      </div>
    </motion.div>
  );
}

