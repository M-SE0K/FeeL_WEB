import { useEffect } from 'react'; // 리액트의 side-effect를 처리하기 위한 훅 import

// 커스텀 훅 정의: 창 크기 변화에 따라 레이아웃 높이를 실시간 조절
export function useLayoutResize() {
  useEffect(() => {
    // 🔁 resize 이벤트가 발생할 때마다 실행될 함수 정의
    const resizeLayout = () => {
      const vh = window.innerHeight; // 현재 뷰포트의 높이(px) 값을 가져옴

      // DOM 요소를 ID로 가져옴
      const header = document.getElementById('header-container');
      const slider = document.getElementById('slider-container');
      const cards = document.getElementById('cards-container');

      // 각 요소가 존재할 경우 style.height 속성을 직접 설정
      if (header && slider && cards) {
        header.style.height = `${vh * 0.1}px`;   // 헤더 높이 설정
        slider.style.height = `${vh * 0.58}px`;  // 슬라이더 높이 설정
        cards.style.height = `${vh * 0.32}px`;   // 카드 섹션 높이 설정
      }
    };

    // 🔗 브라우저 창 크기 변경 이벤트 리스너 등록
    window.addEventListener('resize', resizeLayout);

    resizeLayout(); // 컴포넌트 마운트 시 즉시 실행하여 초기 높이 반영

    // 🔌 컴포넌트 언마운트 시 리스너 제거 (메모리 누수 방지)
    return () => window.removeEventListener('resize', resizeLayout);
  }, []); // 의존성 배열이 빈 배열이므로 최초 1회만 실행됨
}
