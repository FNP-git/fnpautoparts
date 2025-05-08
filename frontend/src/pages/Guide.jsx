import React from 'react';
import GuideCard from '../components/GuideCard';
import './Guide.css'; // Page-specific styling
import { Link } from 'react-router-dom';
import usedEngineImage from '../assets/usedEngineImage.svg';
import usedTransmissionImage from '../assets/usedTransmissionImage.svg';
import useScrollAnimation from '../hooks/useScrollAnimation'; // ✅ Import the scroll hook

const Guide = () => {
  useScrollAnimation(); // ✅ Activate scroll animations

  return (
    <div id="guide-section">
      <h3 className="guide-subtitle fade-up-on-scroll">BUYING GUIDE</h3>
      <h2 className="guide-main-title fade-up-on-scroll">
        Performance You Can Trust — Used, Tested, Reliable.
      </h2>

      <div className="guide-cards-wrapper fade-up-on-scroll">
      <Link to="/engine" style={{ textDecoration: 'none' }}>
        <GuideCard title="USED ENGINES" subtitle="Premium Performance" image={usedEngineImage} /></Link>
        <Link to="/transmission" style={{ textDecoration: 'none' }}>
        <GuideCard
          title="USED TRANSMISSIONS"
          subtitle="Seamless Power Delivery"
          image={usedTransmissionImage}
        /></Link>
      </div>
    </div>
  );
};

export default Guide;
