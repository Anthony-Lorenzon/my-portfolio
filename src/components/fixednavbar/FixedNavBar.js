import React from 'react';
import './FixedNavBarStyle.css'; // Ensure this path is correct

const FixedNavbar = () => {
  return (
    <nav className="fixed-navbar">
      <div className="navbar-links">
        <a href="#section1">Home</a>
        <a href="#section2">About me</a>
        <a href="#section3">Projects</a>
        <a href="#section4">Contact me</a>
      </div>
    </nav>
  );
};

export default FixedNavbar;
