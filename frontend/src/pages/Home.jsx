import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Bbb from '../components/Bbb';
import NewForm from "../components/NewForm";
import trust from '../assets/Trustpilot.png';
import blucl from '../assets/phn-yellow.svg';
import Form from '../components/Form';
import CardItem from '../components/CardItem';
import delivery from '../assets/delivery.svg';
import payment from '../assets/payment.svg';
import warranty from '../assets/warranty.svg';
import support from '../assets/support.svg';
import Services from './Services';
import Works from './Works';
import Guide from './Guide';
import Brands from './Brands';
import Testimonials from './Testimonials';
import engPallet from "../assets/eng_pallet.webp";
import transPallet from "../assets/trans_pallet.webp";
import Blog from './Blog';
import Associates from './Associates';
import dmca from '../assets/dmca.png';
import CardRowMobile from '../components/CardRowMobile';
import HamburgerMenu from '../components/HamburgerMenu';
import Loader from '../components/Loader';

const Home = ({ loading }) => {
  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <HamburgerMenu />
      <div id="home" className={loading ? 'hidden-content' : ''}>
        <div id="hm-main">
          <div id="hm-left">
            <div id="cert">
              <a href="https://www.bbb.org/us/ma/marlborough/profile/used-auto-parts/fnp-autoparts-0021-566062" target="_blank" rel="noopener noreferrer">
                {/* <img id="bbb1" src={bbb} alt="bbb accredited" /> */}
              </a>
              <a href="https://www.trustpilot.com/review/fnpautoparts.com" target="_blank" rel="noopener noreferrer">
                <img id="trust" src={trust} alt="Trustpilot" />
              </a>
              <a href="https://www.dmca.com/Protection/Status.aspx?ID=2adc4b2f-3d66-4b9b-9cf1-350789652c71&refurl=https://www.fnpautoparts.com/" target="_blank" rel="noopener noreferrer">
                <img id="dmca" src={dmca} alt="dmca" />
              </a>
            </div>
            <div id="hm-head">
              <h1 className="hm-hd">RELIABLE USED <span id="ylw">ENGINES &</span></h1>
              <h1 className="hm-hd"><span id="ylw">TRANSMISSIONS</span> FOR EVERY RIDE</h1>
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
              <NewForm />
            </div>
          </div>
        </div>
        <div className="card-row">
          <div id="cplr">
            <div className="card-wrapper">
              <CardItem icon={warranty} title="90 DAY WARRANTY" subtitle="All Of Our Products Are Covered" />
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
      <div className="offers-container">
          {/* Welcome */}
          <section id="offers-welcome" className="offers-section">
            <h2 className="offers-subhd">
              <span className="offers-accent">Welcome</span> to FNP Auto Parts
            </h2>
            <p className="offers-p">
              FNP Auto Parts, we are more than just a supplier — we are America’s trusted source for quality-tested used engines and transmissions. With access to 1,000+ inventory yards nationwide, we guarantee the exact fit for your vehicle through our free VIN compatibility check. Every part we sell is inspected, tested, and backed by warranty, giving you peace of mind from purchase to installation. We pride ourselves on fast nationwide doorstep delivery, competitive pricing, and exceptional customer support. Over 1,000 satisfied customers have chosen us because we deliver reliability, value, and transparency every single time. Whether you’re a car owner, mechanic, or dealer, FNP Auto Parts is your go-to choice for affordable, dependable used engines and transmissions. Drive farther. Spend smarter. Trust FNP Auto Parts.
            </p>
          </section>
      
          {/* Why we are better */}
          <section id="offers-why" className="offers-section">
            <h2 className="offers-subhd">
              Why we are better suppliers for used engine and transmission from others
            </h2>
      
            <p className="offers-p">
              When it comes to replacing your vehicle engine or transmission, choosing the right supplier makes all the difference between a smooth ride and constant repair headaches. At FNP Auto Parts, we’ve built a reputation as a trusted used engine and transmission supplier with nationwide doorstep delivery and over 1,000 inventory yards at your service. We stand out from competitors like LKQ, Jasper, and others by offering better quality, pricing, warranty, and customer service.
            </p>
      
            {/* 1. Engines (with image) */}
            <article className="offers-block offers-with-media">
              <div className="offers-media">
                <img
                  src={engPallet}
                  alt="Quality-tested used engines shipped safely on pallet"
                  loading="lazy"
                  className="offers-media-img"
                />
                <img
                  src={transPallet}
                  alt="Quality-tested used transmissions shipped safely on pallet"
                  loading="lazy"
                  className="offers-media-img"
                />
              </div>
              <div className="offers-copy">
                <h3 className="offers-mini">1. Wide Selection of Quality-Tested Engines</h3>
                <p className="offers-p">
                  Whether you need a replacement engine for a daily driver, a performance engine for a project car, or a remanufactured engine for reliability, we’ve got you covered. From Ford engines, GM engines, Chevrolet engines, Cummins diesel engines, BMW X5 engines, V6 engines, V8 engines, to specialty options like 2JZ engines or crate engines, we ensure every part meets OEM engine specs before it reaches your door. Our inventory also includes second-hand engines for sale, reconditioned engines, and engine blocks for rebuild projects.
                </p>
                <p className="offers-p">
                  Looking for used engines for cars or specific models like Used Ford Thunderbird Engine, Used Toyota Celica Engine, or Used Jaguar engine for sale? FNP Auto Parts delivers the exact match with a free VIN compatibility check so you get the right fit the first time.
                </p>
              </div>
            </article>
      
            {/* 2. Transmissions (with image, reversed layout) */}
            <article className="offers-block offers-with-media reverse">
             
              <div className="offers-copy">
                <h3 className="offers-mini">2. Comprehensive Transmission Solutions</h3>
                <p className="offers-p">
                  A failing transmission can be costly, but with FNP Auto Parts, you can save big without sacrificing reliability. We stock used transmissions on sale, remanufactured transmissions, and rebuilt transmissions from top brands like Ford transmissions, Chevy transmissions, Dodge transmissions, Allison transmissions, and Aisin transmissions.
                </p>
                <p className="offers-p">
                  Need something specific? We carry everything from manual transmissions to automatic transmissions for trucks, including 48RE remanufactured transmissions, 68RFE transmissions, CVT transmissions, and heavy-duty truck transmissions. We also have rare units like Used Ford Thunderbird Transmission, Used Chevy Truck-Colorado Transmission, and Used Mercury Montego Transmission.
                </p>
                <p className="offers-p">
                  Every automotive transmission we sell is inspected, tested, and backed by a warranty used transmission promise. Plus, our prices often beat other suppliers by a wide margin, without cutting corners on quality.
                </p>
              </div>
            </article>
      
            {/* 3. Why customers choose us */}
            <h3 className="offers-mini">3. Why Customers Choose FNP Auto Parts Over Others</h3>
            <ul className="offers-list offers-list-dark">
              <li>Nationwide Inventory Access – Over 1,000 yards ensure you find the right auto engines for sale or transmissions for sale near me fast.</li>
              <li>Quality &amp; Warranty – We only source OEM engines, reman engines, and reconditioned car engines from trusted yards, all tested before shipping.</li>
              <li>Doorstep Delivery – Whether you need a Used Suzuki Sidekick Engine, a Chevy used engine for sale, or a rebuilt FMX transmission sale, we deliver directly to your mechanic or home.</li>
              <li>Specialty Expertise – From Hemi engines and LS engines to BMW used automatic transmissions and racing transmissions automatic, we have rare, high-performance, and hard-to-find parts ready.</li>
              <li>Customer Satisfaction – Over 10,000+ happy customers trust us for our transparency, fair pricing, and reliable shipping.</li>
            </ul>
      
            {/* 4. Our Promise */}
            <h3 className="offers-mini">4. Our Promise</h3>
            <p className="offers-p">
              Replacing your engine or transmission is a major investment. At FNP Auto Parts, we make it a stress-free process. Whether you’re buying a remanufactured Jasper engine, a Ford remanufactured engine, or a truck transmission rebuild, you can be confident you’re getting the best transmission remanufactured or highest-quality used engine at a fair price.
            </p>
          </section>
        </div>
      <CardRowMobile />
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
