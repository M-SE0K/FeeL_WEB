import logo from './logo.svg';
import './App.css';
import home from './component/home.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderBar from './component/headerBar/headerBar.js';

//hello commit 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <HeaderBar/>
          <Routes>
            <Route path="/about" element={<div>학생회소개 페이지</div>} />
            <Route path="/notice" element={<div>알림 페이지</div>} />
            <Route path="/benefits" element={<div>제휴 혜택 페이지</div>} />
            <Route path="/contact" element={<div>문의 페이지</div>} />
            <Route path="/resources" element={<div>자료실 페이지</div>} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
