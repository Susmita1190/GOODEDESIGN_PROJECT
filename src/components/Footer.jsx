import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      
      {/* Subscribe Section */}
      <div className="footer-subscribe">
        <h2 className="subscribe-title">Get in touch</h2>
        <p className="subscribe-description">
          Subscribe to stay updated with our latest news and services.
        </p>
        <form className="subscribe-form">
          <input type="email" placeholder="Email address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      {/* Footer Sections in a row */}
      <div className="footer-sections-row">
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Use</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="/design">Website Design</a></li>
            <li><a href="/development"> Website Development</a></li>
            <li><a href="/marketing">Digital Marketing</a></li>
            <li><a href="/E-Commerce">E-Commerce Website Development</a></li>
            <li><a href="/Google Search">Google adds & SEO</a></li>
            <li><a href="/Redesign">Wevsite Redesign</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/partners">Partners</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
