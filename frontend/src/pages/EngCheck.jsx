import React from 'react';
import './EngCheck.css';
import arrowIcon from '../assets/arrow-down.svg';
import ConfidenceBadges from '../components/ConfidenceBadges';
import useWorksAnimation from '../hooks/useWorksAnimation';

import starIcon from '../assets/star.png';
import bbbBadge from '../assets/bbb-badge.png';
import trustpilotBadge from '../assets/Trustpilot.png';
import engineCheckImage from '../assets/engine-check.jpeg';
import car1 from '../assets/car-front.svg';
import car2 from '../assets/car-side.svg';
import oilLeak from '../assets/oil-leak.png';
import mileage from '../assets/mileage.png';
import compression from '../assets/compression.png';
import warranty from '../assets/warranty.png';
import seller from '../assets/seller.png';
import authcert from '../assets/authcert.png';
import dmca from '../assets/dmca.png';
import engbg2 from '../assets/engbg2.png';

const checklistItems = [
  {
    title: 'Oil Leaks or External Damage',
    icon: oilLeak,
    what: 'Look for any visible oil stains, dents, or cracks on the engine block and seals.',
    how: 'After receiving the engine, inspect around the valve cover gasket, oil pan, and head gasket area. Use a flashlight to spot any hidden leaks or damage.',
  },
  {
    title: 'Engine Mileage',
    icon: mileage,
    what: "While mileage isn't visible physically, it can affect wear.",
    how: 'Check the documentation or tag on the engine after delivery for the stated mileage. Verify that it matches the invoice or shipping documents.',
  },
  {
    title: 'Service & Maintenance Condition',
    icon: starIcon,
    what: 'See if the engine looks clean and maintained.',
    how: 'Once delivered, inspect for signs of recent servicing — clean oil, intact belts, new filters, or any stickers indicating past service dates.',
  },
  {
    title: 'Compression Test Results',
    icon: compression,
    what: 'Make sure all cylinders are performing within the expected range.',
    how: 'After installation, have a mechanic run a compression test to ensure internal health. This helps validate performance before use.',
  },
  {
    title: 'Warranty Eligibility',
    icon: warranty,
    what: 'Confirm your warranty is still valid and untouched.',
    how: 'Review warranty stickers or seals on the engine once it’s delivered. Take photos before installation and follow any specific guidelines to retain coverage.',
  },
  {
    title: 'Seller Verification & Legitimacy',
    icon: seller,
    what: 'Ensure everything you received matches what was promised.',
    how: 'After delivery, compare the engine’s tag/model/serial number with the invoice. If something doesn’t match, contact customer support immediately.',
  },
];

const faqList = [
  {
    q: 'Q1: How do I know if the engine fits my car?',
    a: `We provide full compatibility checks using your VIN (Vehicle Identification Number) and engine code. Once your order is placed, you'll receive instructions to verify the compatibility after delivery, so you can match engine stamps and connections before installation.`,
  },
  {
    q: "Q2: What if the engine doesn't perform as expected?",
    a: `All engines are tested for quality before shipping. If performance issues occur, our support team will guide through diagnostics. In many cases, it's due to installation or sensor mismatches, which we help you resolve after delivery.`,
  },
  {
    q: 'Q3: Are returns accepted?',
    a: `Yes, We offer a return window(usually 30 days), provided the engine is not installed or altered. You can inspect the engine after delivery and reach out if it doesn't match expectations or compatibility.`,
  },
  {
    q: 'Q4: Do you offer installation support?',
    a: `While we don't do the installation directly, we provide guides and compatibility checks post-delivery. We also help connect you to verified local mechanics if needed. Always consult a professional before installation.`,
  },
  {
    q: 'Q5: Can I trust a used engine to last?',
    a: `Absolutely. All our used engines are inspected, compression-tested and graded for performance. We only sell units with low mileage and solid maintenance history, giving you reliability at a fraction of the cost of new engines.`,
  },
];

