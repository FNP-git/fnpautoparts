import React from 'react';
import './Scams.css';
import ScamCard from '../components/ScamCard';

import scamCross from '../assets/cross.png';
import scamTick from '../assets/tick.png';
import leftImg from '../assets/scam-left.svg';
import rightImg from '../assets/scam-right.svg';
import useScrollAnimation from '../hooks/useScrollAnimation'; // Custom hook

const Scams = () => {
  useScrollAnimation(); // 🛠 Activates scroll animation when elements enter viewport

  const redFlags = [
    "Fake websites with no real contact info.",
    "Unrealistically cheap prices with no warranty.",
    "Payments via CashApp / Zelle only.",
    "No shipping updates or proof of delivery.",
    "No physical address or Google presence.",
    "Generic support email addresses."
  ];

  const trustedBenefits = [
    "BBB Accredited and A+ Rated.",
    "Every part backed by a warranty.",
    "Real customer reviews with photos.",
    "Verified business address and live support.",
    "Secure payments with tracking.",
    "Phone support by real auto experts 24/7."
  ];

  return (
    <div id="scm">
      <div id="top-part" className="animate-on-scroll">
        <h3 className="scam-warning">BEWARE OF AUTO PARTS SCAMS</h3>
        <h2 className="scam-main-heading">“Don’t Get Scammed. Here’s What To Watch Out For — And How FNP Protects You.”</h2>
        <p className="scam-description">
          The auto parts industry has seen a rise in fraudulent sellers offering <span className="highlight">“too good to be true”</span> deals on used engines and transmissions.
          These scammers often disappear after taking your money — with no parts ever shipped.
        </p>
      </div>

      <div className="scam-page">
        <div className="scam-box animate-on-scroll">
          <img src={rightImg} alt="scam alert" className="scam-side-img1" />
          <ScamCard icon={scamCross} title="Red Flags to Watch For" points={redFlags} />
        </div>

        <div className="scam-box animate-on-scroll">
          <ScamCard icon={scamTick} title="Why You Can Trust FNP Autoparts?" points={trustedBenefits} />
          <img src={leftImg} alt="verified trust" className="scam-side-img2" />
        </div>
      </div>

      <div className="scam-footer animate-on-scroll">
        <p>
          <strong>“Have questions or think you’ve seen a scam? Call us at </strong>
          <span className="scam-highlight-phone">📞 1-888-807-9696</span>
          <strong> — we’ll help you avoid it.”</strong>
        </p>
      </div>
    </div>
  );
};

export default Scams;
