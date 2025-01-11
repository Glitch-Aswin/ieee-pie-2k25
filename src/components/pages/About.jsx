import React, { useEffect, useState } from 'react';
import './About.css'; // Make sure the CSS file is properly imported

export const About = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className={`about-title ${fade ? 'fade-in' : ''}`}>About Us</h1>
        <p className={`about-description ${fade ? 'fade-in' : ''}`}>
        PIE is a special interest group of IEEE which focuses on curating a vibrant community of innovators and entrepreneurs. Promotion of Innovation and Entrepreneurship, intends to support engineers in pursuing entrepreneurship, have a better understanding of Startups and supports them by giving them access to the right platforms and resources.
        </p>
      </div>
      <img src="/pieteam.jpg" alt="Team" className="about-image" />
    </div>
  );
};

export default About;