const EngCheck = () => {
  useWorksAnimation(); // ✅ Activate scroll animations

  return (
    <div className="eng-check-container">
      <ConfidenceBadges />

      <section className="engine-check-image fade-up-works" style={{ backgroundImage: `url(${engineCheckImage})` }}>
        <div className="overlay">
          <h1>WHAT TO CHECK IN AN ENGINE</h1>
        </div>
      </section>

      <section className="checklist-section">
        {checklistItems.map((item, idx) => (
          <div className="check-item slide-left-works" style={{ animationDelay: `${idx * 0.2}s` }} key={idx}>
            <img src={item.icon} alt={`${item.title} Icon`} className="check-icon" />
            <div>
              <h4>{item.title}</h4>
              <ul className="check-points">
                <li><strong>What to Check:</strong> {item.what}</li>
                <li><strong>How to Check:</strong> {item.how}</li>
              </ul>
              <hr id="hrt" />
            </div>
          </div>
        ))}
      </section>

      <div id="vin">
        <h3 className="hgh-txt">ENGINE CODE AND COMPATIBILITY</h3>
        <h2 className="badges-head">
          Understand Your Vehicle Better And Choose The Engine That Perfectly Matches Your Make And Model
        </h2>
        <h3 id="vinh">1. How to Locate Your VIN:</h3>
        <div id="car">
          <img id="carf" src={car1} alt="" />
          <img id="carf" src={car2} alt="" />
        </div>
        <img id="engbg2" src={engbg2} alt="" />
        <div id="vin2">
          <h3 id="vinh">
            2. How to Locate Your Engine Number:
            <span id="vnn">
              Engine codes are alphanumeric identifiers found on the engine block or paperwork. Each
              code corresponds to a specific engine variant.
            </span>
          </h3>
          <h3 id="vinh">
            3. Matching Engines with Vehicle Models:
            <span id="vnn">
              Use your VIN or engine code to confirm compatibility with specific years, trims, and makes.
              You can do this easily post-delivery by verifying labels and physical stamps.
            </span>
          </h3>
        </div>
        <h3 id="srcal">
          Still Not Sure? Give us a call at <a href="tel:+18888079696" style={{ textDecoration: 'underline', color: '#000' }}>1-888-807-9696</a> Our Team Will Assist You If Anything
          Doesn't Match. <br />
          Or
        </h3>
        <div id="cldv" className="fade-up-works">
          <a href="tel:+18888079696" style={{ textDecoration: 'none' }}>
            <button id="clbtn">Book a Call</button>
          </a>
        </div>

        <div id="choose-us" className="fade-up-works">
          <h3 className="engine-highlight-text">WHY CHOOSE US FOR YOUR ENGINE NEEDS</h3>
          <div id="points">
            <h3 id="vinh2">
              Quality Assurance -{' '}
              <span id="vn">All our used engines are thoroughly inspected and tested for performance, ensuring you get a reliable product</span>
            </h3>
            <h3 id="vinh2">
              Competitive Pricing -{' '}
              <span id="vn">Get the best value for your money with affordable prices on used engines for all car brands.</span>
            </h3>
            <h3 id="vinh2">
              Wide Selection -{' '}
              <span id="vn">We offer a vast range of used engines for nearly every make and model, so you can find exactly what you need.</span>
            </h3>
            <h3 id="vinh2">
              Fast Shipping -{' '}
              <span id="vn">Get your used engine delivered quickly and efficiently to get your car back on the road faster.</span>
            </h3>
            <h3 id="vinh2">
              Warranty Coverage -{' '}
              <span id="vn">We offer warranties on our used engines, giving you peace of mind with your purchase.</span>
            </h3>
          </div>
        </div>

        <section className="faq-section fade-up-works">
          {faqList.map((item, idx) => (
            <div className="faq-item slide-left-works" style={{ animationDelay: `${idx * 0.2}s` }} key={idx}
              onClick={() => {
                const content = document.getElementById(`faq-content-${idx}`);
                const arrow = document.getElementById(`faq-arrow-${idx}`);
                content.classList.toggle('open');
                arrow.classList.toggle('rotated');
              }}
            >
              <div className="faq-question">
                <span>{item.q}</span>
                <img src={arrowIcon} alt="Toggle" className="arrow" id={`faq-arrow-${idx}`} />
              </div>
              <div className="faq-answer" id={`faq-content-${idx}`}>
                {item.a}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default EngCheck;
