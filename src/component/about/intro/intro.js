import './intro.css';
function Intro (){
    return(
    <div className="intro-container">
        <div className="imageSlider-container">
            이미지 슬라이더
        </div>
        <div className="introduce-container">

        </div>
        <h1 className="greeting-title">회장단 인사말</h1>
        <div className="main-container">
            
            <div className="left-container">
                <div className="image-container">
                    <img src={require('../../../img/imageSlider1.png')} alt="공과대학 학생회장" />
                    <div className="title-box">공과대학 학생회장</div>
                    <div className="name">류이노</div>
                </div>
            </div>
            <div className="text-container">
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
}

export default Intro;