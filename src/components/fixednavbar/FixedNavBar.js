import React from 'react';
import './FixedNavBarStyle.css'; // Ensure this path is correct

const FixedNavbar = () => {
  return (
    <nav className="fixed-navbar">
      <div className="navbar-links">
        <a href="#section1">Section 1</a>
        <a href="#section2">Section 2</a>
        <a href="#section3">Section 3</a>
        <a href="#section4">Section 4</a>
        <a href="#section5">Section 5</a>
      </div>
    </nav>
  );
};

export default FixedNavbar;
