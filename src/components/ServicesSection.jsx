import React from 'react';
import './ServicesSection.css';
import { FaBullhorn, FaPaintBrush, FaCode, FaGoogle } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="top-text">What We Can Do For You</div>
      <h1 className="main-heading">Services we can help you with</h1>

      <div className="cards-container">
        <div className="service-card">
          <FaCode className="service-icon" />
          <h3>Development</h3>
          <p>
            Web development is the foundation of our digital presence, enabling us to create dynamic, user-friendly, and scalable web applications.
          </p>
        </div>
        <div className="service-card">
          <FaBullhorn className="service-icon" />
          <h3>Digital Marketing</h3>
          <p>
            We leverage SEO, social media, and email campaigns to reach our audience effectively.
          </p>
        </div>
        <div className="service-card">
          <FaPaintBrush className="service-icon" />
          <h3>Design</h3>
          <p>
            Our design approach focuses on clean layouts, intuitive navigation, and responsive interfaces.
          </p>
        </div>
        <div className="service-card">
          <FaGoogle className="service-icon" />
          <h3>Google Ads & SEO</h3>
          <p>
            We integrate Google Ads with SEO strategies to drive targeted traffic and conversions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
