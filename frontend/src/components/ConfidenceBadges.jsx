import React from 'react';
import './ConfidenceBadges.css'; // separate CSS file
import starIcon from '../assets/star.png';
import bbbBadge from '../assets/bbb-badge.png';
import trustpilotBadge from '../assets/trustpilot.png';
import authcert from '../assets/authcert.png';
import dmca from '../assets/dmca.png';

const ConfidenceBadges = () => {
  return (
    <section className="confidence-section">
      <div id="conf-left">
        <h3 className="highlight-text">BUY WITH CONFIDENCE</h3>
        <h2 className="badges-heading">Badges We Proudly Present</h2>
        <ul className="badges-list">
          <li><img src={starIcon} alt="Star" /> BBB Accredited Business</li>
          <li><img src={starIcon} alt="Star" /> Rated Excellent on Trustpilot</li>
          <li><img src={starIcon} alt="Star" /> DMCA Verified</li>
          <li><img src={starIcon} alt="Star" /> Authorize.net Verified</li>
        </ul>
      </div>
      <div id="conf-right">
        <div className="badge-images">
          <div id="flx1">
            <a href="https://www.bbb.org" target="_blank" rel="noopener noreferrer"><img src={bbbBadge} alt="BBB Badge" /></a>
            <a href="https://www.trustpilot.com" target="_blank" rel="noopener noreferrer"><img src={trustpilotBadge} alt="Trustpilot Badge" /></a>
          </div>
          <div id="flx1">
            <a href="https://www.dmca.com" target="_blank" rel="noopener noreferrer"><img src={dmca} alt="DMCA Badge" /></a>
            <a href="https://verify.authorize.net" target="_blank" rel="noopener noreferrer"><img src={authcert} alt="Authorize.net" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfidenceBadges;
