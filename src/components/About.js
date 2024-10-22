import React from 'react';
import './About.css';
import SkillIcon from './SkillIcon';

import javaIcon from './icons/java.jpg'
import javascriptIcon from './icons/JavaScript.png';
import pythonIcon from './icons/python.png';
import sqlIcon from './icons/sql.png';
import firebaseIcon from './icons/firebase.webp';
import htmlIcon from './icons/html.webp';
import cssIcon from './icons/css.png';

const javaSkill = SkillIcon(javaIcon, "Java");
const javaScriptSkill = SkillIcon(javascriptIcon, "JavaScript");
const pythonSkill = SkillIcon(pythonIcon, "Python");
const sqlSkill = SkillIcon(sqlIcon, "SQL");
const firebaseSkill = SkillIcon(firebaseIcon, "Google Firebase");
const htmlSkill = SkillIcon(htmlIcon, "HTML");
const cssSkill = SkillIcon(cssIcon, "CSS");

function About() {
  return (
    <div>
      <h1>About Me</h1>
    <section id="about" className="about"> 
      <div className="about-text"> 
        <h3>My Interests</h3>
        <p>
          Besides programming, I love to golf, play basketball, hike, and spend time with my family.
          I am a lifelong fan of the Sacramento Kings (Light the Beam!), but I always love watching any sport that I can find on TV.
          I played golf and basketball competitively throughout my childhood, but now enjoy to play them recreationally with friends and family.
          Learning to play new games and sports is my favorite thing to do, so I am always trying to pick up new things!
        </p>
      </div>
      <div className="about-text">
        <h3>Skills</h3>
        <div className='skills-icons'>
          {javaSkill}
          {javaScriptSkill}
          {pythonSkill}
          {sqlSkill}
          {firebaseSkill}
          {htmlSkill}
          {cssSkill}
        </div>
      </div>
    </section>
    </div>
  );
}

export default About;
