import React from 'react';
import '../GlobalStyles.css'; 
import FixedNavBar from './fixednavbar/FixedNavBar.js';
import Section1 from './sections/Section1.js';
import Section2 from './sections/Section2.js';
import Section3 from './sections/Section3.js';
import Section4 from './sections/Section4.js';
import Section5 from './sections/Section5.js';

const App = () => {
  return (
    <div>
      <FixedNavBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
};

export default App;