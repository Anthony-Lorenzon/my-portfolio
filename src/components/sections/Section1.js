import React from "react";
import "./SectionStyle.css"; // Add any specific styles for this section if needed

const Section1 = () => {

  const openResume = () => {
    window.open('./images/resume.pdf', '_blank');
  };


  return (
    <div id="section1" className="section">
      <div className="text-content">
        <img
          src="./images/computer.png"
          alt="Computer img"
          className="computerpicture"
          height="300px"
        />
        <h1>Web Developer</h1>
        <p>Hi, I'm Anthony Lorenzon. A passionate Web Developer</p>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/anthony-l-6b022a23b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/linkedin.png"
              alt="LinkedIn Icon"
              className="icon"
            />
          </a>
          <a
            href="https://github.com/Anthony-Lorenzon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/githubicon.png"
              alt="Github Icon"
              className="icon"
            />
          </a>
          <button onClick={openResume} className="resume-button">Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
