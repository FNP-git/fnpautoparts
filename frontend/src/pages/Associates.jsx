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
      {/* <div className="assoc-group">
        <h3 className="assoc-title">Business Associates</h3>
        <div className="assoc-row">
          <img loading="lazy" src={wexpress} alt="Worldwide Express" />
          <img loading="lazy" src={apo} alt="Auto Part Ocean" />
          <img loading="lazy" src={avenue} alt="Avenue Supermarts" />
        </div>
      </div> */}

      {/* <div className="assoc-group">
        <h3 className="assoc-title">Payment Partners</h3>
        <div className="assoc-row">
          <img loading="lazy" src={auth} alt="Authorize.Net" />
          <img loading="lazy" src={seamless} alt="SeamlessChex" />
        </div>
      </div> */}

      <div className="assoc-group">
        <h3 className="assoc-title">Payment Options</h3>
        <div className="assoc-row">
          <img loading="lazy" src={cashapp} alt="Cash App" />
          <img loading="lazy" src={rocircle} alt="Mastercard" />
          <img loading="lazy" src={unipay} alt="UnionPay" />
          <img loading="lazy" src={dinerclub} alt="Diners Club" />
          <img loading="lazy" src={discover} alt="Discover" />
          <img loading="lazy" src={visa} alt="Visa" />
          <img loading="lazy" src={amex} alt="American Express" />
          <img loading="lazy" src={zelle} alt="Zelle" />
        </div>
      </div>
    </div>
  );
};

export default Associates;
