import React, { useEffect } from 'react';

function Kakao() {
  useEffect(() => {
    const script = document.createElement('script');
    
    // services 라이브러리(Geocoder/Places)가 반드시 필요
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOAPIKEY}&autoload=false&libraries=services`;
    script.async = true;

    script.onload = () => {
      console.log('Kakao SDK loaded:', window.kakao);
      window.kakao.maps.load(() => {
        console.log('Kakao Maps Loaded');
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(35.8464522, 127.1296552),
          level: 3,
        };
        new window.kakao.maps.Map(container, options);
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        id="map"
        style={{
          width: '100%',
          height: '400px',
          minHeight: '400px',
          border: '1px solid red', // 디버깅용
        }}
      ></div>
    </div>
  );
}

export default Kakao; 