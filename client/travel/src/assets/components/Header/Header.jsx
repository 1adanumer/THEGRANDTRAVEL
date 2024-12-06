import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <a href="/">
          <img
            src="logo.png"
            alt="Logo"
            className="header-logo"
          />
        </a>
      </div>
      <div className="header-center">
        <div className="header-links">
          <a href="/destinations">Destinations</a>
          <a href="/packages">Packages</a>
          <a href="/testimonials">Testimonials</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="header-right">
        <img
          src="Male User.png"
          alt="Icon"
          className="header-icon"
        />
      </div>
    </header>
  );
};

export default Header;
