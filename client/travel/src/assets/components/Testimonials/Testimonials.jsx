import React, { useState } from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    country: "USA",
    testimonial: "Amazing experience, highly recommend! Totally worth every penny!",
    image: "person.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    country: "UK",
    testimonial: "Fantastic service! Highly recommend to anyone!",
    image: "person.jpg",
  },
  {
    id: 3,
    name: "Carlos Rodriguez",
    country: "Spain",
    testimonial: "Great quality and fast delivery. Will definitely come back!",
    image: "person.jpg",
  },
  {
    id: 4,
    name: "Maria Garcia",
    country: "Mexico",
    testimonial: "Very happy with my purchase. Excellent customer service!",
    image: "person.jpg",
  },
  {
    id: 5,
    name: "Li Wei",
    country: "China",
    testimonial: "Exceeded expectations, would highly recommend!",
    image: "person.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonial-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-slider">
        <button className="arrow prev" onClick={handlePrev}>
          &lt;
        </button>
        <div className="testimonial-card">
          <img
            src={testimonialsData[currentIndex].image}
            alt={testimonialsData[currentIndex].name}
          />
          <h3>{testimonialsData[currentIndex].name}</h3>
          <p className="country">{testimonialsData[currentIndex].country}</p>
          <p className="testimonial-text">
            "{testimonialsData[currentIndex].testimonial}"
          </p>
        </div>
        <button className="arrow next" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
