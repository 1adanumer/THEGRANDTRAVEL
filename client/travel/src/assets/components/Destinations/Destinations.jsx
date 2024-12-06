import React from "react";
import "./Destinations.css";

const Destinations = () => {
  const images = [
    "Destination1.jpg",
    "Destination2.jpg",
    "Destination3.jpg",
    "Destination4.jpg",
    "Destination5.jpg",
    "Destination6.jpg",
  ];

  return (
    <div className="destinations-container">
      <h1 className="section-title">Our Top Destinations</h1>
      <div className="bento-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Destination ${index + 1}`}
            className="bento-image"
          />
        ))}
      </div>
      <button className="load-more-btn">Load More</button>
    </div>
  );
};

export default Destinations;
