import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/ant.mp4' autoPlay loop muted />
      <h1><img src='images/smlogo.png' alt='logo'/></h1>
      <p>VIDEO PRODUCTION | EDITING</p>
      
     
    </div>
  );
}

export default HeroSection;
