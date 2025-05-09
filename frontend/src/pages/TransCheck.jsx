import React from 'react';
import './TransCheck.css';
import Ttype from '../assets/ttype.png';
import starIcon from '../assets/star.png';
import bbbBadge from '../assets/bbb-badge.png';
import trustpilotBadge from '../assets/Trustpilot.png';
import transCheckImage from '../assets/transchk.png';
import authcert from '../assets/authcert.png';
import dmca from '../assets/dmca.png';
import mileage from '../assets/mileage.png';
import vinno from '../assets/vinno.png';
import wd from '../assets/wd.png';
import vyeng from '../assets/vyeng.png';
import tcode from '../assets/tcode.png';
import Transmission from '../assets/transmission.png';
import note from '../assets/note.png';
import arrowIcon from '../assets/arrow-down.svg';
import ConfidenceBadges from '../components/ConfidenceBadges';




import warranty from '../assets/warranty.png';


const checklistItems = [
  {
    title: 'Transmission Type (Automatic vs. Manual)',
    icon: Ttype,
    points: [
      'Know whether your vehicle uses an automatic or manual transmission.',
      'CVT or dual-clutch transmissions may also apply to modern vehicles.',
    ],
  },
  {
    title: 'Vehicle Year, Make, Model & Engine Size',
    icon: vyeng,
    points: [
      'Even minor changes in trims or engine sizes can affect transmission fitment.',
    ],
  },
  {
    title: 'Transmission Code / Tag',
    icon: tcode,
    points: [
      'Found on a sticker or metal plate on the transmission.',
      'Helps match the correct internal components and ratios.',
    ],
  },
  {
    title: '2WD or 4WD?',
    icon: wd,
    points: [
      'Transmissions are designed specifically for two-wheel or four-wheel drive systems.',
    ],
  },
  {
    title: 'VIN Number (Recommended)',
    icon: vinno,
    points: [
      'Sharing your VIN ensures 100% compatibility when ordering.',
    ],
  },
  {
    title: 'Mileage & Condition',
    icon: mileage,
    points: [
      'Ask for the mileage and condition of the used transmission.',
    ],
  },
  {
    title: 'Warranty Terms',
    icon: warranty,
    points: [
      'Always check return policies and warranty coverage.',
      'FNP offers standard warranties and optional extensions.',
    ],
  },
];

const TransCheck = () => {
  return (
    <div className="trans-check-container">
      <ConfidenceBadges/>

      <section className="transmission-check-image" style={{ backgroundImage: `url(${transCheckImage})` }}>
        <div className="overlay">
          <h1>WHAT TO CHECK AFTER BUYING A TRANSMISSION</h1>
        </div>
      </section>

      <section className="checklist-section">
        {checklistItems.map((item, idx) => (
          <div className="check-item" key={idx}>
            <img src={item.icon} alt={`${item.title} Icon`} className="check-icon" />
            <div>
              <h4>{item.title}</h4>
              <ul className="check-points">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <hr id='hrt' />
            </div>
          </div>
        ))}
      </section>
      <div id="compat">
      <h3 className="highlight-text">TRANSMISSION CODE AND COMPATIBILITY</h3>
      <h2 className="transub-heading">Transmission Compatibility Isn't Just Plug-And-Play. The Transmission Codr Ensures A Perfect Fit</h2>
        <div id='trans-main'>
            <div id="compat-left">
            <img id="trns" src={Transmission} alt="Transmission image" />
            </div>
            <div id="compat-right">
                <div id="pnt">
                    <h1 id='tr-hd'>1. How to Find the Transmission Code:</h1>
                    <ul>
                        <li>On a label or tag attached to the transmission(often stamped on the housing)</li>
                        <li>You can also call your dealership ip with your VIN to ask for the correct code</li>
                    </ul>
                    <h1 id='tr-hd'>2. Why it matters:</h1>
                    <ul>
                        <li>Even between two vehicles of the same model/year, the transmission code can differ due to engine size, drivetrain, or country-specific variations.</li>
                    </ul>
                    <h1 id='bl-hd'> <img id='note' src={note} alt="" />Pro tip:</h1>
                    <ul>
                        <li id='bl'>Just send us your VIN, we decode it and match the correct transmission from our inventory, no guesswork needed</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 id="srcal">
          Still Not Sure? Give us a call at 1-888-807-9696 Our Team Will Assist You If Anything
          Doesn't Match. <br />
          Or
        </h3>
        <div id="cldv">
  <a href="tel:+18888079696" style={{ textDecoration: 'none' }}>
    <button id="clbtn">Book a Call</button>
  </a>
</div>

        <div id="choose-us">
          <h3 className="highlight-text">WHY CHOOSE US FOR YOUR TRANSMISSION NEEDS</h3>
          <div id="points">
            <h3 id="vinh2">
              Quality Assurance -{' '}
              <span id="vn">
                All our used transmissions are thoroughly inspected and tested for performance, ensuring
                you get a reliable product
              </span>
            </h3>
            <h3 id="vinh2">
              Competitive Pricing -{' '}
              <span id="vn">
                 Get the best value for your money with affordable prices on used transmissions for all
                car brands.
              </span>
            </h3>
            <h3 id="vinh2">
              Wide Selection -{' '}
              <span id="vn">
                We offer a vast range of used transmissions for nearly every make and model, so you can
                find exactly what you need.
              </span>
            </h3>
            <h3 id="vinh2">
              Fast Shipping -{' '}
              <span id="vn">
                Get your used transmission delivered quickly and efficiently to get your car back on the
                road faster.
              </span>
            </h3>
            <h3 id="vinh2">
              Warranty Coverage -{' '}
              <span id="vn">
                We offer warranties on our used transmissions, giving you peace of mind with your
                purchase.
              </span>
            </h3>
          </div>
        </div>
      </div>

      <section className="faq-section">
      <h3 className="highlight-text1">FAQ's</h3>
  {[
    {
      q: 'Q1: Can I swap a manual for an automatic (or vice versa)?',
      a: 'Technically yes, but it requires major modifications. We recommend sticking to your vehicle’s original setup.',
    },
    {
      q: 'Q2: What’s included when I buy a used transmission?',
      a: 'Used transmissions come ready for installation and are matched for compatibility with your vehicle’s make and model.',
    },
    {
      q: 'Q3: Do I need to reprogram the transmission?',
      a: 'For modern vehicles, yes. Most automatic transmissions need to be “flashed” or reprogrammed by a technician to match your ECU.',
    },
    {
      q: 'Q4: How long does shipping take?',
      a: 'Usually 3–7 business days depending on your location. Expedited shipping is available.',
    },
    {
      q: 'Q5: How can I make sure I’m buying the right part?',
      a: 'Send us your VIN, and we’ll do the work for you — no worries about mismatches.',
    },
  ].map((item, idx) => (
    <div
      key={idx}
      className="faq-item"
      onClick={() => {
        const content = document.getElementById(`faq-content-${idx}`);
        const arrow = document.getElementById(`faq-arrow-${idx}`);
        content.classList.toggle('open');
        arrow.classList.toggle('rotated');
      }}
    >
      <div className="faq-question">
        <span>{item.q}</span>
        <img
  src={arrowIcon}
  alt="Toggle"
  className="arrow"
  id={`faq-arrow-${idx}`}
/>

      </div>
      <div className="faq-answer" id={`faq-content-${idx}`}>
        {item.a}
      </div>
    </div>
  ))}
</section>

    </div>
  );
};

export default TransCheck;
