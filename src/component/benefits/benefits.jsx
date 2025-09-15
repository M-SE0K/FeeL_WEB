import React, { useEffect, useRef, useState } from 'react';
import './benefits.css';
import { partners } from './partnersData.js';

// ===== 전역 유틸: 요청 큐(직렬화) + 결과 캐시 =====
const MAX_CONCURRENCY = 1;       // 동시에 처리할 최대 작업 개수
const QUEUE_INTERVAL_MS = 800;   // 작업 간 간격(ms) — 429 완화 위해 증가
const GEO_CACHE_STORAGE_KEY = 'feel_geo_cache_v1';

const taskQueue = [];
let activeTasks = 0;
const inFlightMap = new Map();   // 같은 키(주소/업체명) 동시 중복 호출 방지

// 메모리 캐시 초기화 및 localStorage 로드
const locationCache = (() => {
  const m = new Map();
  try {
    const raw = localStorage.getItem(GEO_CACHE_STORAGE_KEY);
    if (raw) {
      const entries = JSON.parse(raw);
      if (Array.isArray(entries)) {
        for (const [k, v] of entries) m.set(k, v);
      }
    }
  } catch (_) {}
  return m;
})();

const persistCache = () => {
  try {
    localStorage.setItem(GEO_CACHE_STORAGE_KEY, JSON.stringify(Array.from(locationCache.entries())));
  } catch (_) {}
};

const cacheGet = (key) => locationCache.get(key);
const cacheSet = (key, value) => {
  locationCache.set(key, value);
  persistCache();
};

const processQueue = () => {
  if (activeTasks >= MAX_CONCURRENCY) return;
  const next = taskQueue.shift();
  if (!next) return;
  activeTasks += 1;
  const run = () => {
    next.fn()
      .then((r) => next.resolve(r))
      .catch((e) => next.reject(e))
      .finally(() => {
        activeTasks -= 1;
        setTimeout(processQueue, QUEUE_INTERVAL_MS);
      });
  };
  run();
};

const enqueueTask = (fn) => new Promise((resolve, reject) => {
  taskQueue.push({ fn, resolve, reject });
  processQueue();
});

const withDedup = (key, producer) => {
  if (inFlightMap.has(key)) return inFlightMap.get(key);
  const p = enqueueTask(producer).finally(() => inFlightMap.delete(key));
  inFlightMap.set(key, p);
  return p;
};

// 주소 정규화: 간략 표기 보정(전북/전주/덕진구 접두가 없으면 붙임)
const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const normalizeAddress = (raw, name) => {
  if (!raw) return '';
  let out = String(raw).trim();
  // 1) 주소 끝에 상호명이 붙은 케이스 제거 (예: "... 2층 만계치킨")
  if (name) {
    const reTailName = new RegExp(`\\s*${escapeRegExp(name)}\\s*$`, 'u');
    out = out.replace(reTailName, '').trim();
  }
  // 2) 중복 공백/특수문자 정리
  out = out.replace(/[.]{2,}/g, '.').replace(/\s{2,}/g, ' ').replace(/\s*[.,]\s*/g, ' ');
  // 3) "도/시/구" 접두가 없으면 지역 프리픽스 부여
  const hasCity = /전주|전북|특별자치|덕진구/.test(out);
  if (!hasCity) out = `전북특별자치도 전주시 덕진구 ${out}`;
  return out.trim();
};

