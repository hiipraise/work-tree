// Testimonial.js
import React from 'react';
import './Testimonial.css'; // We'll add some CSS for styling

const Testimonial = ({ name, quote, opacity }) => {
    return (
      <div className="testimonial" style={{ opacity, transition: 'opacity 0.3s ease-in-out' }}>
        <p>"{quote}"</p>
        <p className="name">{name}</p>
      </div>
    );
  };

export default Testimonial;