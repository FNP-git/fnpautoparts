import React from 'react';
import './Navbar.css';
import logo from '../assets/hdr_logo.svg';
import phn_y from '../assets/phn-yellow.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav">
      <div id="lgo">
        <Link to="/">
          <img src={logo} alt="fnp autopart logo" />
        </Link>
      </div>

      <div id="menu">
        <Link to="/" className="mnu">HOME</Link>
        <Link to="/engine" className="mnu">SHOP ENGINE</Link>
        <Link to="/transmission" className="mnu">SHOP TRANSMISSION</Link>
        <Link to="/blog" className="mnu">BLOG POSTS</Link>
        <Link to="/about" className="mnu">ABOUT US</Link>
        <Link to="/contact" className="mnu">CONTACT US</Link>
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
  );
};

export default Navbar;
