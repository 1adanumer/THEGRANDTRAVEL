import React from "react";
import "./PremPackages.css";

const PremPackages = () => {
  return (
    <div className="prem-packages">
      <h2 className="heading">Pricing</h2>
      <p className="subheading">Choose a plan that works for you</p>
      
      <div className="packages-container">
        <div className="package-card">
          <img src="Maldives.jpg" alt="Simple" className="package-image" />
          <h3>Simple</h3>
          <p className="price">
            <span className="monthly-price">$10</span>
            <span className="yearly-price">$100</span>
          </p>
          <ul>
            <li>Benefit 1</li>
          </ul>
          <button className="pay-button">Pay</button>
        </div>

        <div className="package-card">
          <img src="Maldives.jpg" alt="Efficient" className="package-image" />
          <h3>Efficient</h3>
          <p className="price">
            <span className="monthly-price">$20</span>
            <span className="yearly-price">$200</span>
          </p>
          <ul>
            <li>Benefit 1</li>
          </ul>
          <button className="pay-button">Pay</button>
        </div>

        <div className="package-card">
          <img src="Maldives.jpg" alt="Team" className="package-image" />
          <h3>Team</h3>
          <p className="price">
            <span className="monthly-price">$30</span>
            <span className="yearly-price">$300</span>
          </p>
          <ul>
            <li>Benefit 1</li>
          </ul>
          <button className="pay-button">Pay</button>
        </div>
      </div>
    </div>
  );
};

export default PremPackages;