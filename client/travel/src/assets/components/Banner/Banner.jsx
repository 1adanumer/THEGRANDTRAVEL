import React from 'react';
import './Banner.css'; // Make sure the CSS file is in the same directory

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-heading">Free hotel membership on first travel</h1>
        <button className="book-now-button">Book Now</button>
      </div>
      <div className="banner-image">
        <img src="plane.png" alt="Hotel" />
      </div>
    </div>
  );
};

export default Banner;
