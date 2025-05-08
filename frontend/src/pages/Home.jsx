import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Bbb from '../components/Bbb';
import bbb from '../assets/BBB.png';
import trust from '../assets/Trustpilot.png';
import blucl from '../assets/phn-yellow.svg';
import Form from '../components/Form';
import CardItem from '../components/CardItem';
import delivery from '../assets/delivery.svg';
import payment from '../assets/payment.svg';
import warranty from '../assets/warranty.svg';
import support from '../assets/support.svg';
import Scams from './Scams';
import Services from './Services';
import Works from './Works';
import Guide from './Guide';
import Brands from './Brands';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Associates from './Associates';
import dmca from '../assets/dmca.png';
import CardRowMobile from '../components/CardRowMobile';
import HamburgerMenu from '../components/HamburgerMenu';




const Home = () => {
  return (
    <>
      <Navbar />
      <HamburgerMenu />
      <div id="home">
        <div id="hm-main">
        <div id="hm-left">
          <div id="cert">
            <a
              href="https://www.bbb.org/us/ma/marlborough/profile/used-auto-parts/fnp-autoparts-0021-566062"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img id="bbb1" src={bbb} alt="bbb accredited" />
            </a>
            <a
              href="https://www.trustpilot.com/review/fnpautoparts.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img id="trust" src={trust} alt="Trustpilot" />
            </a>
            <a
              href="https://www.dmca.com/Protection/Status.aspx?ID=2adc4b2f-3d66-4b9b-9cf1-350789652c71&refurl=https://www.fnpautoparts.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img id="dmca" src={dmca} alt="dmca" />
            </a>
          </div>
          <div id="hm-head">
            <h1 className="hm-hd">
              RELIABLE USED <span id="ylw">ENGINES &</span>
            </h1>
            <h1 className="hm-hd">
              <span id="ylw">TRANSMISSIONS</span> FOR EVERY RIDE
            </h1>
          </div>
          <div id="hm-sub">
            <h5 id="hm-sb">Quality-tested second-hand parts delivered with trust.</h5>
          </div>
          <div>
          <a href="tel:+18888079696" style={{ textDecoration: 'none' }}>
  <button id="cl-btn">
    <img id="blucl" src={blucl} alt="call a specialist" />
    TALK TO A SPECIALIST
  </button>
</a>

          </div>
        </div>
        <div id="hm-right">
          <div id="frm">
            <Form />
          </div>
        </div>
        </div>
        <div className="card-row">
          <div id="cplr">
          <div className="card-wrapper">
            <CardItem
              icon={warranty}
              title="90 DAY WARRANTY"
              subtitle="All Of Our Products Are Covered"
            />
          </div>
          <div className="card-wrapper">
            <CardItem icon={support} title="24/7 SUPPORT" subtitle="Call Us:+1-8888079696" />
          </div>
          
          </div>
          <div id="cplr">
          <div className="card-wrapper">
            <CardItem icon={delivery} title="FREE SHIPPING" subtitle="Nation-wide free shipping" />
          </div>
          <div className="card-wrapper no-border">
            <CardItem icon={payment} title="SECURE PAYMENTS" subtitle="We Accept Cards And Zelle" />
          </div>
          </div>
        </div>
      </div>
        <CardRowMobile />
     
      <Scams />
      <Services />
      <Works />
      <Guide />
      <Brands />
      <Testimonials />
      <Blog />
      <Associates />
      <Bbb />
      <Footer />
    </>
  );
};

export default Home;