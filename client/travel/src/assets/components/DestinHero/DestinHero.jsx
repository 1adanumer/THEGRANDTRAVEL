import React from "react";
import { Link } from "react-router-dom";
import "./DestinHero.css"; // Custom CSS for styling

const DestinHero = () => {
    return (
        <div className="hero-section">
            <div className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/destinations">Destinations</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </div>
            <div className="hero-image">
                <img src="./destinationsheroimg.jpg" alt="Beautiful Mountain" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                
            </div>
        </div>
    );
};

export default DestinHero;
