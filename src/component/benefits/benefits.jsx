import React, { useEffect, useRef } from 'react';
import './benefits.css';
import { partners } from './partnersData.js';

const loadKakaoIfNeeded = () => {
  return new Promise((resolve) => {
    if (window.kakao && window.kakao.maps) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOAPIKEY}&autoload=false`;
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(resolve);
    };
    document.head.appendChild(script);
  });
};

const BenefitsPartner = ({ name, address, phone, benefits = [], lat, lng }) => {
  const mapRef = useRef(null);
  const mapObjRef = useRef(null);

  useEffect(() => {
    let marker;
    let map;
    let rectangle;
    loadKakaoIfNeeded().then(() => {
      const container = mapRef.current;
      if (!container) return;
      const center = new window.kakao.maps.LatLng(lat, lng);
      const options = { center, level: 3 };
      map = new window.kakao.maps.Map(container, options);
      marker = new window.kakao.maps.Marker({ position: center });
      marker.setMap(map);

      const delta = 0.0008;
      const sw = new window.kakao.maps.LatLng(lat - delta, lng - delta);
      const ne = new window.kakao.maps.LatLng(lat + delta, lng + delta);
      const bounds = new window.kakao.maps.LatLngBounds(sw, ne);
      const rectangle = new window.kakao.maps.Rectangle({
        bounds,
        strokeWeight: 3,
        strokeColor: '#ff0000',
        strokeOpacity: 1,
        strokeStyle: 'solid',
        fillColor: '#ff0000',
        fillOpacity: 0.2,
      });
      rectangle.setMap(map);

      mapObjRef.current = map;
    });
    return () => {
      mapObjRef.current = null;
    };
  }, [lat, lng]);

  return (
    <div className="benefits-frame">
      <div className="benefits-frame-inner">
        <div className="benefits-grid">
          <div className="benefits-map" ref={mapRef} aria-label="제휴업체 위치 지도" />
          <div className="benefits-info">
            <h2 className="benefits-title">{name}</h2>
            <div className="benefits-row"><span className="label">주소</span><span className="value">{address}</span></div>
            <div className="benefits-row"><span className="label">연락처</span><a className="value" href={`tel:${phone}`}>{phone}</a></div>
            <div className="benefits-divider" />
            <div className="benefits-subtitle">제휴 혜택</div>
            <ul className="benefits-perks">
              {benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const BenefitsList = () => {
  return (
    <div className="benefits-list">
      {partners.map((p, idx) => (
        <BenefitsPartner key={idx} {...p} />
      ))}
    </div>
  );
};

export default BenefitsList; 