import React from "react";
import "./SectionStyle.css"; 
import "./ProjectCards.css";

const Section3 = () => {
  return (
    <div id="section3" className="section">
      <h2>Projects</h2>
      <div className="cards">
        <div className="project-card">
          <img src="./images/stockwebsite.PNG" alt="project 1 img"></img>
          <h3>Stock Website</h3>
          <p>● Enabled secure user login and session management using Auth0, providing seamless authentication and authorization.</p>
          <p>● Developed a feature for real-time stock data retrieval through API calls, allowing users to search and view stock information.</p>
          <p>● Designed and integrated a MongoDB database to store and manage users' favorite stocks, allowing them to add, remove, and maintain a personalized list across sessions.</p>
          <p>● Website is designed to be fully modular for any device no matter the size.</p>
          <div className="backgroundcolor">
            <a href="#" /* target="_blank" */ rel="noopener noreferrer">
              <img src="./images/www.png" alt="WWW icon" className="icon" />
            </a>
            <a
              href="https://github.com/Anthony-Lorenzon/StockWebsite"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/githubicon.png"
                alt="git icon"
                className="icon"
              />
            </a>
          </div>
        </div>        
        <div className="project-card">
          <img src="./images/ecommercewebsite.PNG" alt="project 2 img"></img>
          <h3>E-commerce website</h3>
          <p>Mock e-commerce website</p>
          <p>
            ● Collaborated in a team to create a full-stack e-commerce application
            with MERN stack.
          </p>
          <p>
            ● Handled stock verification, reducing inventory upon purchase, and
            ensuring data consistency.
          </p>
          <p>
            ● Created endpoints for the frontend to retrieve product information
            and handle purchases effectively.
          </p>

          <div className="backgroundcolor">
            <a href="#" /* target="_blank" */ rel="noopener noreferrer">
              <img src="./images/www.png" alt="WWW icon" className="icon" />
            </a>
            <a href="https://github.com/Dani-Despatie/project-GROUP-e-commerce" target="_blank" rel="noopener noreferrer">
              <img
                src="./images/githubicon.png"
                alt="git icon"
                className="icon"
              />
            </a>
          </div>
        </div>
        <div className="project-card">
          <img src="./images/nyancat.png" alt="nyancat image"></img>
          <h3>Nyan Cat</h3>
          <p>
            A web game where nyan cats fly at you. You have to dodge them. For
            every missed cat you get a point. Try to get the most points.
          </p>
          <div className="backgroundcolor">
            <a href="#" /* target="_blank" */ rel="noopener noreferrer">
              <img src="./images/www.png" alt="WWW icon" className="icon" />
            </a>
            <a
              href="https://github.com/Anthony-Lorenzon/project-js-nyan-cat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/githubicon.png"
                alt="git icon"
                className="icon"
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Section3;
