import React, { useEffect, useRef } from 'react';

function Kakao({ containerStyle, address, name, lat, lng }) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
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
          center: new window.kakao.maps.LatLng(
            lat || 35.8464522,
            lng || 127.1296552
          ),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        mapRef.current = map;
        if (lat && lng) {
          const pos = new window.kakao.maps.LatLng(lat, lng);
          markerRef.current = new window.kakao.maps.Marker({ position: pos });
          markerRef.current.setMap(map);
          map.setCenter(pos);
        } else if (address) {
          const geocoder = new window.kakao.maps.services.Geocoder();
          geocoder.addressSearch(address, (result, status) => {
            if (status === window.kakao.maps.services.Status.OK && result && result[0]) {
              const y = parseFloat(result[0].y);
              const x = parseFloat(result[0].x);
              const pos = new window.kakao.maps.LatLng(y, x);
              markerRef.current = new window.kakao.maps.Marker({ position: pos });
              markerRef.current.setMap(map);
              map.setCenter(pos);
            }
          });
        }
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [address, lat, lng]);

  return (
    <div>
      <div
        id="map"
        style={{
          width: '100%',
          height: '100%',
          minHeight: '420px',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          ...(containerStyle || {}),
        }}
      ></div>
    </div>
  );
}

export default Kakao; 