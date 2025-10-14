/**
 * 날짜를 한국어 형식으로 포맷팅
 * @param {string} dateString - ISO 8601 날짜 문자열
 * @param {boolean} includeTime - 시간 포함 여부 (기본값: false)
 * @returns {string} 포맷팅된 날짜 문자열
 */
export const formatDate = (dateString, includeTime = false) => {
  const date = new Date(dateString);

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  if (includeTime) {
    options.hour = '2-digit';
    options.minute = '2-digit';
  }

  return date.toLocaleString('ko-KR', options);
};
