import React from 'react';
import ServiceCard from '../components/ServiceCard';
import './Services.css'; // Page specific styling

import usedEngineIcon from '../assets/used-engine.svg';
import usedTransmissionIcon from '../assets/used-transmission.svg';
import deliveryIcon from '../assets/nationwide-delivery.svg';
import warrantyIcon from '../assets/warranty-coverage.svg';
import vinIcon from '../assets/vin-compatibility.svg';
import supportIcon from '../assets/expert-support.svg';
import womanImage from '../assets/woman-holding-box.svg';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Services = () => {
  useScrollAnimation();

  return (
    <div id="services-section">
      {/* Animate the header */}
      <div className="fade-up-on-scroll services-header">
        <h3 className="services-subtitle">OUR SERVICES</h3>
        <h2 className="services-main-title">Quality Parts. Trusted Process. Nationwide Reach.</h2>
        <p className="services-description">
          At FNP Autoparts, we specialize in providing high-quality, pre-owned car engines and
          transmissions that are tested, inspected, and ready to perform. Whether you're a shop
          owner, mechanic, or car enthusiast, our services are built to save you time, money, and
          stress.
        </p>
      </div>

      <div className="services-content">
        <div className="services-cards">
          {/* Alternating slide animations */}
          <div className="slide-left-on-scroll">
            <ServiceCard
              icon={usedEngineIcon}
              title="Used Engines"
              points={[
                'Fully inspected and compression tested.',
                'Available for most makes and models.',
                'Low-mileage options available.',
              ]}
            />
          </div>
          <div className="slide-right-on-scroll">
            <ServiceCard
              icon={usedTransmissionIcon}
              title="Used Transmissions"
              points={[
                'Fully inspected and compression tested.',
                'Available for most makes and models.',
                'Low-mileage options available.',
              ]}
            />
          </div>
          <div className="slide-left-on-scroll">
            <ServiceCard
              icon={deliveryIcon}
              title="Nationwide Delivery"
              points={[
                'Fully inspected and compression tested.',
                'Available for most makes and models.',
                'Low-mileage options available.',
              ]}
            />
          </div>
          <div className="slide-right-on-scroll">
            <ServiceCard
              icon={warrantyIcon}
              title="Warranty Coverage"
              points={[
                'Fully inspected and compression tested.',
                'Available for most makes and models.',
                'Low-mileage options available.',
              ]}
            />
          </div>
          <div className="slide-left-on-scroll">
            <ServiceCard
              icon={vinIcon}
              title="VIN/Compatibility Help"
              points={[
                'Fully inspected and compression tested.',
                'Available for most makes and models.',
                'Low-mileage options available.',
              ]}
            />
          </div>
          <div className="slide-right-on-scroll">
            <ServiceCard
              icon={supportIcon}
              title="24/7 Hrs Expert Support"
              points={[
                'Fully inspected and compression tested.',
                'Available for most makes and models.',
                'Low-mileage options available.',
              ]}
            />
          </div>
        </div>

        {/* Woman image sliding from left */}
        <div className="slide-left-on-scroll services-image-area">
          <img
            src={womanImage}
            alt="Woman holding a package"
            className="services-woman-image"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
