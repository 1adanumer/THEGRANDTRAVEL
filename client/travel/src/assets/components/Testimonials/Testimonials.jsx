import React from "react";
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
  {
    id: 6,
    name: "Adan",
    country: "Pakistan",
    testimonial: "Extremely great experinece, surely book a second trip",
    image: "person.jpg",
  },
    {
      id: 7,
      name: "Amina Khan",
      country: "India",
      testimonial: "Wonderful experience, the best trip ever!",
      image: "person.jpg",
    },
    {
      id: 8,
      name: "Oliver Brown",
      country: "Australia",
      testimonial: "Top-notch service and amazing destinations!",
      image: "person.jpg",
    },
    {
      id: 9,
      name: "Sofia Rossi",
      country: "Italy",
      testimonial: "Loved every moment of the trip, highly recommend!",
      image: "person.jpg",
    },
    {
      id: 10,
      name: "Yuki Tanaka",
      country: "Japan",
      testimonial: "Incredible journey, will definitely travel again!",
      image: "person.jpg",
    }

];

const Testimonials = () => {
  return (
    <div className="testimonial-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-slider">
        <div className="testimonial-track">
          {testimonialsData.concat(testimonialsData).map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p className="country">{testimonial.country}</p>
              <p className="testimonial-text">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;