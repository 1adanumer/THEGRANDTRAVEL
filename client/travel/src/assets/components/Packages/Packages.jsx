import React from "react";
import "./Packages.css";

const Packages = () => {
  const trips = [
    {
      id: 1,
      name: "Maldives Getaway",
      price: "$999",
      rating: "4.8",
      image: "Maldives.jpg",
    },
    {
      id: 2,
      name: "Swiss Alps Adventure",
      price: "$1299",
      rating: "4.9",
      image: "Maldives.jpg",
    },
    {
      id: 3,
      name: "Dubai Luxury Escape",
      price: "$899",
      rating: "4.7",
      image: "Maldives.jpg",
    },
  ];

  return (
    <div className="packages-container">
      <h1 className="packages-heading">Our Packages</h1>
      <p className="packages-subheading">
        Our priority is customer satisfaction with 24/7 support
      </p>
      <div className="packages-cards">
        {trips.map((trip) => (
          <div className="package-card" key={trip.id}>
            <img
              src={trip.image}
              alt={trip.name}
              className="package-image"
            />
            <div className="package-info">
              <h3 className="package-name">{trip.name}</h3>
              <p className="package-rating">⭐ {trip.rating}</p>
              <p className="package-price">{trip.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="know-more-button">Know More</button>
    </div>
  );
};

export default Packages;
