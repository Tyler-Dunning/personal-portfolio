import React from 'react';
import './About.css';


function SkillIcon(icon, name) {
  return (
    <div>
    <figure>
    <img src={icon} alt="Icon" className='skill-icon' /> <br />
    <figcaption>{name}</figcaption>
    </figure>
        

    </div>
  )
};

export default SkillIcon;