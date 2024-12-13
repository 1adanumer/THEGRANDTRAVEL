// Testimonials.js
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const total = testimonialsData.length;
    const indices = [
      (currentIndex - 1 + total) % total, // Previous
      currentIndex, // Current
      (currentIndex + 1) % total, // Next
    ];
    return indices.map((index) => testimonialsData[index]);
  };

  return (
    <div className="testimonial-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-slider">
        {getVisibleTestimonials().map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-card ${index === 1 ? "active" : "faded"}`}
          >
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p className="country">{testimonial.country}</p>
            <p className="testimonial-text">"{testimonial.testimonial}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