// Kakao Maps SDK를 동적으로 로드하는 헬퍼
// - 환경변수(REACT_APP_KAKAOAPIKEY)로부터 키를 읽어오며
// - geocoder/places 사용을 위해 services 라이브러리를 함께 로드합니다
const loadKakaoIfNeeded = () => {
  return new Promise((resolve, reject) => {
    const key = process.env.REACT_APP_KAKAOAPIKEY;
    //const key = '1234567890';
    if (!key) {
      console.error('[KAKAO] REACT_APP_KAKAOAPIKEY 가 .env에서 로드되지 않았습니다.');
      return reject(new Error('Missing REACT_APP_KAKAOAPIKEY'));
    }
    if (window.kakao && window.kakao.maps) {
      if (window.kakao.maps.services) {
        console.log('[KAKAO] SDK already loaded(with services). key(len):', String(key).length);
        resolve();
        return;
      }
      console.error('[KAKAO] SDK가 services 라이브러리 없이 로드되었습니다. 새로고침이 필요합니다.');
      reject(new Error('Kakao SDK missing services library'));
      return;
    }
    const script = document.createElement('script');
    // services 라이브러리(지오코딩) 사용
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${key}&autoload=false&libraries=services`;
    script.async = true;
    script.onload = () => {
      console.log('[KAKAO] SDK loaded. key(len):', String(key).length);
      window.kakao.maps.load(resolve);
    };
    script.onerror = () => {
      console.error('[KAKAO] SDK 스크립트 로드 실패');
      reject(new Error('Kakao SDK load failed'));
    };
    document.head.appendChild(script);
  });
};

// 주소 → 좌표 (지오코딩). 캐시/직렬화/중복제거 적용
const geocodeByAddress = async (addr) => {
  const key = `addr:${addr}`;
  const cached = cacheGet(key);
  if (cached) return cached;
  return withDedup(key, () => new Promise((resolve) => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(addr, (result, status) => {
      if (status === window.kakao.maps.services.Status.OK && result && result[0]) {
        const y = parseFloat(result[0].y);
        const x = parseFloat(result[0].x);
        const out = { lat: y, lng: x };
        cacheSet(key, out);
        resolve(out);
      } else {
        resolve(null);
      }
    });
  }));
};

// (요청에 따라 비활성화) 업체명 키워드 검색은 사용하지 않습니다.

// 단일 제휴업체 블록 컴포넌트
// - 좌측: 카카오맵, 우측: 업체 정보
// - 좌표(lat/lng)가 없을 경우 주소 → 지오코딩 → 마커 표시
const BenefitsPartner = ({ name, address, phone, benefits = [], lat, lng }) => {
  const mapRef = useRef(null);
  const mapObjRef = useRef(null);
  const [mapError, setMapError] = useState(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return; // 개발모드 StrictEffect 중복 방지
    initializedRef.current = true;
    let marker;
    loadKakaoIfNeeded()
      .then(() => {
        const container = mapRef.current;
        if (!container) return;
        const DEFAULT_CENTER = new window.kakao.maps.LatLng(35.8464522, 127.1296552); // 기본(공대 근처)

        const initialCenter = (lat && lng)
          ? new window.kakao.maps.LatLng(lat, lng)
          : DEFAULT_CENTER;

        // 지도 생성(초기 중심은 좌표가 있으면 해당 위치, 아니면 공대 근처)
        const map = new window.kakao.maps.Map(container, { center: initialCenter, level: 3 });

        // 마커 생성/갱신 + 지도 중심 이동 헬퍼
        const placeMarkerAt = (pos) => {
          if (marker) marker.setMap(null);
          marker = new window.kakao.maps.Marker({ position: pos });
          marker.setMap(map);
          map.setCenter(pos);
        };

        if (lat && lng) {
          // 이미 좌표가 있는 경우
          placeMarkerAt(initialCenter);
          mapObjRef.current = map;
          return;
        }

        // 우선순위: (1) 주소만 사용 — 요청에 따라 업체명 폴백 제거
        const tryPlaceByAddressThenName = async () => {
          const addr = normalizeAddress(address, name);

          // 1) 주소가 충분히 구체적이면 주소 우선 검색
          if (addr && addr.replace(/\s/g, '').length >= 5) {
            const geo = await geocodeByAddress(addr);
            if (geo) {
              const pos = new window.kakao.maps.LatLng(geo.lat, geo.lng);
              placeMarkerAt(pos);
              mapObjRef.current = map;
              return;
            }
            console.warn('[KAKAO] Geocoding 실패:', name, addr);
          }

          // 주소가 없거나 실패 시 기본 중심(공대 근처) 사용
          placeMarkerAt(DEFAULT_CENTER);
          mapObjRef.current = map;
        };

        tryPlaceByAddressThenName();
      })
      .catch((err) => {
        setMapError(err.message || '지도 초기화 오류');
      });

    return () => {
      mapObjRef.current = null;
    };
  }, [lat, lng]);

  return (
    <div className="benefits-frame">
      <div className="benefits-frame-inner">
        <div className="benefits-grid">
          {/* 좌측 지도 영역: 동적 로딩 + 주소/좌표 기반 마커 표시 */}
          <div className="benefits-map" ref={mapRef} aria-label="제휴업체 위치 지도">
            {mapError && (
              <div style={{
                width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#b91c1c', background: '#fff1f2', border: '1px solid #fecaca', borderRadius: '12px',
                textAlign: 'center', padding: '1rem'
              }}>
                지도 로드 실패: {mapError}<br/>
                .env에 REACT_APP_KAKAOAPIKEY를 설정했는지 확인해 주세요.
              </div>
            )}
          </div>
          {/* 우측 정보 영역 */}
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