import React from "react";
import "./HeroSecVersion.css";
import SearchBar from "../SearchBar/SearchBar";

const HeroSecVersion = () => {
  return (
    <div className="hero-section">
      <video autoPlay loop muted className="hero-video">
        <source src="https://videos.pexels.com/video-files/2897277/2897277-hd_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <h1>Where travel meets<br /> luxury and Safety</h1>
        <SearchBar />
      </div>
    </div>
  );
};

export default HeroSecVersion;