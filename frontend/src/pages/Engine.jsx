import React from 'react';
import './Engine.css';
import Bbb from '../components/Bbb';
import Footer from '../components/Footer';
import blucl from '../assets/blucall.svg';
import NewForm from "../components/NewForm";

import Navbar from '../components/Navbar';
import EngCheck from './EngCheck';
import redarw from '../assets/redarw.svg';
import HamburgerMenu from '../components/HamburgerMenu';
import engbg from '/engbg.webp'; // ✅ Make sure this path is correct

const Engine = () => {
  return (
    <>
      <Navbar />
      <HamburgerMenu />

      <div id="engine" className="engine-container">
        <img
          src={engbg}
          alt="Engine Hero"
          className="engine-bg-img"
          fetchpriority="high"
          decoding="async"
        />
        <div className="engine-overlay" />

        <div id="engine-left">
          <div id="engine-head">
            <h1 className="engine-hd">YOUR COMPLETE GUIDE TO BUYING</h1>
            <h1 className="engine-hd">
              <span id="ylw">USED ENGINES</span>
            </h1>
          </div>
          <div id="engine-sub">
            <h5 id="engine-sb">Compare. Choose. Drive With Confidence.</h5>
          </div>
          <div>
            <button id="engine-btn">
              <img id="blucl" src={blucl} alt="call a specialist" />
              CALL US
            </button>
          </div>
        </div>

        <div id="engine-right">
          <div id="frm">
            <NewForm />
          </div>
        </div>
      </div>

      <Bbb />
      <EngCheck />

      <div id="engine1">
        <div id="engine-left">
          <div id="engine-head">
            <h1 className="engine-hd">
              <span id="ylw">YOU'RE READY TO BOOK YOUR ENGINE!</span>
            </h1>
          </div>
          <div id="engine-sub">
            <h5 id="engine-sb">
              Fill in your details and let us find the perfect engine match - <br />
              delivered to your door, with compatibility guaranteed.
            </h5>
            <h5 id="thr">
              You're almost there <img id="redarw" src={redarw} alt="" />
            </h5>
          </div>
          <div>
            <a href="tel:+18888079696" style={{ textDecoration: 'none' }}>
              <button id="engine-btn">
                <img id="blucl" src={blucl} alt="call a specialist" />
                CALL US
              </button>
            </a>
          </div>
        </div>

        <div id="engine-right">
          <div id="frm">
            <NewForm />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Engine;
