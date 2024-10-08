import React from 'react';
import './SectionStyle.css'; // Add any specific styles for this section if needed

const Section2 = () => {
  return (
    <div id="section2" className="section">
      <h2 className="section2-h2">About me</h2>
      <p className="section2-paragraph">Hi, I'm Anthony Lorenzon! After earning my Bachelor of Commerce degree with a major in Finance, I transitioned into web development and completed a Full-Stack Web Development Diploma at Concordia University. I'm skilled in frontend and backend technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB. I’m excited about growing my skills, learning new technologies, and contributing to meaningful projects. With my background in finance and development, I bring a unique perspective to problem-solving.</p>
      <h3 className="section2-h3">Coding skills</h3>
      <div className="grid-container">
      <div className="grid-item">
          <img src="./images/htmllogo.png"alt="HTML Icon" className="icon-grid"/>
      </div>
      <div className="grid-item">
          <img src="./images/jslogo.png"alt="JS Icon" className="icon-grid"/>
      </div>
      <div className="grid-item">
          <img src="./images/csslogo.png"alt="CSS Icon" className="icon-grid"/>
      </div>
      <div className="grid-item">
          <img src="./images/mongodb.png"alt="MongoDB Icon" className="icon-grid"/>
      </div>
      <div className="grid-item">
        <img src="./images/reactlogo.png"alt="React Icon" className="icon-grid"/>
      </div>
      <div className="grid-item">
      <img src="./images/vscode.png"alt="VS Code Icon" className="icon-grid"/>
      </div>
    </div>
    </div>
  );
};

export default Section2;
