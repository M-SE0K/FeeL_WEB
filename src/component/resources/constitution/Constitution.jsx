import React from 'react';
import './Constitution.css';

function Constitution() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // 헤더 높이만큼 추가 스크롤 조정
      setTimeout(() => {
        window.scrollBy({
          top: '-9rem',
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <div className="constitution-container">

      <div className="constitution-content">
        {/* 목차 */}
        <section className="index-section">
          <h1 className="section-title-main">전북대학교 공과대학 학생회칙</h1>
          <h2 className="section-title-main">목차</h2>
          <div className="index-content">
            <div className="index-item" onClick={() => scrollToSection('chapter-1')}>
              <span className="index-chapter">제1장 총칙</span>
              <span className="index-dots"></span>
              <span className="index-page">3</span>
            </div>
            <div className="index-item" onClick={() => scrollToSection('chapter-2')}>
              <span className="index-chapter">제2장 의결기구</span>
              <span className="index-dots"></span>
              <span className="index-page">4</span>
            </div>
            <div className="index-item sub" onClick={() => scrollToSection('chapter-2-1')}>
              <span className="index-chapter">제1절 공과대학 학생총회</span>
              <span className="index-page">4</span>
            </div>
            <div className="index-item sub" onClick={() => scrollToSection('chapter-2-2')}>
              <span className="index-chapter">제2절 공과대학 학생대표자회의</span>
              <span className="index-page">5</span>
            </div>
            <div className="index-item sub" onClick={() => scrollToSection('chapter-2-3')}>
              <span className="index-chapter">제3절 공과대학 운영위원회</span>
              <span className="index-page">6</span>
            </div>
            <div className="index-item" onClick={() => scrollToSection('chapter-3')}>
              <span className="index-chapter">제3장 집행기구</span>
              <span className="index-dots"></span>
              <span className="index-page">7</span>
            </div>
            <div className="index-item" onClick={() => scrollToSection('chapter-4')}>
              <span className="index-chapter">제4장 산하기구</span>
              <span className="index-dots"></span>
              <span className="index-page">8</span>
            </div>
            <div className="index-item" onClick={() => scrollToSection('chapter-5')}>
              <span className="index-chapter">제5장 독립기구</span>
              <span className="index-dots"></span>
              <span className="index-page">10</span>
            </div>
            <div className="index-item" onClick={() => scrollToSection('chapter-6')}>
              <span className="index-chapter">제6장 재정</span>
              <span className="index-dots"></span>
              <span className="index-page">11</span>
            </div>
            <div className="index-item" onClick={() => scrollToSection('chapter-7')}>
              <span className="index-chapter">제7장 학생회비</span>
              <span className="index-dots"></span>
              <span className="index-page">12</span>
            </div>
            <div className="index-item" onClick={() => scrollToSection('chapter-8')}>
              <span className="index-chapter">제8장 회칙개정</span>
              <span className="index-dots"></span>
              <span className="index-page">13</span>
            </div>
            <div className="index-item" onClick={() => scrollToSection('chapter-9')}>
              <span className="index-chapter">제9장 게시판 관리</span>
              <span className="index-dots"></span>
              <span className="index-page">13</span>
            </div>
            <div className="index-item" onClick={() => scrollToSection('appendix')}>
              <span className="index-chapter">부칙</span>
              <span className="index-dots"></span>
              <span className="index-page">14</span>
            </div>
          </div>
        </section>

        {/* 제1장 총칙 */}
        <section id="chapter-1" className="constitution-section">
          <h2 className="chapter-title">제1장 총칙</h2>
          
          <article className="article">
            <h3 className="article-title">제1조 (명칭)</h3>
            <p className="article-text">
              ① 전북대학교 공과대학 학생회는 전북대학교 학부과정을 기준으로 하여 그에 속한 학생 전원이 회원의 지위를 갖고 스스로 운영하며 학생회 등 자치단체를 대표하는 조직으로서 "전북대학교 공과대학 학생회(이하 본회)"라 한다.
            </p>
            <p className="article-text">
              ② 공과대학 학생대표 상징(로고)은 2015년 2월 6일 학생공모전을 통해 정식 등록된 것으로 정하며 상징(로고)을 임의로 변경할 수 없다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제2조 (목적)</h3>
            <p className="article-text">
              ① 본회는 사회 발전에 능동적으로 기여하고 학생들 간의 단결을 강화하며 학생자치를 완전히 실현함을 목적으로 한다.
            </p>
            <p className="article-text">
              ② 본회는 회원의 자유롭고 민주적인 자치활동과 창조적이고 비판적인 학문 연구를 통하여 학문 사상의 자유를 실현하고 대학 문화를 고양한다.
            </p>
            <p className="article-text">
              ③ 대학의 참 정신을 계승·발전시키고 건전한 비판의식을 가진 사회인으로 진출함으로써 사회 발전에 기여할 수 있도록 함을 목적으로 한다.
            </p>
            <p className="article-text">
              ④ 본회는 회원의 인권·자유권·참정권을 수호하는 것을 목적으로 한다.
            </p>
            <p className="article-text">
              ⑤ 본회는 회원들의 다양성을 존중하고, 이해를 대변하며, 권리를 증진함으로써 진리를 추구하는 대학생 본연의 역할을 할 수 있는 환경 조성을 그 목적으로 한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제3조 【회원】</h3>
            <p className="article-text">
              ① 입학·편입학·소속 변경등으로 전북대학교 공과대학 학사과정 소속이 된 자는 본회의 회원이 되며, 본 회의 회원은 총학생회칙 및 공과대학 학생회칙을 따른다.
            </p>
            <p className="article-text">
              ② 정회원은 전북대학교 공과대학의 재학생으로 한다. 이때, 졸업 유예생도 정회원에 포함된다.
            </p>
            <p className="article-text">
              ③ 준회원은 본회의 회원 중 정회원을 제외한 자로 한다.
            </p>
            <p className="article-text">
              ④ 준회원은 다음 각 호의 등록 기간에 등록 절차를 이행한 경우 남은 기간 정회원이 된다.
            </p>
            <p className="article-text indent">
              1. 1학기 정회원 등록 기간 : 1학기 개강 일부터 2학기 개강일 전날까지
            </p>
            <p className="article-text indent">
              2. 2학기 정회원 등록 기간 : 2학기 개강 일부터 이듬해 1학기 개강일 전날까지
            </p>
            <p className="article-text">
              ⑤ 졸업·자퇴·퇴학 등으로 전북대학교 공과대학 학사 과정 소속이 아니게 된 자는 즉시 회원 자격을 잃으며, 정학 등의 사유로 등교가 정지된 자는 그동안 회원 자격이 정지된다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제4조 【회원의 권리와 의무】</h3>
            <p className="article-text">
              ① 본회의 회원은 본회의 모든 자치활동에 자유롭게 참여할 권리를 가진다.
            </p>
            <p className="article-text">
              ② 본회의 회원은 집회·결사의 자유를 가진다. 이의 실질적 보장을 위하여 본회는 집회·결사에 필요한 공간을 최대한 보장받기 위해 노력하여야 하고, 이미 보장받은 공간을 최대한으로 제공하여야 한다.
            </p>
            <p className="article-text">
              ③ 본회의 회원은 회칙에 따라 본회의 활동과 운영 전반에 관하여 의견을 개진할 권리와 이를 보고받을 권리를 가진다.
            </p>
            <p className="article-text">
              ④ 본회의 정회원은 회칙에 따라 선거권을 가진다.
            </p>
            <p className="article-text">
              ⑤ 본회의 회원은 본회를 부인하거나 정당한 학생자치활동을 침해하는 것에 대해 저항할 권리와 의무를 지닌다.
            </p>
            <p className="article-text">
              ⑥ 본회와 본회의 각 기구는 본조에 열거된 회원의 권리가 내·외부적으로 침해받지 않도록 항상 노력해야 하며, 회원의 권리가 침해될 때 이를 적극적으로 수호할 의무를 지닌다.
            </p>
            <p className="article-text">
              ⑦ 본회의 회원은 회칙을 준수할 의무를 지닌다.
            </p>
            <p className="article-text">
              ⑧ 본회의 회원은 학생회비 납부에 따른 권리를 가질 수 있다. (단, 제1장 제3조 4항을 통해 정회원이 된 경우 해당 조항에서 예외로 구분한다.)
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제5조 【구성】</h3>
            <p className="article-text">
              본회는 공과대학 전체 학생을 회원으로 하고 각 학과(부), 전공 학생회를 조직기반으로 하여 학생총회, 공과대학 학생 대표자 회의, 운영위원회, 공과대학 동아리 대표자 회의를 중심으로 운영하고, 학과(부), 전공 학생회, 공과대학 집행위원회 및 인정된 동아리로 구성된다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제6조 【정치연대 금지】</h3>
            <p className="article-text">
              본회의 모든 기구는 학교 외부의 정치단체와 연대를 금지한다. 단, 본회의 의견 수렴 및 자체적인 의견 발표와 행동은 허용한다.
            </p>
          </article>
        </section>

        {/* 제2장 의결기구 */}
        <section id="chapter-2" className="constitution-section">
          <h2 className="chapter-title">제2장 의결기구</h2>
          
          <h3 id="chapter-2-1" className="section-title">제1절 공과대학 학생총회</h3>

          <article className="article">
            <h3 className="article-title">제7조 (지위 및 구성)</h3>
            <p className="article-text">
              공과대학 학생총회는 본회의 최고 의결기구로서 전체 회원으로 구성된다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제8조 (권한)</h3>
            <p className="article-text">
              공과대학 학생총회는 본회의 운영 전반에 관한 주요한 사항을 토의하고 의결한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제9조 (의장)</h3>
            <p className="article-text">
              의장은 공과대학 학생회장이 맡는다. 공과대학 학생회장 궐위 시 공과대학 부학생회장이 맡는다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제10조 (소집)</h3>
            <p className="article-text">
              ① 학생총회는 다음 각 호 중 하나에 의해 학생총회 의장이 7일 이내에 소집하여야 한다. 단, 긴급을 요하는 사항이 있을 때는 예외로 한다.
            </p>
            <p className="article-text indent">
              1. 본회 의장의 소집 요구
            </p>
            <p className="article-text indent">
              2. 공과대학 운영위원 2/3 이상의 소집 요구
            </p>
            <p className="article-text indent">
              3. 공학대회 1/2 이상의 소집 요구
            </p>
            <p className="article-text indent">
              4. 본회 회원 500명 이상의 소집 요구
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제11조 (소집 공고)</h3>
            <p className="article-text">
              ① 학생총회 소집은 7일 전에 의장이 공고하여야 한다. 단, 긴급을 요하는 사항이 있을 때는 예외로 한다.
            </p>
            <p className="article-text">
              ② 공고문에는 다음 각 호의 사항을 명시하여야 한다.
            </p>
            <p className="article-text indent">
              1. 회의 시작 일시
            </p>
            <p className="article-text indent">
              2. 회의 장소
            </p>
            <p className="article-text indent">
              3. 안건과 안건에 대한 설명
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제12조 (개회 및 의결)</h3>
            <p className="article-text">
              학생총회는 본회 회원의 100명 이상의 출석으로 개회하고, 출석 회원의 과반수의 찬성으로 의결한다.
            </p>
          </article>

          <h3 id="chapter-2-2" className="section-title">제2절 공과대학 학생대표자회의</h3>

          <article className="article">
            <h3 className="article-title">제13조 (지위)</h3>
            <p className="article-text">
              공과대학 학생대표자회의(이하 공학대회)는 각 학과(부), 전공 대표자 및 공과대학 집행위원회 국장과 공과대학 학생회장, 부학생회장으로 구성되어 활동하는 기구로 학생총회 다음의 의결기구이다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제14조 (구성)</h3>
            <p className="article-text">
              ① 공학대회 대의원은 공과대학 학생회 학생회장, 부학생회장을 포함한 집행위원회 국장과 각 학과(부) 학생회장, 부학생회장으로 구성한다.
            </p>
            <p className="article-text">
              ② 의장은 공과대학 학생회장으로 한다. 단, 공과대학 학생회장 궐위 시 공과대학 부학생회장이 맡는다.
            </p>
            <p className="article-text">
              ③ 각 학과(부), 전공의 재적인원이 200인 이상일 때에는 200인당 대의원 1인씩을 추가하여 참석한다.
            </p>
            <p className="article-text">
              ④ 2025학년도 이후 1학년 재적인원은 학과(부)에 가배정 된 인원으로 한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제15조 (목적)</h3>
            <p className="article-text">
              본회 사업의 기본 방향과 주요 결정사항을 심의 및 의결하고 전체 학우들의 의견으로 집행하는데 기여함을 목적으로 한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제16조 (소집)</h3>
            <p className="article-text">
              공학대회는 정기총회와 임시총회를 둔다.
            </p>
            <p className="article-text">
              ① 정기총회는 당선 이후 45일 이내, 이듬해 한 학기당 1회 의장이 소집하고, 개회 7일 전에 공고하여야 한다. 단, 긴박한 정세나 특수한 상황으로 인하여 정상적인 정기총회를 진행할 수 없을 시에는 운영위원회의 결정 하에 정기총회를 소집하지 않을 수 있다.
            </p>
            <p className="article-text">
              ② 임시총회는 재적 대의원 1/3의 요구가 있거나 운영위원회의 과반수의 발의로 소집할 수 있다. 단, 긴급을 요할 때는 의장이 소집할 수 있다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제17조 (의무 및 권한)</h3>
            <p className="article-text">
              공학대회는 다음과 같은 의무 및 권한을 가진다.
            </p>
            <p className="article-text indent">
              1. 공과대학 학생회 예, 결산의 심의 및 감사
            </p>
            <p className="article-text indent">
              2. 공과대학 학생회 선거에 관한 사항
            </p>
            <p className="article-text indent">
              3. 공과대학 학생회칙의 개정에 관한 사항
            </p>
            <p className="article-text indent">
              4. 학생총회 소집 요구
            </p>
            <p className="article-text indent">
              5. 공과대학 중대사항을 심의, 의결, 집행
            </p>
            <p className="article-text indent">
              6. 공과대학 학생회 정, 부학생회장 탄핵 소추
            </p>
            <p className="article-text indent">
              7. 기타 본회의 심사 및 의결을 요하는 사항
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제18조 (개회 및 의결)</h3>
            <p className="article-text">
              공학대회는 대의원 1/2 이상의 출석으로 개회하고 출석 대의원 과반수의 찬성으로 의결한다. 단, 17조 6항은 대의원 1/2 이상의 출석과 출석 대의원 2/3 이상의 찬성으로 의결한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제19조 (방청 및 발언)</h3>
            <p className="article-text">
              ① 본회의 모든 회원은 공학대회 방청 및 발언 권한을 가진다. 단, 의장은 공학대회 질서 유지를 위하여 방청 및 발언을 제한할 수 있다.
            </p>
            <p className="article-text">
              ② 공학대회 대의원석과 방청석은 정확히 구분되도록 배치한다.
            </p>
          </article>

          <h3 id="chapter-2-3" className="section-title">제3절 공과대학 운영위원회</h3>

          <article className="article">
            <h3 className="article-title">제20조 (지위)</h3>
            <p className="article-text">
              운영위원회는 본회의 상시적인 의결기구이며 최고의 운영 기구이다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제21조 (구성)</h3>
            <p className="article-text">
              공과대학 학생회장을 위원장으로 부학생회장, 각 학과(부), 전공 학생회장, 부학생회장으로 구성된다. 단, 각 학과(부), 전공 회장단의 궐위 시 각 학과(부), 전공 학생회 집행부 1인까지 이의 권한을 수행한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제22조 (의무 및 권한)</h3>
            <p className="article-text">
              운영위원회는 다음과 같은 의무 및 권한을 갖는다.
            </p>
            <p className="article-text indent">
              1. 학생회 운영 전반에 대해 심의, 의결한다
            </p>
            <p className="article-text indent">
              2. 학생총회, 공학대회의 소집을 요구할 수 있다.
            </p>
            <p className="article-text indent">
              3. 집행위원회, 각 부서장의 출석을 요구하여 사업 진행에 대한 보고와 논의를 할 수 있다.
            </p>
            <p className="article-text indent">
              4. 학생회의 전체 예산 및 결산을 심의 검토, 조정하여 공학대회에 제출한다.
            </p>
            <p className="article-text indent">
              5. 회칙 개정안을 발의하여 공학대회에 상정 한다.
            </p>
            <p className="article-text indent">
              6. 공과대학 학생회 총 노선을 공학대회에 보고 한다.
            </p>
            <p className="article-text indent">
              7. 공학대회의 승인을 얻어 감사를 담당할 수 있다.
            </p>
            <p className="article-text indent">
              8. 학생회 감사 관리를 담당한다.
            </p>
            <p className="article-text indent">
              9. 운영위원회는 의결을 필요로 하는 사항에 대하여 결정할 수 있다.
            </p>
            <p className="article-text indent">
              10. 운영 상 필요하다고 인정이 될 때 공과대학 학생회 특별 기구 및 소 위원회를 구성할 수 있다.
            </p>
            <p className="article-text indent">
              11. 공과대학 감사위원회 재정에 대해 심의 의결한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제23조 (소집)</h3>
            <p className="article-text">
              ① 운영위원회는 정기회의와 임시회의로 구분하여 위원장이 소집한다.
            </p>
            <p className="article-text">
              ② 정기회의는 월 1회로 하고 임시회의는 위원장 또는 위원 1/3이상의 발의로 하여 위원장이 소집한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제24조 (의결)</h3>
            <p className="article-text">
              운영위원회는 재적위원 과반수의 출석으로 개회하고 출석위원 과반수의 찬성으로 의결한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제25조 (의무 및 권한 대행)</h3>
            <p className="article-text">
              각 학과(부), 전공학생회의 운영위원들의 운영위원회의 회의 참석을 의무화한다. 2회 이상 불참 시 재적의원의 1/3의 발의로 하여 경고를 가한다. 경고 연속 2회, 누적 3회를 받은 학과(부), 전공은 공대 운영위원회 의결권을 임기 기간 동안 박탈한다. 단, 학과(부), 전공 학생회 회장단의 궐위로 인한 학과(부), 전공 학생회 집행부 1인의 대리 참석의 경우 반드시 위임장을 의장에게 회의 1일 전에 제출하고 참석한다.
            </p>
          </article>
        </section>

        {/* 제3장 집행기구 */}
        <section id="chapter-3" className="constitution-section">
          <h2 className="chapter-title">제3장 집행기구</h2>
          
          <h3 className="section-title">제1절 공과대학 학생회장 및 부학생회장</h3>

          <article className="article">
            <h3 className="article-title">제26조 (지위)</h3>
            <p className="article-text">
              ① 공과대학 학생회장은 공과대학 학생회를 대표하며, 학생총회 의장, 공학 대회 의장, 운영위원회의 위원장, 집행위원회 위원장직을 수행한다.
            </p>
            <p className="article-text">
              ② 공과대학 부학생회장은 학생회장과 협의, 협력하고 학생회장이 권한을 위임하거나 궐위 시 학생회장의 업무 및 권한을 대행한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제27조 (임기)</h3>
            <p className="article-text">
              ① 공과대학 학생회장과 부학생회장의 임기는 공과대학 학생 선거 당선 연도 12월 1일부터 다음 해 11월 30일까지로 한다. (단 공과대학 학생 선거 이후 남은 임기 동안은 인수인계를 진행한다.)
            </p>
            <p className="article-text">
              ② 당해 연도 공과대학 학생 선거 당선자는 공과대학 학생회 준비 위원회 활동을 한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제28조 (신분보장)</h3>
            <p className="article-text">
              공과대학 학생회장 및 부학생회장은 전학 및 제적 등의 이유로 공과대학 학생 회원의 자격을 상실하거나 탄핵에 의하지 아니하면 어떠한 이유라도 그 직에서 해임되지 아니한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제29조 (업무 및 권한)</h3>
            <p className="article-text">
              공과대학 학생회장은 다음과 같은 업무 및 권한을 갖는다.
            </p>
            <p className="article-text indent">
              1. 본회를 대표하며 그 업무를 총괄하고, 모든 대외활동을 관장한다.
            </p>
            <p className="article-text indent">
              2. 학생총회, 공학 대회, 운영위원회를 주관한다.
            </p>
            <p className="article-text indent">
              3. 집행위원회 각 국장 임명과 해임의 권한을 갖는다.
            </p>
          </article>

          <h3 className="section-title">제2절 집행위원회</h3>

          <article className="article">
            <h3 className="article-title">제30조 (지위와 구성)</h3>
            <p className="article-text">
              ① 공과대학 집행위원회는 본회의 최고 집행기구이다.
            </p>
            <p className="article-text">
              ② 공과대학 집행위원회는 공과대학 학생회 국장, 부국장으로 구성된다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제31조 (업무 및 권한)</h3>
            <p className="article-text">
              ① 학생총회, 공학 대회, 운영위원회의 의결된 사항을 집행하고, 고유사업을 진행한다.
            </p>
            <p className="article-text">
              ② 각 국장은 국 단위 모임을 주관하고, 운영위원회 및 공학 대회에 대한 의사 개진권을 가진다.
            </p>
            <p className="article-text">
              ③ 각 국은 국 운영에 필요한 국원을 독자적으로 모집할 수 있다.
            </p>
            <p className="article-text">
              ④ 각 국의 국장은 부국장 및 국원의 임명과 해임 권한을 갖는다.
            </p>
          </article>
        </section>

        {/* 제4장 산하기구 */}
        <section id="chapter-4" className="constitution-section">
          <h2 className="chapter-title">제4장 산하기구</h2>
          
          <h3 className="section-title">제1절 학부(과) 학생회</h3>

          <article className="article">
            <h3 className="article-title">제32조 (지위 및 구성)</h3>
            <p className="article-text">
              ① 공과대학 학과(부), 전공 학생회는 학과(부), 전공의 최고 학생자치기구이다.
            </p>
            <p className="article-text">
              ② 공과대학 학과(부), 전공 학생회는 학과(부), 전공의 성원으로 구성한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제33조 (학과(부), 전공 학생회장 및 부학생회장)</h3>
            <p className="article-text">
              ① 학부(과) 학생회장은 해당 학부(과) 학생을 대표하여 그 업무를 총괄한다.
            </p>
            <p className="article-text">
              ② 학부(과) 학생회장은 전체학생대표자회의의 대의원이 된다.
            </p>
            <p className="article-text">
              ③ 학부(과) 학생회는 학생회장은 제46조 제2항에 따라 재학 인원이 200명을 넘는 학부(과) 학생회는 부학생회장 한 명도 전제학생대표자회의 대의원이 된다.
            </p>
            <p className="article-text">
              ④ 학부(과), 전공 학생회장 및 부학생회장은 학부(과), 잔공을 대표하여 공학대회 및 운영위원회에 성실히 참여해야 할 의무를 갖는다.
            </p>
            <p className="article-text">
              ⑤ 학부(과) 부학생회장은 학생회장과 협의⦁협력하고, 학생회장이 권한을 위임하거나 사고일 때에 학생회장의 업무 및 권한을 승계·대행한다. 단, 부학생회장 궐위 시 집행부 1인이 맡는다.
            </p>
            <p className="article-text">
              ⑥ 학부(과) 학생회장단은 해당 학부(과)의 자치규칙에 따라 소속 단위 정회원의 보통·평등·직접·비밀선거로 선출한다.
            </p>
            <p className="article-text">
              ⑦ 학부(과) 학생회장단의 선출, 업무와 권한, 의무 등에 관하여서는 해당 학부(과) 학생회 자치규칙으로 정한다. 이때 학부(과) 학생회 자치규칙은 소속 단과대학의 자치규칙과 본회의 회칙을 초월할 수 없다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제34조 (업무 및 권한)</h3>
            <p className="article-text">
              ① 학과(부), 전공 학생회는 공학 대회나 운영위원회에서 결의한 사안을 수행해야 한다.
            </p>
            <p className="article-text">
              ② 학과(부), 전공 학생회는 필요에 따라 본회의 회칙 범위 내에서 별도의 회칙을 제정할 수 있다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제35조 (의결기관)</h3>
            <p className="article-text">
              ① 학부(과) 학생총회는 학부(과) 학생회의 최고 의결기관이며, 소속 회원 전체로 구성된다.
            </p>
            <p className="article-text">
              ② 학부(과) 학생회는 해당 학부(과) 학생총회의 상설적인 의결기관이다.
            </p>
            <p className="article-text">
              ③ 각 의결기관의 구성, 업무와 권한, 운영 등에 관하여서는 해당 학부(과) 학생회 자치규칙으로 정한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제36조 (집행기관)</h3>
            <p className="article-text">
              ① 학부(과) 학생회는 해당 학부(과) 학생회의 최고 집행기관으로서 해당 학부(과) 학생회의 사업 집행 전반을 담당한다.
            </p>
            <p className="article-text">
              ② 학부(과) 학생회의 구성, 업무와 권한, 운영 등에 관하여서는 해당 학부(과) 학생회 자치규칙으로 정한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제37조 (재정)</h3>
            <p className="article-text">
              ① 학부(과) 학생회는 해당학부(과) 회원의 회비로 운영됨을 원칙으로 한다.
            </p>
            <p className="article-text">
              ② 학부(과) 학생회는 소속 단과대학감사위원회에서 실시하는 감사에서 재정 감사를 받아 재정사용의 투명성에 관하여 감사를 받을 의무가 있다.
            </p>
            <p className="article-text">
              ③ 학부(과) 학생회는 소속 단과대학 학생대표자회의에 예산안·결산을 작성 및 제출하여 회원들에게 예산사용에 관련하여 보고를 할 의무가 있다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제38조 (자치규칙)</h3>
            <p className="article-text">
              ① 학부(과) 학생회는 소속 단과대학의 자치규칙과 본회의 회칙 범위 내에서 별도로 자치규칙을 제정 및 운영할 수 있으며, 이 자치규칙으로 모든 사항을 규정한다. 단, "자치규칙"이라는 용어는 본회의 자치기구마다 상이할 수 있다.
            </p>
            <p className="article-text">
              ② 학부(과) 학생회가 자치규칙을 개정한 때에는 지체 없이 소속 단과대학 운영위원회에 보고하여야 한다.
            </p>
            <p className="article-text">
              ③ 학부(과) 학생회의 자치규칙이 부재한 경우 소속 단과대학 자치규칙을 준용한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제39조 (학생회비)</h3>
            <p className="article-text">
              ① 학생회비에 대한 금액은 공과대학 학생대표자회의를 통하여 결정·변경이 가능하다.
            </p>
            <p className="article-text">
              ② 계열별 학생회비는 통일한다.
            </p>
            <p className="article-text">
              ③ 2025학년도 학부(과) 학생회비는 2개 계열 모두 단운위에서 상정한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제40조 (학생회비 환불)</h3>
            <p className="article-text">
              ① 사망, 퇴학, 전과, 편입, 자퇴를 하는 경우에만 환불 가능으로 한다.
            </p>
            <p className="article-text">
              ② 기간은 납입 이후부터 2학년 1학기 개강 전까지로 한다. (학기 중에는 환불이 불가능하다.)
            </p>
            <p className="article-text">
              ③ 환불의 경우 64조 3항의 책정된 금액에서 20%를 제한 금액을 각 방학별 환불금액 기준을 잡는다.
            </p>
            <p className="article-text">
              ④ 여름방학 환불은 65조 3항에 따른 금액에서 40% + 보증금(학생회비의 20%)로 한다.
            </p>
            <p className="article-text">
              ⑤ 겨울방학 환불은 65조 3항에 따른 금액에서 30% + 보증금(학생회비의 20%)로 한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제41조 (학생회비 이양금)</h3>
            <p className="article-text">
              ① 입학시 배정 받는 학부(과)를 가배정 학부(과)로, 2학년 진학 시 배정받는 전공을 전공 학부(과)로 칭한다.
            </p>
            <p className="article-text">
              ② 1학년 종료시 계열 안에서의 이동 시 가배정 학부(과)는 전공 학부(과)로 이양금을 전달해야한다.
            </p>
            <p className="article-text">
              ③ '이양금'은 63조 4항에 책정된 금액의 20%로 한다.
            </p>
            <p className="article-text">
              ④ 공과대학 내 모든 학부(과)는 하반기 감사 때 '납부 인원 X 이양금'의 금액이 남아 있어야 한다.
            </p>
            <p className="article-text">
              ⑤ 집행년도의 다음 해 3월, 이양금에 관한 특별감사를 실시한다.
            </p>
          </article>
        </section>

        {/* 제5장 독립기구 */}
        <section id="chapter-5" className="constitution-section">
          <h2 className="chapter-title">제5장 독립기구</h2>
          
          <h3 className="section-title">제1절 공과대학 감사위원회</h3>

          <article className="article">
            <h3 className="article-title">제42조 (감사위원회)</h3>
            <p className="article-text">
              ① 공과대학 감사위원회 구성은 위원장 1인, 부위원장 3인, 일반위원 3인으로 구성한다.
            </p>
            <p className="article-text">
              ② 공과대학 감사위원회의 구성은 본회의 학생회장을 위원장으로 하며 상반기 공학 대회 대의원의 1/2 이상의 찬성을 인준으로 한다.
            </p>
            <p className="article-text">
              ③ 학생회장이 사고나 기타 불가피한 사유가 있을 시에는 부학생회장을 위원장으로 한다. (단, 부학생회장 또한 불가피한 사유가 있을 시에는 집행위원 1인을 위원장으로 하며 인준 절차는 위와 동일하다.)
            </p>
            <p className="article-text">
              ④ 공과대학 감사위원회의 부위원장은 공학 대회 대의원 중 3인을 선출한다. (단, 공학 대회에서 부위원장 선출이 불가능할 시에는 운영위원회에서 선출한다.)
            </p>
            <p className="article-text">
              ⑤ 공과대학 감사위원회 일반위원은 위원장 1인, 부위원장 3인 구성 후, 공과대학 전체 학생을 대상으로 공개 모집하여 선출한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제43조 (업무 및 권한)</h3>
            <p className="article-text">
              ① 공과대학 학과(부), 전공 학생회 사업 감사와 회계 감사를 수행한다.
            </p>
            <p className="article-text">
              ② 감사 일정은 공과대학 학과(부), 전공 학생회의 사업 일정을 고려하여야 한다.
            </p>
            <p className="article-text">
              ③ 감사 보고서는 감사일로부터 72시간 이전에 제출하여야 한다.
            </p>
            <p className="article-text">
              ④ 공학 대회, 운영위원회의 결정이 있으면 특별감사를 시행할 수 있다.
            </p>
            <p className="article-text">
              ⑤ 감사에 대한 절차 및 세부사항은 전북대학교 감사시행세칙을 따르며 공과대학의 특이성을 고려하여 부칙을 수정하여 정할 수 있다.
            </p>
            <p className="article-text">
              ⑥ 공과대학 감사위원회 재정은 공과대학 감사위원회에서 예산안을 편성하여 공과대학 운영위원회에 제출한다.
            </p>
          </article>

          <h3 className="section-title">제2절 공과대학 선거관리위원회</h3>

          <article className="article">
            <h3 className="article-title">제44조 (선거관리위원회)</h3>
            <p className="article-text">
              ① 공과대학 학생회 학생회장, 부학생회장 및 각급 학생회 학생회장, 부학생회장 선출을 위한 선거는 공과대학 선거관리위원회(이하 "공선위")에서 총괄한다.
            </p>
            <p className="article-text">
              ② 선거관리위원회의 위원장은 본회의 학생회장을 위원장으로 하며 상반기 공학대회 대의원의 과반수 찬성을 인준으로 한다.
            </p>
            <p className="article-text">
              ③ 학생회장이 사고나 기타 불가피한 사유가 있을 시에는 부학생회장, 부학생회장 또한 불가피한 사유가 있을 시에는 집행위원회 1인을 위원장으로 하며 인준 절차는 위와 동일하다.
            </p>
            <p className="article-text">
              ④ 선거관리위원회의 부위원장은 공학대회 대의원 중 3인으로 구성한다.
            </p>
            <p className="article-text">
              ⑤ 선거관리위원회의 운영비는 공과대학 학생회비에서 편성하며 운영위원회의 인준을 받아 사용할 수 있다.
            </p>
            <p className="article-text">
              ⑥ 후보자의 선거 등록비는 선거 정책자료집 제작에 사용하며, 남은 금액은 후보자에게 반환한다.
            </p>
            <p className="article-text">
              ⑦ 단독 후보 시 찬성이 과반수를 넘지 못하였을 때 연장투표에 관한 제반사항은 선거관리위원회에서 일임한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제45조~제53조 (선거 관련 조항)</h3>
            <p className="article-text">
              선거는 각급 단위 학생회장단을 선출하며, 보통, 직접, 비밀, 평등 선거를 실시한다. 선거권은 정회원에게 주어지며, 피선거권은 4학기 이상 등록한 재학생으로 한다. 임기는 회계연도에 준하며, 선거는 매년 11월 중에 실시한다. 보궐선거는 잔여 임기가 120일 이상인 경우 사유 발생일로부터 20일 이내에 실시한다.
            </p>
          </article>

          <h3 className="section-title">제3절 공과대학 동아리관리위원회</h3>

          <article className="article">
            <h3 className="article-title">제54조 (동아리 관리 위원회)</h3>
            <p className="article-text">
              ① 공과대학 동아리 관리 위원회 구성은 위원장 1인, 부위원장 3인으로 구성된다. 단, 부위원장 3인 중 2인은 공과대학 동아리 시행세칙에 의거하여 결정한다.
            </p>
            <p className="article-text">
              ② 공과대학 동아리 관리 위원회 구성은 본회의 학생회장을 위원장으로 하며 상반기 공학 대회 대의원의 1/2 이상의 찬성을 인준으로 한다.
            </p>
            <p className="article-text">
              ③ 학생회장이 사고나 기타 불가피한 사유가 있을 시에는 부학생회장을 위원장으로 한다. (단, 부학생회장 또한 불가피한 사유가 있을 시에는 집행위원 1인을 위원장으로 하며 인준 절차는 위와 동일하다.)
            </p>
            <p className="article-text">
              ④ 공과대학 동아리 관리 위원회 일반위원은 위원장 1인, 부위원장 3인 구성 후 공과대학 전체 학생을 대상으로 공개 모집하여 선출한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제55조 (업무 및 권한)</h3>
            <p className="article-text">
              ① 공과대학 동아리 활동 감사를 수행한다.
            </p>
            <p className="article-text">
              ② 감사 일정은 각 동아리의 일정을 고려하여야 한다.
            </p>
            <p className="article-text">
              ③ 동아리 등록 및 제명은 관련된 시행 세칙을 따르며 공과대학 동아리 관리 위원회에서 결정한다.
            </p>
          </article>
        </section>

        {/* 제6장 재정 */}
        <section id="chapter-6" className="constitution-section">
          <h2 className="chapter-title">제6장 재정</h2>

          <article className="article">
            <h3 className="article-title">제56조 (재정)</h3>
            <p className="article-text">
              ① 본회의 재정은 매 학기 등록금과 함께 납부하는 학생회비의 중앙 분배와 학생과 보조금 및 기타 수입으로 충당하며 회칙에 규정된 활동 이외에는 다른 목적에 사용할 수 없다.
            </p>
            <p className="article-text">
              ② 회비의 금액은 중앙운영위원회나 전체학생대표자회의에서 결정한 액수를 따른다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제57조 (회계연도)</h3>
            <p className="article-text">
              본회의 회계 연도는 당해 연도 12월 1일부터 다음 해 11월 30일까지로 한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제58조 (예산 편성)</h3>
            <p className="article-text">
              ① 예산 편성안은 운영위원회에서 보고하고 공학 대회에 제출하여 심의, 의결한다.
            </p>
            <p className="article-text">
              ② 예산 편성안이 부결되면 7일 이내에 운영위원회에 보고하고 의결한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제59조 (결산 보고)</h3>
            <p className="article-text">
              공과대학 재원의 집행 및 결산내역을 공학 대회에 제출하여 보고, 심의한다.
            </p>
          </article>
        </section>

        {/* 제7장 학생회비 */}
        <section id="chapter-7" className="constitution-section">
          <h2 className="chapter-title">제7장 학생회비</h2>

          <article className="article">
            <h3 className="article-title">제60조 (학생회비)</h3>
            <p className="article-text">
              ① 학생회비는 본회의 정회원의 권리로, 정회원의 납부를 통하여 학내 자치기구 활동을 활성화하고 본회 회원의 복지와 권리를 신장하기 위해 사용되는 회비이다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제61조 (학생회비 사용)</h3>
            <p className="article-text">
              ① 학생회비 사용은 학생복지 증진을 위한 대전제 하에 사용한다.
            </p>
            <p className="article-text">
              ② 학생회비 사용은 제39조 제1항을 벗어나 사용될 수 없다.
            </p>
            <p className="article-text">
              ③ 학생회비 통장을 사적으로 이용하지 않는다.
            </p>
            <p className="article-text">
              ④ 기존 학생회는 신임 학생회에 학생회비 이월 시 빚을 이월하지 않는다.
            </p>
            <p className="article-text">
              ⑤ 전임 학생회에서 신임 학생회로 빚을 이월할 경우, 빚에 대한 책임은 전적으로 전임 학생회에 있다. 단, 전임 학생회와 신임 학생회의 합의 하에 조정 가능하다.
            </p>
            <p className="article-text">
              ⑥ 학생회비 사용 후 영수증 및 회계를 정리하여 보관 및 공개할 수 있도록 한다.
            </p>
            <p className="article-text">
              ⑦ 학생회비 사용은 각 항목이 명확하게 드러나야 한다.
            </p>
            <p className="article-text">
              ⑧ 회비 중 조직관리비에 관한 항목은 전체 학생회비의 10%로 제한한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제62조 (학생회비 계좌)</h3>
            <p className="article-text">
              ① 신임 학생회의 학생회비 집행은 해당 학생회 계좌를 통하여 이뤄진다.
            </p>
            <p className="article-text">
              ② 계좌개설의 예금주는 "성명(학생회 이름)"의 형식에 맞게 개설한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제63조 (학생회비 집행 - 수입)</h3>
            <p className="article-text">
              ① 각 학생회는 활동에서 발생하는 모든 수입에 대하여 각각의 명목을 명시하여 해당 학생회 계좌로 입금 및 집행한다.
            </p>
            <p className="article-text">
              ② 위의 '모든 수입'이란 학생회 자치 활동에서 발생하는 모든 수입을 말한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제64조 (학생회비 집행 - 지출)</h3>
            <p className="article-text">
              ① 각 학생회는 학생회 활동에서 발생하는 학생회비 지출을 명시한다.
            </p>
            <p className="article-text">
              ② 각 학생회는 학생회 활동에서 발생하는 학생회비 지출에 대한 영수증을 수집한다.
            </p>
            <p className="article-text">
              ③ 각 학생회의 학생회비 지출은 각 학생회 카드결제 및 계좌이체를 원칙으로 하며 차용정산을 금한다.
            </p>
          </article>
        </section>

        {/* 제8장 회칙개정 */}
        <section id="chapter-8" className="constitution-section">
          <h2 className="chapter-title">제8장 회칙개정</h2>

          <article className="article">
            <h3 className="article-title">제65조 (발의)</h3>
            <p className="article-text">
              ① 운영위원회의 심의를 받은 학생회장 또는 부학생회장의 발의
            </p>
            <p className="article-text">
              ② 공학 대회 1/3 이상의 발의
            </p>
            <p className="article-text">
              ③ 운영위원 1/2 이상의 발의
            </p>
            <p className="article-text">
              ④ 회원의 1/10 이상의 발의
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제66조 (공고)</h3>
            <p className="article-text">
              발의된 회칙 개정안은 120시간 이내에 의장이 공고하되 공고 기간은 7일 이상으로 한다. 단, 회칙 개정안은 공과대학 게시판 또는 온라인 통신 매체를 이용해 공고한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제67조 (의결)</h3>
            <p className="article-text">
              공고된 회칙 개정안은 7일 이내에 의결하여야 한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제68조 (공포)</h3>
            <p className="article-text">
              의결된 회칙 개정안은 72시간 이내에 공포하여야 한다.
            </p>
          </article>
        </section>

        {/* 제9장 게시판 관리 */}
        <section id="chapter-9" className="constitution-section">
          <h2 className="chapter-title">제9장 게시판 관리</h2>

          <article className="article">
            <h3 className="article-title">제69조 (장소)</h3>
            <p className="article-text">
              전북대학교 공과대학 내의 학과(부) 전공 전용 게시판, 대학원 전용 게시판 및 공과대학 외부 시설 전용 게시판을 제외한 모든 내부/외부 게시판을 뜻한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제70조 (게시 조건)</h3>
            <p className="article-text">
              선전물을 게시하려는 학우는 본회에 내용과 게시 날짜를 통보하여야 하며 게시물에 대한 확인을 받아야 한다. 단체의 경우 단체명을, 개인의 경우 학과(부)와 학년 및 이름을 선전물에 게시하여야 한다. 단, 동일 내용에 대한 게시물은 해당 게시판에 중복 게시할 수 없다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제71조 (유지)</h3>
            <p className="article-text">
              승인절차를 밟은 선전물에 대하여 공과대학 학생회는 선전물이 통보된 날짜까지 유지한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제72조 (제한)</h3>
            <p className="article-text indent">
              1. 특정 정치집단 관련 선전물
            </p>
            <p className="article-text indent">
              2. 음란물 및 기본적 윤리기준에 벗어나는 선전물
            </p>
            <p className="article-text indent">
              3. 총학생회 및 공과대학 학생회의 제휴업체를 제외한 상업성 광고물
            </p>
            <p className="article-text indent">
              4. 지정된 게시 장소 이외에 게시된 선전물
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제73조 (징계)</h3>
            <p className="article-text">
              위 조항을 위반 및 불법 게시 시 해당 단체 및 개인에게 경고를 가하고 철거를 요청 및 직접 철거할 수 있다. 연속 2회 경고, 누적 3회 경고 시 마지막 경고 일부터 한 달간 게시를 금하며, 4회 경고 시 3개월, 5회 경고 시 6개월 게시를 금할 수 있다. 5회 이상 경고 시 영구히 게시를 금한다.
            </p>
          </article>

          <article className="article">
            <h3 className="article-title">제74조 (예외)</h3>
            <p className="article-text">
              각 학과(부) 전공 학생회와 공과대학 동아리 선전물일 경우 제60조와 제61조를 의무화 하는 조건으로 게시의 자율성을 보장한다.
            </p>
          </article>
        </section>

        {/* 부칙 */}
        <section id="appendix" className="constitution-section">
          <h2 className="chapter-title">부칙</h2>

          <article className="article">
            <p className="article-text">
              제1조 본 회칙에 명시되지 않은 사항은 총학생회 회칙 및 민주적 관례에 따른다.
            </p>
            <p className="article-text">
              제2조 본 회칙에 명시된 기구는 본 회칙의 규정을 받는다.
            </p>
            <p className="article-text">
              제3조 본 회칙은 공포 즉시 효력을 발생한다.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}

export default Constitution;
