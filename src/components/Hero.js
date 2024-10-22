import React from 'react';
import './Hero.css';

import githubIcon from "./icons/github.png";
import linkedinIcon from "./icons/linkedin.webp";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Tyler Dunning</h1>
        <p>Fullstack Developer | Cybersecurity Professional | Backend Engineer</p>
        <a href="https://github.com/Tyler-Dunning">
          <img src={githubIcon} alt="Github" className='icon'/>
        </a>
        <a href="https://www.linkedin.com/in/tyler-dunning-36952b292/">
          <img src={linkedinIcon} alt="LinkedIn" className='icon'/>
        </a>
      </div>
    </div>
  );
}

export default Hero;
