// TestimonialsCarousel.js
import React, { useState } from "react";
import Testimonial from "../components/testimonials/Testimonial";
import "./TestimonialsCarousel.css"; // We'll add CSS for styling

const TestimonialsCarousel = () => {
    const testimonials = [
      {
        name: 'Saro T',
        quote:
          'YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.',
      },
      {
        name: 'John D',
        quote:
          'I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.',
      },
      {
        name: 'Emily G',
        quote:
          "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
      },
    ];
  
    const [activeIndex, setActiveIndex] = useState(1); // Start with the middle testimonial
  
    const handlePrev = () => {
      setActiveIndex((prevIndex) => {
        const newIndex = prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
        console.log('Previous clicked, newIndex:', newIndex); // Debug log
        return newIndex;
      });
    };
  
    const handleNext = () => {
      setActiveIndex((prevIndex) => {
        const newIndex = prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
        console.log('Next clicked, newIndex:', newIndex); // Debug log
        return newIndex;
      });
    };
  
    return (
      <div className="testimonials-carousel">
        <div className="testimonials-container">
          <button className="arrow left-arrow" onClick={handlePrev} aria-label="Previous Testimonial">
            ←
          </button>
          <div className="testimonials-wrapper">
            <div
              className="testimonials-slider"
              style={{
                transform: `translateX(-${activeIndex * 33.33}%)`,
                transition: 'transform 0.5s ease-in-out',
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-item">
                  <Testimonial
                    name={testimonial.name}
                    quote={testimonial.quote}
                    opacity={
                      index === activeIndex
                        ? 1
                        : index === (activeIndex - 1 + testimonials.length) % testimonials.length ||
                          index === (activeIndex + 1) % testimonials.length
                        ? 0.5
                        : 0
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          <button className="arrow right-arrow" onClick={handleNext} aria-label="Next Testimonial">
            →
          </button>
        </div>
      </div>
    );
  };
  
  export default TestimonialsCarousel;