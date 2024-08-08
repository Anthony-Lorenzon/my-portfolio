import React from 'react';
import './SectionStyle.css'; // Add any specific styles for this section if needed

const Section2 = () => {
  return (
    <div id="section2" className="section">
      <h2 className="section2-h2">About me</h2>
      <p className="section2-paragraph">Hello! I’m Anthony. I recently completed a web development bootcamp, transitioning from a finance career to tech. With a degree in finance and experience in data analysis, I’ve developed a strong foundation in web technologies like JavaScript, React, and Node.js. I’m excited to leverage my analytical skills in building dynamic and responsive web applications and look forward to new opportunities in tech.</p>
      <h3 className="section2-h3">Coding skills</h3>
      <div className="grid-container">
      <div className="grid-item">
          <img src="/images/htmllogo.png"alt="HTML Icon" className="icon-grid"/>
      </div>
      <div className="grid-item">
          <img src="/images/jslogo.png"alt="JS Icon" className="icon-grid"/>
      </div>
      <div className="grid-item">
          <img src="/images/csslogo.png"alt="CSS Icon" className="icon-grid"/>
      </div>
      <div className="grid-item">
          <img src="/images/mongodb.png"alt="MongoDB Icon" className="icon-grid"/>
      </div>
      <div className="grid-item">
        <img src="/images/reactlogo.png"alt="React Icon" className="icon-grid"/>
      </div>
      <div className="grid-item">
      <img src="/images/vscode.png"alt="VS Code Icon" className="icon-grid"/>
      </div>
    </div>
    </div>
  );
};

export default Section2;
