import React from 'react';
import WorkCard from '../components/WorkCard';
import './Works.css';

import truckLeft from '../assets/truck-left.svg';
import lineCenter from '../assets/line-center.svg';
import houseRight from '../assets/house-right.svg';
import useWorksAnimation from '../hooks/useWorksAnimation'; // custom hook

const Works = () => {
  useWorksAnimation(); // initialize animations

  return (
    <div id="works-section">
      <div className="works-header fade-up-works">
        <h3 className="works-subtitle">HOW IT WORKS?</h3>
        <h2 className="works-main-title">No Hassle. No Guessing. Just 4 Simple Steps.</h2>
      </div>

      <div className="works-cards">
        <div className="slide-left-works" style={{ animationDelay: '0s' }}>
          <WorkCard
            step="1"
            stepDesc="Takes less than 30 sec."
            title="Tell Us What You Need"
            desc="Enter your Year, Make, Model, and Part Type (engine or transmission). Include your VIN for a perfect match."
          />
        </div>
        <div className="slide-left-works" style={{ animationDelay: '0.4s' }}>
          <WorkCard
            step="2"
            stepDesc="Only tested, quality parts — no surprises."
            title="We Find Your Part"
            desc="Our Expert Team checks availability from trusted suppliers across the U.S."
          />
        </div>
        <div className="slide-left-works" style={{ animationDelay: '0.8s' }}>
          <WorkCard
            step="3"
            stepDesc="Quotes are fast, free, and no pressure."
            title="Get Your Quote"
            desc="You'll receive a personalized quote with pricing, mileage, and warranty info. No hidden fees."
          />
        </div>
        <div className="slide-left-works" style={{ animationDelay: '1.2s' }}>
          <WorkCard
            step="4"
            stepDesc="Tracking and support every step of the way."
            title="Fast Delivery to Your Door"
            desc="Once you confirm, we ship your part safely and securely — right to your shop or driveway."
          />
        </div>
      </div>

      <div className="works-footer fade-up-works">
        <h3 className="works-footer-title">Ready to get started?</h3>
        <div className="works-buttons">
        <a href="tel:+18888079696" className="works-btn call" style={{ textDecoration: 'none', color: 'inherit' }}>
  📞 Call Us
</a>
        <button className="works-btn register">Register</button>
        </div>
      </div>

      {/* Bottom Images */}
      <div className="works-bottom-images fade-up-works">
        <img src={truckLeft} alt="Truck with packages" className="truck-left" />
        <img src={lineCenter} alt="Connecting line" className="line-center" />
        <img src={houseRight} alt="House delivery" className="house-right" />
      </div>
    </div>
  );
};

export default Works;
