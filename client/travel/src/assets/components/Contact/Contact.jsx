import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-content">
        <form className="contact-form">
          <input
            type="text"
            placeholder="Name"
            className="contact-input"
          />
          <input
            type="email"
            placeholder="Email"
            className="contact-input"
          />
          <textarea
            placeholder="Message"
            className="contact-input contact-message"
          ></textarea>
          <button type="submit" className="contact-button">
            Submit
          </button>
        </form>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112497366!2d144.9630579153167!3d-37.81410797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f9e1b0a0b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1611818391234!5m2!1sen!2sau"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;