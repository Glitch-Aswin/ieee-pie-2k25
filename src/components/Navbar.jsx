import React, { useState } from 'react';
import './Navbar.css';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => setIsMenuOpen(prevState => !prevState);

  return (
    <nav>
      <a href="#home" className="pie">
        <img src="https://pie.ieeekerala.org/pielogo.png" alt="IEEE PIE Logo" />
      </a>

      <div className="menu" onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={isMenuOpen ? 'open' : ''}>
        <li><a href="#home">Home</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfWOA-89HTwHMU3gJnSZasU8nTxamsREv3OB-oiHDyKfnyPHA/viewform" className="registration-btn">REGISTER NOW!!</a></li>
      </ul>
    </nav>
  );
};
