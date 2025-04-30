// Associates.jsx
import React from 'react';
import './Associates.css';

import apo from '../assets/apo.png';
import wexpress from '../assets/wexpress.svg';
import avenue from '../assets/avenue.svg';
import auth from '../assets/auth.svg';
import seamless from '../assets/seamless.svg';
import cashapp from '../assets/cashapp.svg';
import rocircle from '../assets/r-o-circle.svg';
import unipay from '../assets/uni-pay.svg';
import dinerclub from '../assets/dinerclub.svg';
import discover from '../assets/discover.svg';
import visa from '../assets/visa.svg';
import amex from '../assets/amex.svg';
import zelle from '../assets/zelle.svg';

const Associates = () => {
  return (
    <div className="associates-section">
      <div className="assoc-group">
        <h3 className="assoc-title">Business Associates</h3>
        <div className="assoc-row">
          <img src={apo} alt="Auto Part Ocean" />
          <img src={wexpress} alt="Worldwide Express" />
          <img src={avenue} alt="Avenue Supermarts" />
        </div>
      </div>

      <div className="assoc-group">
        <h3 className="assoc-title">Payment Partners</h3>
        <div className="assoc-row">
          <img src={auth} alt="Authorize.Net" />
          <img src={seamless} alt="SeamlessChex" />
        </div>
      </div>

      <div className="assoc-group">
        <h3 className="assoc-title">Payment Options</h3>
        <div className="assoc-row">
          <img src={cashapp} alt="Cash App" />
          <img src={rocircle} alt="Mastercard" />
          <img src={unipay} alt="UnionPay" />
          <img src={dinerclub} alt="Diners Club" />
          <img src={discover} alt="Discover" />
          <img src={visa} alt="Visa" />
          <img src={amex} alt="American Express" />
          <img src={zelle} alt="Zelle" />
        </div>
      </div>
    </div>
  );
};

export default Associates;
