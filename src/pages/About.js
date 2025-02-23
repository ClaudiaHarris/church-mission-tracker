import React from 'react';

function About() {
  return (
    <div className="container">
      <h4> About this App</h4>
      <p>
        The Church Mission Tracker is a React-based app 
        designed to help users log their acts of 
        service, such as time spent working and items donated to 
        support others. This week, I focused on enhancing the app 
        with features like a keypad-only login, a hamburger menu 
        for mobile navigation, and robust form validation. 
        The most challenging part was debugging an issue with node-modules that 
        caused me to start the entire application over in  order to solve. Another
        was a sticky footer
        issue. Ensuring the #root element stretched to the bottom 
        of the viewport took multiple iterations due to React’s 
        rendering quirks. 
        I was most excited to learn about 
        implementing React.js and using 
        localStorage for state persistence, which made the app 
        feel more polished and user-friendly.
      </p>
      <p className="bible-verse">
        "Whoever is kind to the poor lends to the Lord, and he will reward them for what they have done." — Proverbs 19:17 (NIV)
      </p>
      <p className="author">
        Created by Claudia Harris for CSIS: DevSecOps and Mobile Programming
      </p>
    </div>
  );
}

export default About;