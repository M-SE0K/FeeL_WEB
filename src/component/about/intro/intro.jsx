import React, { useState } from 'react';
import ImageSlider from '../../home/imageSlider/imageSlider.jsx';
import image1 from '../../../img/imageSlider4.jpg';
import image2 from '../../../img/imageSlider5.jpg';
import image3 from '../../../img/imageSlider6.jpg';
import { FaHome, FaChevronDown, FaUser } from 'react-icons/fa';

import './intro.css';

const Intro = () => {
    const slides = [{image: image1}, {image: image2}, {image: image3}];
    const [currentContent, setCurrentContent] = useState('intro'); // 'intro', 'president', 'vice-president'

    const handleMenuClick = (content) => {
        console.log('Menu clicked:', content);
        console.log('Setting currentContent to:', content);
        setCurrentContent(content);
    };

    const renderContent = () => {
        switch(currentContent) {
            case 'intro':
                return (
                    <div className="main-wrapper">
                        <h1 className="greeting-title">학생회 소개글</h1>
                        <div className="main-container">
                            <div className="right-container">
                                <h2 className='h2-text1'>전북대학교 공과대학 학생회 소개</h2>
                                <p>전북대학교 공과대학 학생회는 공과대학 학우들의 권익을 대변하고,<br/>
                                학우들의 대학생활을 지원하는 학생 자치기구입니다.</p>
                                <p>저희 학생회는 다음과 같은 활동을 통해 학우 여러분을 지원합니다:</p>
                                <ul className="intro-list">
                                    <li>학우들의 의견 수렴 및 대변</li>
                                    <li>학생 복지 시설 운영 및 관리</li>
                                    <li>학술, 문화, 체육 행사 개최</li>
                                    <li>학우 간 소통의 장 마련</li>
                                    <li>학과 간 교류 증진</li>
                                </ul>
                                <p>학우 여러분의 많은 관심과 참여 부탁드립니다.</p>
                                <div className="quote">학우 여러분과 함께하는 공과대학 학생회</div>
                            </div>
                        </div>
                    </div>
                );
            case 'president':
                return (
                    <div className="main-wrapper">
                        <h1 className="greeting-title">회장단 인사말</h1>
                        <div className="main-container">
                            <div className="left-container">
                                <div className="image-container">
                                    <img src={require('../../../img/ryu.png')} alt="공과대학 학생회장" />
                                    <div className="title-box">공과대학 학생회장</div>
                                    <div className="name">류이노</div>
                                </div>
                            </div>
                            <div className="right-container">
                                <h2 className='h2-text1'>안녕하십니까, 공대인의 FEEL, 그대와 함께 필:花 <br />제57대 필 공과대학 학생회입니다.</h2>
                                <p>학교에 큰 변화가 찾아왔을 때 학생회의 역할은 더욱 막중해집니다. 코로나 이후 <br/> 
                                정상적인 대학생활로 돌아온 지 얼마 되지 않은 지금, '글로컬30'이라는 새로운 <br/>
                                변화의 바람이 불고 있습니다.</p>
                                <p>필:花 공과대학 학생회는, 새로운 전북대, 그 속에서 '새로운 공과대학'을 만들겠<br/> 
                                습니다. 필 공과대학 학생회는 예측과 대비를 통해 실질적이고 현실적인 해결방<br/>
                                안을 제시하겠습니다. 급변하는 상황에 맞게, 모든 학우분들이 즐길 수 있는 행사<br/> 
                                를 만들기 위하여 최선을 다하며, 기존의 각 학부(학과) 학생회의 자치기구로서<br/> 
                                역할을 재정립하겠습니다. </p>
                                <p>'학생회의 본질'에 집중하겠습니다. 학생회는 학우들이 있기에 존재하며, 그들의<br/> 
                                의 목소리가 학생회의 방향을 결정짓습니다. 학우들의 의견과 필요에 귀 기울이며,<br/> 
                                그 권역을 대변하는 데 최선을 다하겠습니다.</p>
                                <p>'실질적인 도움'을 드리겠습니다. 학우분들의 피부에 와 닿는 정책은 무엇일까 끊<br/> 
                                임 없이 고민하고ㅡ 소통하여 학우분들이 원하는 공과대학을 만들겠습니다. 공과대<br/>
                                학 학우분들의 대학생활에 실질적으로 도움을 드리는 필:花 공과대학 학생회가<br/>
                                되겠습니다.</p>
                                <div className="quote">공대인의 FEEL, 그대와 함께 필:花</div>
                                <h2 className="sign">제 57대 필 공과대학 학생회장 류이노</h2>
                            </div>
                        </div>
                    </div>
                );
            case 'vice-president':
                return (
                    <div className="main-wrapper">
                        <h1 className="greeting-title">부회장 인사말</h1>
                        <div className="main-container">
                            <div className="left-container">
                                <div className="image-container">
                                    <img src={require('../../../img/kim.png')} alt="공과대학 학생회 부회장" />
                                    <div className="title-box">공과대학 학생회 부회장</div>
                                    <div className="name">김범준</div>
                                </div>
                            </div>
                            <div className="right-container">
                                <h2 className='h2-text1'>안녕하십니까, 공대인의 FEEL, 그대와 함께 필:花 <br />제57대 필 공과대학 학생회 부회장입니다.</h2>
                                <p>학우 여러분의 대학생활이 더욱 풍요롭고 의미 있게 되도록 최선을 다하겠습니다.<br/>
                                학생회는 학우들의 목소리를 대변하고, 학우들의 권익을 보호하는 역할을 합니다.</p>
                                <p>저희 필:花 공과대학 학생회는 학우 여러분의 의견을 최우선으로 생각하며,<br/>
                                실질적인 도움을 드릴 수 있는 정책들을 추진하겠습니다.</p>
                                <p>학우 여러분과 함께하는 학생회가 되도록 노력하겠습니다.</p>
                                <div className="quote">학우 여러분과 함께하는 학생회</div>
                                <h2 className="sign">제 57대 필 공과대학 학생회 부회장 김범준</h2>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="intro-container">
            <div id="slider-container" className="imageSlider-container">
                <ImageSlider slides={slides} />
                {/* 분류바 추가 */}
                <div className="category-bar">
                    <div className="category-item">
                        <FaHome className="category-icon" />
                        <span className="category-text" onClick={() => handleMenuClick('intro')}>
                            학생회 소개
                        </span>
                    </div>
                    <div className="category-item dropdown-container">
                        <FaUser className="category-icon" />
                        <span className="category-text">
                            인사말
                            <FaChevronDown className="chevron-icon" />
                        </span>
                        <div className="dropdown-menu" style={{display: 'none'}}>
                            <div className="dropdown-item" onClick={() => handleMenuClick('president')}>
                                회장 인사말
                            </div>
                            <div className="dropdown-item" onClick={() => handleMenuClick('vice-president')}>
                                부회장 인사말
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="introduce-container">

            </div>
            
            {renderContent()}
            
        </div>
    );
};

export default Intro; 