import React from "react";
import "./Offers.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Bbb from "../components/Bbb";
import trust from "../assets/Trustpilot.png";
import bbb from "../assets/BBB.png";
import dmca from "../assets/dmca.png";
import blucl from "../assets/phn-yellow.svg";

import NewForm from "../components/NewForm";
import CardItem from "../components/CardItem";
import delivery from "../assets/delivery.svg";
import payment from "../assets/payment.svg";
import warranty from "../assets/warranty.svg";
import support from "../assets/support.svg";
import CardRowMobile from "../components/CardRowMobile";
import HamburgerMenu from "../components/HamburgerMenu";
import Brands from "./Brands";
import Testimonials from "./Testimonials";

const Offers = () => {
  return (
    <>
      <Navbar />
      <HamburgerMenu />

      {/* ===== HERO (background image) ===== */}
      <div id="offers">
        <div id="offers-main">
          {/* LEFT: NewForm */}
          <div id="offers-left">
            <div id="offers-form-wrap">
              <NewForm />
            </div>
          </div>

          {/* RIGHT: Headline + CTA + bullets + badges */}
          <div id="offers-right">
            <div id="offers-cert">
              <a
                href="https://www.bbb.org/us/ma/marlborough/profile/used-auto-parts/fnp-autoparts-0021-566062"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img id="offers-bbb" src={bbb} alt="BBB Accredited" />
              </a>
              <a
                href="https://www.trustpilot.com/review/fnpautoparts.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img id="offers-trust" src={trust} alt="Trustpilot" />
              </a>
              <a
                href="https://www.dmca.com/Protection/Status.aspx?ID=2adc4b2f-3d66-4b9b-9cf1-350789652c71&refurl=https://www.fnpautoparts.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img id="offers-dmca" src={dmca} alt="DMCA Protected" />
              </a>
            </div>

            <header id="offers-head">
              <h1 className="offers-hd">
                FIND THE <span id="offers-ylw">OEM USED ENGINES</span> &amp; <br /> TRANSMISSIONS ONLINE
              </h1>
            </header>

            <div>
              <a href="tel:+18888079696" style={{ textDecoration: "none" }}>
                <button id="offers-call-btn">
                  <img id="offers-call-icon" src={blucl} alt="call a specialist" />
                  CALL NOW: +18888079696
                </button>
              </a>
            </div>

            <ul id="offers-bullets" className="offers-list">
              <li>Massive inventories across the U.S.A</li>
              <li>Free shipping at doorstep nationwide</li>
              <li>24/7 customer service</li>
              <li>Exclusive warranty on all brand parts</li>
              <li>Tested &amp; guaranteed to fit used parts</li>
            </ul>

            <div id="offers-badges">
  <div className="offers-badge offers-badge--gold">
    <span className="offers-badge-top">Satisfied</span>
    <span className="offers-badge-mid">100%</span>
    <span className="offers-badge-bot">Customers</span>
  </div>
  <div className="offers-badge offers-badge--dark">
    <span className="offers-badge-top">Money Back</span>
    <span className="offers-badge-mid">100%</span>
    <span className="offers-badge-bot">Guarantee</span>
  </div>
</div>

          </div>
        </div>

        {/* CARD ROW (kept same style) */}
        <div id="offers-card-row">
          <div className="offers-cplr">
            <div className="offers-card-wrapper">
              <CardItem icon={warranty} title="90 DAY WARRANTY" subtitle="All Of Our Products Are Covered" />
            </div>
            <div className="offers-card-wrapper">
              <CardItem icon={support} title="24/7 SUPPORT" subtitle="Call Us:+1-8888079696" />
            </div>
          </div>
          <div className="offers-cplr">
            <div className="offers-card-wrapper">
              <CardItem icon={delivery} title="FREE SHIPPING" subtitle="Nation-wide free shipping" />
            </div>
            <div className="offers-card-wrapper no-border">
              <CardItem icon={payment} title="SECURE PAYMENTS" subtitle="We Accept Cards And Zelle" />
            </div>
          </div>
        </div>
      </div>
      {/* ===== END HERO ===== */}

      {/* ===== CONTENT ON WHITE BACKGROUND (after card row) ===== */}
      <section id="offers-content">
        <div className="offers-container">
          <section id="offers-welcome" className="offers-section">
            <h2 className="offers-subhd">
              <span className="offers-accent">Welcome</span> to FNP Auto Parts
            </h2>
            <p className="offers-p">
              FNP Auto Parts, we are more than just a supplier — we are America’s trusted
              source for quality-tested used engines and transmissions. With access to 1,000+
              inventory yards nationwide, we guarantee the exact fit for your vehicle through
              our free VIN compatibility check. Every part we sell is inspected, tested, and
              backed by warranty, giving you peace of mind from purchase to installation. We
              pride ourselves on fast nationwide doorstep delivery, competitive pricing, and
              exceptional customer support. Over 1,000 satisfied customers have chosen us
              because we deliver reliability, value, and transparency every single time.
              Whether you’re a car owner, mechanic, or dealer, FNP Auto Parts is your go-to
              choice for affordable, dependable used engines and transmissions. <strong>Drive
              farther. Spend smarter. Trust FNP Auto Parts.</strong>
            </p>
          </section>

          <section id="offers-why" className="offers-section">
            <h2 className="offers-subhd">
              Why we are better suppliers for used engine and transmission from others
            </h2>

            <article className="offers-block">
              <h3 className="offers-mini">1. Wide Selection of Quality-Tested Engines</h3>
              <p className="offers-p">
                Whether you need a replacement engine for a daily driver, a performance engine
                for a project car, or a remanufactured engine for reliability, we’ve got you
                covered. We ensure every part meets OEM specs before it reaches your door and
                verify fitment with a free VIN check.
              </p>
            </article>

            <article className="offers-block">
              <h3 className="offers-mini">2. Comprehensive Transmission Solutions</h3>
              <p className="offers-p">
                Save big without sacrificing reliability. From manual to heavy-duty automatic
                truck transmissions, every unit is inspected, tested, and backed by warranty.
              </p>
            </article>

            <article className="offers-block">
              <h3 className="offers-mini">3. Why Customers Choose FNP Auto Parts Over Others</h3>
              <ul className="offers-list offers-list-dark">
                <li>Nationwide inventory access — 1,000+ yards</li>
                <li>Quality &amp; Warranty — OEM, reman, reconditioned</li>
                <li>Doorstep delivery — to your mechanic or home</li>
                <li>Specialty expertise — Hemi, LS, diesel, performance</li>
                <li>Customer satisfaction — transparent pricing &amp; reliable shipping</li>
              </ul>
            </article>

            <article className="offers-block">
              <h3 className="offers-mini">4. Our Promise</h3>
              <p className="offers-p">
                Replacing an engine or transmission is a major investment. We make it
                stress-free with top quality parts, fair pricing, and dependable service.
              </p>
            </article>
          </section>
        </div>
      </section>
      {/* ===== END WHITE CONTENT ===== */}

      {/* Mobile card row, brands, reviews, BBB, footer */}
      <CardRowMobile />
      <Brands />
      <Testimonials />
      <Bbb />
      <Footer />
    </>
  );
};

export default Offers;
