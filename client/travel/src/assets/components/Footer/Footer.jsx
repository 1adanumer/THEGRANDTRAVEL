import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <h2 className="newsletter-heading">Subscribe to Our Newsletter</h2>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-submit">
            →
          </button>
        </form>
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        <p className="footer-copyright">
          The Grand Travel - All rights reserved © 2024
        </p>
        <p className="footer-made-by">MADE BY WEBSTEAM</p>
      </div>
    </footer>
  );
};

export default Footer;
