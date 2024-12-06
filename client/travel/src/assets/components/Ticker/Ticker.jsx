import React from 'react';
import './Ticker.css';

const Ticker = () => {
  const logos = [
    'logo1.png',
    'logo2.png',
    'logo3.png',
    'logo4.png',
    'logo5.png',
    'logo6.png',
    'logo7.png',
    'logo7.png',
    'logo7.png',
    'logo1.png',
    'logo2.png',
    'logo3.png',
    'logo4.png',
  ];

  // Duplicate logos infinitely by rendering multiple copies
  const infiniteLogos = [...logos, ...logos, ...logos]; // Extend as needed for smooth scrolling

  return (
    <div className="logo-ticker">
      <div className="ticker-container">
        {infiniteLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} className="ticker-logo" />
        ))}
      </div>
    </div>
  );
};

export default Ticker;
