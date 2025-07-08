# 📄 공과대학 웹 페이지 개발
## 페이지 링크

> **`배포 링크`** [**https://m-se0k.github.io/FeeL_WEB/**](https://m-se0k.github.io/FeeL_WEB/)
> 
> 
> [공과대학 웹 페이지 개발 ](https://www.notion.so/1e3ed78e319f80b9a1b2c4b9c8ef387b?pvs=21) 
> 
> 마지막에는 git 계정 하나 파서 거기다가 플젝 파일 옮겨서 URL 링크 수정하는 방식으로
> 
> **ex) `https://FeeL.github.io/FeeL/`**
> 

---

## 개발 환경 설정

### react 설치

```
npm install -g create-react-app
npx create-react-app [프로젝트명] // 이건 근데 내가 깔아서 pull해서 쓰는 거라 안해도 될듯 함
```

### 프로젝트 빌드 및 실행

```
npm run build
npm start
```

### git 로컬, 원격 연결

```
git init
git add .
git remote add origin https://github.com/M-SE0K/FeeL_WEB.git
git push -u origin [브랜치 명]
```

### github branch 구조

> https://devocean.sk.com/blog/techBoardDetail.do?ID=165571&boardType=techBlog
사용하는 이유는 동일한 시간대에 서로 다른 기능 개발시 병합시 번거로움을 덜고자 함
> 
- **`main` : 최종 확인 후 배포 되는 브랜치**
- **`develop` : 각 기능별 브랜치 병합 이후 발생하는 오류 수정**
- **`feature[기능명]` : 각 기능별 구현하는 브랜치. (우리는 main을 pull 해와서 `feature`최신화하는 것으로)**

```jsx
git checkout [브랜치명] -> 브랜치간 이동 명령어
git branch [브랜치명] -> 브랜치 생성 명령어
git branch -r : 원격저장소 (깃허브) 브랜치 상태 확인
git branch -a : 로컬저장소 (내 컴퓨터) 브랜치 상태 확인
```

### gh-pages 배포

> https://usage.tistory.com/168
> 
> 
> https://velog.io/@blackpaint/React-GitHub-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%9D%80%EB%8D%B0-%EC%99%9C-README%EA%B0%80-%EB%9C%A8%EB%8A%94%EA%B1%B0%EC%A3%A0[https://velog.io/@blackpaint/React-GitHub-배포하고-싶은데-왜-README가-뜨는거죠](https://velog.io/@blackpaint/React-GitHub-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%9D%80%EB%8D%B0-%EC%99%9C-README%EA%B0%80-%EB%9C%A8%EB%8A%94%EA%B1%B0%EC%A3%A0)
> 

**→ 배포 이후 README 뜨는 거 확인 후 두 번째 링크 참고해서 수정함**

---

## 구조

```
feel/
├── node_modules/
├── public/
├── src
│   ├── /component
│   │   ├── about     # 학생회 소개
│   │   ├── notice    # 알림
│   │   ├── benefits  # 제휴 혜택
│   │   ├── contact   # 문의
│   │   ├── resources # 자료실
│   │   ├── headerBar # 헤더바
│   │   ├── home   # 메인 화면
│   │   │   ├── imageSlider #이미지 슬라이더
│   │
│   ├── img
│  
│  
│  
│  
│  
│  
├── .gitignore
├── pakage.json
├── pakage-lock.json
├── READE.md
```

## **`headerBar`**

> **오류명 : `‘Can’t resolve ‘react-roucter-dom’` 
https://developer-ping9.tistory.com/212
→ react-route-dom 설치로 해결**
> 

```jsx
**npm i -s react-router-dom**
```

```jsx
function HeaderBar() {
  return (
    <header className="header-bar">
      <nav className="nav-menu">
        <ul className="nav-list">
          <li><Link to="/about">학생회소개</Link></li>
          <li><Link to="/notice">알림</Link></li>
          <li><Link to="/benefits">제휴 혜택</Link></li>
          <li><Link to="/contact">문의</Link></li>
          <li><Link to="/resources">자료실</Link></li>
        </ul>
      </nav>
    </header>
  );
}
```

### **`imageSlider`**

> typescript 어쩌고 안맞는 경우
> 
> 
> npm install react-icons 깔려 있는 지 확인할 것
>
