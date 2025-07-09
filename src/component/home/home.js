import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderBar from '../headerBar/headerBar.js';
import image1 from '../../img/imageSlider1.png';
import image2 from '../../img/imageSlider2.png';
import image3 from '../../img/imageSlider3.png';
import ImageSlider from './imageSlider/imageSlider.js';
import './home.css';
import CardSection from './cardSection/cardSection.js';

function Home() {
  const slides = [{image: image1}, {image: image2}, {image: image3}];
    return(
      <Router>
        <div className="app-container">
          <div className='header-container'> <HeaderBar/> </div>
          <div className='slider-container'> <ImageSlider slides={slides} /> </div>
          <div className='cards-container'> <CardSection /> </div>
        </div>
      </Router>

    );
}

export default Home;