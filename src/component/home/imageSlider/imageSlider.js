// import { useState, useEffect } from 'react'
// import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'; //react-icons 라이브러리로 화살표 아이콘 사용
// import './imageSlider.css';

// function ImageSlider({slides}){
//     const [current, setCurrent] = useState(0);  //각 이미지 별 상태 저장
//     const length = slides.length;               //받아온 이미지 배열의 길이 -> 재탕할 경우 생각해서

//     //이미지 슬라이더 0번째에서 -1에 대한 접근에 대한 처리, n번째에서 n+1의 접근에 대한 처리
//     const nextSlide = () => {   setCurrent(current === length - 1 ? 0 : current + 1);   };
//     const prevSlide = () => {   setCurrent(current === 0 ? length - 1 : current - 1);   };
    

//     //자동 슬라이드 인터벌 5초, 슬라이드가 존재하지 않는 경우(끝에 도달하는 경우 아님)에 대한 처리
//     useEffect(() => {
//         const interval = setInterval(() => {
//           nextSlide();
//         }, 100000); 
    
//         return () => clearInterval(interval);
//       }, [current, length]);
    
//       if (!Array.isArray(slides) || slides.length <= 0) {
//         return null;
//     }
//     return (
//         <div className='imageSlider'>
//           <IoIosArrowBack className='imageSliderButton-left' size='30' onClick={prevSlide} />
//           <IoIosArrowForward className='imageSliderButton-right' size='30' onClick={nextSlide} />
//           {slides.map((slide, index) => {
//             return (
//               <div
//                 className={index === current ? 'slide active' : 'slide'}
//                 key={index}
//               >
//                 {index === current && <img src={slide.image} className='image' />}
//               </div>
//             );
//           })}
//         </div>
//     );
// }
// export default ImageSlider;

import { useState, useEffect, useRef } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import './imageSlider.css';

function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const [sliderHeight, setSliderHeight] = useState(0);
  const length = slides.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  useEffect(() => {
    const updateSliderHeight = () => {
      if (sliderRef.current) {
        setSliderHeight(sliderRef.current.offsetHeight);
      }
    };

    updateSliderHeight();
    window.addEventListener('resize', updateSliderHeight);
    return () => window.removeEventListener('resize', updateSliderHeight);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5초마다 자동 전환

    return () => clearInterval(interval);
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <div className="imageSlider" ref={sliderRef}>
      <IoIosArrowBack className="imageSliderButton-left" size="30" onClick={prevSlide} />
      <IoIosArrowForward className="imageSliderButton-right" size="30" onClick={nextSlide} />

      {slides.map((slide, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <img
              src={slide.image}
              alt={`slide-${index}`}
              className="image"
              style={{
                height: `${sliderHeight}px`,
                objectFit: 'cover',
                objectPosition: 'center',
                width: '100%',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default ImageSlider;
