import React from "react";
import "./HeroSection.css";
import SearchBar from "../SearchBar/SearchBar";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Navigation Links */}
      <div className="hero-nav">
        <a href="#page1">Jobs</a>
        <a href="#page2">Search</a>
        <a href="#page3">Blogs</a>
        <a href="#page4">Booking</a>
        <a href="#page5">Agents</a>
        <a href="#page6">Hotel</a>
        <a href="#page7">Get Quote</a>
      </div>

      {/* Title */}
      <h1 className="hero-title">Your Next Grand Travel</h1>

      {/* Slider */}
      <div className="slider">
        <div className="slider-track">
          {/* Duplicated Images */}
          {[...Array(5)].map((_, i) => (
            <React.Fragment key={i}>
              <img src="slider 1.png" alt="Card 1" className="slider-card" />
              <img src="slider 2.png" alt="Card 2" className="slider-card" />
              <img src="slider 3.png" alt="Card 3" className="slider-card" />
              <img src="slider 4.png" alt="Card 4" className="slider-card" />
            </React.Fragment>
          ))}
        </div>
      </div>

      <SearchBar />
    </section>
  );
};

export default HeroSection;
