import React from 'react';
import './Navbar.css';
import logo from '../assets/hdr_logo.svg';
import phn_y from '../assets/phn-yellow.svg';

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div id="lgo">
          <img src={logo} alt="fnp autopart logo" />
        </div>
        <div id="menu">
          <h3 className="mnu">HOME</h3>
          <h3 className="mnu">SHOP ENGINE</h3>
          <h3 className="mnu">SHOP TRANSMISSION</h3>
          <h3 className="mnu">BLOG POSTS</h3>
          <h3 className="mnu">ABOUT US</h3>
          <h3 className="mnu">CONTACT US</h3>
        </div>
        <div id="call-btn">
          <a href="tel:+18888079696" style={{ textDecoration: 'none' }}>
            <button id="nav-btn">
              <img id="phn" src={phn_y} alt="call icon" />
              +1-888-807-9696
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
