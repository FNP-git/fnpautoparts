import React from 'react';
import './ConfidenceBadges.css';
import starIcon from '../assets/star.png';
import bbbBadge from '../assets/bbb-badge.png';
import trustpilotBadge from '../assets/trustpilot.png';
import authcert from '../assets/authcert.png';
import dmca from '../assets/dmca.png';
import useWorksAnimation from '../hooks/useWorksAnimation'; // ✅ import

const ConfidenceBadges = () => {
  useWorksAnimation(); // ✅ trigger animation on scroll

  return (
    <section className="conf-section fade-up-works">
      <div id="conf-left" className="fade-up-works">
        <h3 className="high-text">BUY WITH CONFIDENCE</h3>
        <h2 className="badges-heading">Badges We Proudly Present</h2>
        <ul className="badges-lt">
          <li><img src={starIcon} alt="Star" /> BBB Accredited Business</li>
          <li><img src={starIcon} alt="Star" /> Rated Excellent on Trustpilot</li>
          <li><img src={starIcon} alt="Star" /> DMCA Verified</li>
          <li><img src={starIcon} alt="Star" /> Authorize.net Verified</li>
        </ul>
      </div>
      <div id="conf-right" className="slide-left-works">
        <div className="badge-images">
          <div id="flx1">
            <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer"><img id='conf-icon' src={bbbBadge} alt="BBB Badge" /></a>
            <a href="https://www.trustpilot.com" target="_blank" rel="noopener noreferrer"><img id='conf-trust' src={trustpilotBadge} alt="Trustpilot Badge" /></a>
          </div>
          <div id="flx1">
            <a href="https://www.dmca.com" target="_blank" rel="noopener noreferrer"><img id='conf-icon' src={dmca} alt="DMCA Badge" /></a>
            <a href="https://verify.authorize.net" target="_blank" rel="noopener noreferrer"><img id='conf-icon' src={authcert} alt="Authorize.net" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfidenceBadges;
