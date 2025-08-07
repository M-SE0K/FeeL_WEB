import React, { useState, useEffect, useRef } from 'react';
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