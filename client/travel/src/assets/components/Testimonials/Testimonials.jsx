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
    testimonial: "Amazing experience, highly recommend! Totally worth every penny!",
    image: "person.jpg",
  },
  {
    id: 3,
    name: "Carlos Rodriguez",
    country: "Spain",
    testimonial: "Amazing experience, highly recommend! Totally worth every penny!",
    image: "person.jpg",
  },
  {
    id: 4,
    name: "Maria Garcia",
    country: "Mexico",
    testimonial: "Amazing experience, highly recommend! Totally worth every penny!",
    image: "person.jpg",
  },
  {
    id: 5,
    name: "Li Wei",
    country: "China",
    testimonial: "Amazing experience, highly recommend! Totally worth every penny!",
    image: "person.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonials">
      <h2>What our clients say about us</h2>
      <div className="testimonials-container">
        <button className="arrow left-arrow" onClick={handlePrev}>
          &lt;
        </button>
        <div className="testimonials-cards">
          {testimonialsData.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${
                index === 1 ? "active" : "inactive"
              }`}
            >
              <img src={testimonial.image} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.country}</p>
              <p>{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
        <button className="arrow right-arrow" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;