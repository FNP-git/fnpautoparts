import React from 'react';
import './Footer.css';
import auth from '../assets/authcert.png';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/engine">Engines</Link>
          <Link to="/transmission">Transmission</Link>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blogs/Post</Link>
        </div>

        <div className="footer-section">
          <h4>More</h4>
          <Link to="/warranty">Warranty Terms and conditions</Link>
          <Link to="/return">Return and Cancellation Policy</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>

        <div className="footer-section">
          <h4>Location</h4>
          <p>• Sales Office: 11239 Ventura Blvd, Studio City, CA 91604, USA</p>
          <p>• Sales Office:  287 Grove St, Worcester, MA 01605</p>
        </div>

        <div className="footer-section social">
          <h4>Social Media :</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61572281897388">
              <FaFacebookF />
            </a>
            <a href="https://x.com/FNPautoparts">
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/company/106935016/admin/dashboard/">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/fnpauto/">
              <FaInstagram />
            </a>
          </div>
          <div id="authcert">
            <a
              href="https://verify.authorize.net/anetseal/?pid=a3a5c06e-7d73-4d8e-bc10-689e99e27bf0&rurl=https://www.fnpautoparts.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img id="authc" loading="lazy" src={auth} alt="Authorize.net certificate" />
            </a>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />
      <div className="footer-bottom">
        <div>
        <p>© 2019 FNP Autoparts. All Rights Reserved.</p>
        </div>
        <div>
          <p>FNP Autoparts is an enity of Revenue Dealer LLC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
