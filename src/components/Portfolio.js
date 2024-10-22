import React from 'react';
import './Portfolio.css';

import studentStash from './projects/studentstash.png';
import scheduleMaker from './projects/schedulemaker.png';
import wordIcon from './projects/words.png';
import basketIcon from './projects/basketbuddy.png';
import factIcon from './projects/fact.png';

const projects = [
  { id: 1, title: 'Student Stash', link: "Demo: https://www.youtube.com/watch?v=r1Y6NLwDt0U&t=68s", description: 'Fullstack mobile application built in Flutter that allows students to buy/sell items to/from each other', image: studentStash },
  { id: 2, title: 'Word Game Solver', link: 'https://word-game-frontend.vercel.app/', description: 'Website that provides all potential word combinations for popular word puzzle games on Game Pigeon: Word Hunt and Anagrams', image: wordIcon },
  { id: 3, title: 'Lab Assistant Schedule Maker', link: 'https://schedule-maker-three.vercel.app/', description: "Website built for SJSU's Salesforce Lab Assistants to automate their schedule creation for Lab Sections", image: scheduleMaker },
  { id: 4, title: 'Basket Buddy', link: "Github: https://github.com/Tyler-Dunning/CS157-Team2", description: "Fullstack React, Express.js, and SQL project that connects basketball players by allowing them to connect to form groups, find pickup games, and create tournaments", image: basketIcon },
  { id: 5, title: 'Fact Checker API', link: "Github: https://github.com/Tyler-Dunning/fact-checker-api", description: "Flask/Python API that given a URL to an article or Youtube video, will return all of the identified opinionated claims, find sources related to those claims, and fact check the claim based on the sources.", image: factIcon },

];

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>My Projects</h2>
      <div className="portfolio-grid">
        {projects.map(project => (
          <div key={project.id} className="portfolio-item">
            <img src={project.image} alt={project.title} />
            <div className="portfolio-overlay">
              <h3>{project.title}</h3>
              {project.link !== "" && <h5>{project.link}</h5> }
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h1>Thank You For Reading!</h1> <br />
      <h6>Have an awesome day :D</h6>
    </section>
  );
}

export default Portfolio;
