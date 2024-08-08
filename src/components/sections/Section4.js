import React from 'react';
import './SectionStyle.css'; // Add any specific styles for this section if needed
import './ContactStyle.css';

//https://web3forms.com/#start
//found this and it works well
//250 emails per month in the free version
//should be enough

const Section4 = () => {
  return (
    <div id="section4" className="section">
      <form action="https://api.web3forms.com/submit" method="POST">
      <h3>Contact me</h3>
      <p>or email me at alorenzon2006@gmail.com</p>
        <input type="hidden" name="access_key" value="bcb9bbdb-5632-48a2-8ec9-36bd07367f61" />

        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" required />
        
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" required></textarea>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Section4;
