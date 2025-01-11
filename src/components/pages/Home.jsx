import React from 'react';
import './Home.css';
import exampleImage from '/cyb2.png';
import DescriptionCard from '../DescriptionCard.jsx';

export const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>TechXplore 2025</h1>
        <DescriptionCard />
      </div>
      <div className="hero-image">
        <img src={exampleImage} alt="Tech Event" />
      </div>
    </section>
  );
};
