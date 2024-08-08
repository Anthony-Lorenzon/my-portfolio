import React from 'react';
import './SectionStyle.css'; // Add any specific styles for this section if needed
import './ProjectCards.css';

const Section3 = () => {
  return (
    <div id="section3" className="section">
      <h2>Projects</h2>
      <div className="cards">
        <div className="project-card">
          <img src="./images/tictactoe.PNG" alt="tictactoe img"></img>
          <h3>Tic-Tac-Toe</h3>
          <p>Good old fashion game of Tic-Tac-Toe</p>
          <div className='backgroundcolor'>
            <a href="#"/* target="_blank" */rel="noopener noreferrer">
              <img src="./images/www.png" alt="WWW icon" className="icon"/>
            </a>
            <a href="https://github.com/Anthony-Lorenzon/react-useState" target="_blank" rel="noopener noreferrer">
              <img src="./images/githubicon.png" alt="git icon" className="icon"/>
            </a>
          </div>
        </div>
        <div className="project-card">
          <img src="./images/nyancat.png" alt="placeholder2 img"></img>
          <h3>Nyan Cat</h3>
          <p>A web game where nyan cats fly at you. You have to dodge them. For every missed cat you get a point. Try to get the most points.</p>
          <div className='backgroundcolor'>
            <a href="#"/* target="_blank" */rel="noopener noreferrer">
              <img src="./images/www.png" alt="WWW icon" className="icon"/>
            </a>
            <a href="https://github.com/Anthony-Lorenzon/project-js-nyan-cat" target="_blank" rel="noopener noreferrer">
              <img src="./images/githubicon.png" alt="git icon" className="icon"/>
            </a>
          </div>
        </div>
        <div className="project-card">
          <img src="./images/placeholder3.PNG" alt="placeholder3 img"></img>
          <h3>Placeholder Project #3</h3>
          <p>placeholder 3 description</p>
          <div className='backgroundcolor'>
            <a href="#"/* target="_blank" */rel="noopener noreferrer">
              <img src="./images/www.png" alt="WWW icon" className="icon"/>
            </a>
            <a href="#" /* target="_blank" */ rel="noopener noreferrer">
              <img src="./images/githubicon.png" alt="git icon" className="icon"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
