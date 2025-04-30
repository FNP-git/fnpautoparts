import React from 'react';
import './Home.css';
import bbb from '../assets/bbb.png';
import trust from '../assets/trustpilot.png';
import blucl from '../assets/blucall.svg';
import Form from '../components/Form';
import CardItem from '../components/CardItem';
import delivery from '../assets/delivery.svg';
import payment from '../assets/payment.svg';
import warranty from '../assets/warranty.svg';
import support from '../assets/support.svg';
import Scams from './Scams'
import Services from './Services'
import Works from './Works'
import Guide from './Guide'
import Brands from './Brands'
import Testimonials from './Testimonials'
import Blog from './Blog'
import Associates from './Associates'
import AuthorizeSeal from '../components/AuthorizeSeal'

const Home = () => {
  return (
    <>
      <div id="home">
        <div id="hm-left">
          <div id="cert">
            <img id='bbb' src={bbb} alt="bbb accredited" />
            <img id='trust' src={trust} alt="trustpilot" />
            <AuthorizeSeal />
          </div>
          <div id="hm-head">
            <h1 className='hm-hd'>RELIABLE USED <span id='ylw'>ENGINES &</span></h1>
            <h1 className='hm-hd'><span id='ylw'>TRANSMISSIONS</span> FOR EVERY RIDE</h1>
          </div>
          <div id="hm-sub">
            <h5 id='hm-sb'>Quality-tested second-hand parts delivered with trust.</h5>
          </div>
          <div>
            <button id="cl-btn">
              <img id='blucl' src={blucl} alt="call a specialist" />
              TALK TO A SPECIALIST
            </button>
          </div>
        </div>
        <div id="hm-right">
          <div id="frm">
            <Form />
          </div>
        </div>

        <div className="card-row">
  <div className="card-wrapper">
    <CardItem icon={delivery} title="FREE SHIPPING" subtitle="Nation-wide free shipping" />
  </div>
  <div className="card-wrapper">
    <CardItem icon={payment} title="SECURE PAYMENTS" subtitle="We Accept Cards And Zelle" />
  </div>
  <div className="card-wrapper">
    <CardItem icon={warranty} title="90 DAY WARRANTY" subtitle="All Of Our Products Are Covered" />
  </div>
  <div className="card-wrapper no-border">
    <CardItem icon={support} title="24/7 HOURS SUPPORT" subtitle="Call Us :+1-8888079696" />
  </div>
</div>

      </div>
      <Scams/>
      <Services/>
      <Works/>
      <Guide/>
      <Brands/>
      <Testimonials/>
      <Blog/>
      <Associates/>
    </>
  );
};

export default Home;
