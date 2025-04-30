import React from 'react';
import './Engine.css';
import Bbb from '../components/Bbb';
import Footer from '../components/Footer';
import bbb from '../assets/BBB.png';
import trust from '../assets/Trustpilot.png';
import blucl from '../assets/blucall.svg';
import Form from '../components/Form';
import dmca from '../assets/dmca.png';

const Engine = () => {
  return (
    <>
      <div id="engine">
        <div id="engine-left">
          <div id="cert">
            <a href="https://www.bbb.org/us/ma/marlborough/profile/used-auto-parts/fnp-autoparts-0021-566062" target="_blank" rel="noopener noreferrer">
              <img id='bbb1' src={bbb} alt="bbb accredited" />
            </a>
            <a href="https://www.trustpilot.com/review/fnpautoparts.com" target="_blank" rel="noopener noreferrer">
              <img id="trust" src={trust} alt="Trustpilot" />
            </a>
            <a href="https://www.dmca.com/Protection/Status.aspx?ID=2adc4b2f-3d66-4b9b-9cf1-350789652c71&refurl=https://www.fnpautoparts.com/" target="_blank" rel="noopener noreferrer">
              <img id="dmca" src={dmca} alt="dmca" />
            </a>
          </div>
          <div id="engine-head">
            <h1 className='engine-hd'>RELIABLE USED <span id='ylw'>ENGINES &</span></h1>
            <h1 className='engine-hd'><span id='ylw'>TRANSMISSIONS</span> FOR EVERY RIDE</h1>
          </div>
          <div id="engine-sub">
            <h5 id='engine-sb'>Quality-tested second-hand parts delivered with trust.</h5>
          </div>
          <div>
            <button id="engine-btn">
              <img id='blucl' src={blucl} alt="call a specialist" />
              TALK TO A SPECIALIST
            </button>
          </div>
        </div>
        <div id="engine-right">
          <div id="frm">
            <Form />
          </div>
        </div>
      </div>
      <Bbb />
      <Footer />
    </>
  );
};

export default Engine;
