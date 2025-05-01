import React, { useState, useEffect, useRef } from 'react';
import TestimonialCard from '../components/TestimonialCard';
import './Testimonials.css';
import useWorksAnimation from '../hooks/useWorksAnimation';
import person1 from '../assets/john.svg';

const testimonials = [
  {
    text: 'Buying a used engine from FNP Autoparts saved me a fortune. The quality was top-notch and perfectly fitted.',
    name: 'John Doe',
    image: person1,
    rating: 5,
  },
  {
    text: 'Highly impressed by the transmission I bought. Works smooth, no noise, and delivered fast.',
    name: 'Ava Smith',
    image: person1,
    rating: 4,
  },
  {
    text: 'Got a second-hand starter motor. The part was clean, functional, and came with a short warranty. Great deal!',
    name: 'Mohammed Rahim',
    image: person1,
    rating: 5,
  },
  {
    text: 'Found a rare alternator here after weeks of searching. Part was exactly as described and packaged securely.',
    name: 'Sandra Lee',
    image: person1,
    rating: 5,
  },
  {
    text: 'I bought a used radiator from them. Delivered fast, no leaks, and half the price of new ones!',
    name: 'Carlos Mendes',
    image: person1,
    rating: 4,
  },
  {
    text: 'Perfect engine replacement for my SUV. The customer support was very helpful in confirming compatibility.',
    name: 'Priya Kapoor',
    image: person1,
    rating: 5,
  },
  {
    text: 'As a garage owner, I’ve sourced multiple parts from here — never had a complaint from a client yet.',
    name: 'Luke Turner',
    image: person1,
    rating: 5,
  },
  {
    text: 'Ordered a complete transmission assembly. Great condition, clean, and shipped with tracking.',
    name: 'Emily Nguyen',
    image: person1,
    rating: 4,
  },
  {
    text: 'Got a mirror assembly for my car. Fit like OEM and the price was unmatched anywhere online.',
    name: 'Robert Kim',
    image: person1,
    rating: 5,
  },
  {
    text: 'Excellent service and genuine parts. You can actually talk to someone who knows about cars!',
    name: 'Fatima Alvi',
    image: person1,
    rating: 5,
  },
];

const Testimonials = () => {
  useWorksAnimation(); // re-enable global scroll-based animation

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef(null);

  const switchTestimonial = (newIndex) => {
    const el = cardRef.current;
    if (el) {
      el.classList.remove('animate-slide-fade-in');
      void el.offsetWidth;
      el.classList.add('animate-slide-fade-in');
    }
    setCurrentIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    switchTestimonial(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    switchTestimonial(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="testimonials-section fade-up-works">
      <div className="testimonials-left slide-left-works">
        <h4 className="testimonial-subtitle">CUSTOMER TESTIMONIALS</h4>
        <h2 className="testimonial-title">See What Our Customers Say About Us</h2>
        <button className="read-more">Read More →</button>
      </div>

      <div className="testimonials-right fade-up-works">
        <div ref={cardRef} className="testimonial-fade-wrapper animate-slide-fade-in">
          <TestimonialCard testimonial={testimonials[currentIndex]} />
        </div>
        <div className="testimonial-nav">
          <button onClick={handlePrev}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
