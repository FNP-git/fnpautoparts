import React from 'react';
import './Footer.css';
import auth from '../assets/authcert.png';

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="#">Engines</a>
          <a href="#">Transmission</a>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Blogs/Post</a>
        </div>

        <div className="footer-section">
          <h4>About FNP</h4>
          <a href="#">Terms and conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Return and Cancellation Policy</a>
          <a href="#">Warranty Policy</a>
          <a href="#">Cookie Policy</a>
        </div>

        <div className="footer-section">
          <h4>Location</h4>
          <p>• Head Office: 11239 Ventura Blvd, Studio City, CA 91604, USA</p>
          <p>• Sales Office: 287 Grove St, Worcester, MA 01605</p>
        </div>

        <div className="footer-section social">
          <h4>Social Media :</h4>
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
          <div id="authcert">
            <a
              href="https://verify.authorize.net/anetseal/?pid=a3a5c06e-7d73-4d8e-bc10-689e99e27bf0&rurl=https://www.fnpautoparts.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img id="authc" src={auth} alt="Authorize.net certificate" />
            </a>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© 2019 FNP Autoparts. All Rights Reserved.</p>
        <p>Managed by: FNP GLobal</p>
      </div>
    </footer>
  );
};

export default Footer;
