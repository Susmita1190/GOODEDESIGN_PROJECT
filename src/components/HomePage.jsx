import  { useRef, useEffect, useState } from 'react';
import React from 'react';
import { FaBullhorn, FaPaintBrush, FaCode, FaGoogle } from 'react-icons/fa';
import './HomePage.css';


const COLORS = ['#ff4fcf', '#ffd93d', '#4a4af4', '#00d1b2', '#f45b69', '#845ec2'];

const HomePage = () => {
   const sectionRef = useRef(null);
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  const targetValues = [10, 650, 360, 64]; // Final counter numbers

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const animateCounters = () => {
    targetValues.forEach((target, i) => {
      let current = 0;
      const step = Math.ceil(target / 50); // Speed of increment
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setCounters((prev) => {
          const updated = [...prev];
          updated[i] = current;
          return updated;
        });
      }, 30);
    });
  };

  return (
    <>
      <section className="landing-section">
        {/* Top-left half-circle background */}
        <div className="top-left-circle" />

        {/* Animated floating bubbles */}
        <div className="bubble-background">
          {Array.from({ length: 18 }).map((_, index) => {
            const size = Math.random() * 100 + 50;
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const delay = Math.random() * 10;
            const duration = Math.random() * 20 + 15;
            const color = COLORS[Math.floor(Math.random() * COLORS.length)];

            return (
              <span
                key={index}
                className="bubble"
                style={{
                  top: `${top}%`,
                  left: `${left}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: color,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  opacity: 0.1,
                }}
              />
            );
          })}
        </div>

        {/* Left Side */}
        {/* Left Side */}
<div className="left-half">
  <div className="text-content">
    <h1>
      Build beautiful <br />
      website & Digital <br />
      <span className="highlight">.Marketing</span>
    </h1>
    <p>
      Create live segments and target the right people for messages based
      on their behaviors.
    </p>
    <button>Get Started</button>
  </div>
</div>

{/* Right Side */}
<div className="right-half">
  <div className="image-stack">
    <img
      src="/images/window.png"
      alt="Window"
      className="background-window"
    />
    <img
      src="/images/laptop-poses.png"
      alt="Laptop Pose"
      className="overlay-laptop"
    />
  </div>
</div>

</section>
<section className="services-section dark-theme-section">
  {/* Wave Image at the Top */}
  <div className="wave-container">
    <img src="/images/line-1.png" alt="Wave" className="wave-image" />
  </div>

  {/* Content */}
  <div className="services-content">
    <div className="text-left">
      <div className="top-text">What We Can Do For You</div>
      <h1 className="main-heading">Services we can help you with</h1>
    </div>

    <div className="cards-container">
      <div className="service-card">
        <FaCode className="service-icon" />
        <h3>Development</h3>
        <p>Web development is the foundation of our digital presence.</p>
      </div>
      <div className="service-card">
        <FaBullhorn className="service-icon" />
        <h3>Digital Marketing</h3>
        <p>We leverage SEO, social media, and email campaigns to reach our audience effectively.</p>
      </div>
      <div className="service-card">
        <FaPaintBrush className="service-icon" />
        <h3>Design</h3>
        <p>Our design approach focuses on clean layouts and responsive interfaces.</p>
      </div>
      <div className="service-card">
        <FaGoogle className="service-icon" />
        <h3>Google Ads & SEO</h3>
        <p>We integrate Google Ads with SEO strategies to drive traffic and conversions.</p>
      </div>
    </div>
  </div>
</section>
<section className="about-contact-section">
  {/* Wave Image */}
  <div className="wave-container">
    <img src="/images/line-2.png" alt="Wave" className="wave-image" />
  </div>

  {/* Static Bubbles */}
  <div className="bubble-background">
    {Array.from({ length: 10 }).map((_, index) => {
      const size = Math.random() * 80 + 40;
      const top = Math.random() * 90;
      const left = Math.random() * 100;
      const colors = ['#4a4af4', '#ff4fcf', '#00d1b2', '#f45b69'];
      const color = colors[Math.floor(Math.random() * colors.length)];

      return (
        <span
          key={index}
          className="bubble"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
            opacity: 0.1,
          }}
        />
      );
    })}
  </div>

  {/* Content */}
  <div className="about-contact-content">
    <div className="left-side">
      <h2>About Us</h2>
      <h3>We Do Design Code & Develop</h3>
      <p>
        We specialize in creating stunning digital experiences. From innovative design to seamless development, our team delivers solutions that elevate your brand.
      </p>
    </div>

    <div className="right-side">
      <h3>Get a Free Quote</h3>
      <form className="quote-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="tel" name="phone" placeholder="Phone Number" required />
        <button type="submit">Get Free Quote</button>
      </form>
    </div>
  </div>
</section>
<section className="services-gallery">

  {/* Centered title with overlapping side bubbles */}
  <div className="services-title-with-bubbles overlapping">
    <div className="bubble bubble-yellow"></div>
    <h2 className="services-gallery-title">Our Services</h2>
    <div className="bubble bubble-purple"></div>
  </div>

  {/* Services Grid */}
  <div className="services-gallery-grid">
    {[
      { id: 1, image: '/images/webapp.png', title: 'Website Development' },
      { id: 2, image: '/images/dagency.png', title: 'Digital Agency' },
      { id: 3, image: '/images/ecomerwev.png', title: 'E-Commerce Website' },
      { id: 4, image: '/images/creative.png', title: 'Creative Agency' },
      { id: 5, image: '/images/digitalmarket.png', title: 'Social Marketing' },
      { id: 6, image: '/images/word.png', title: 'WordPress' },
    ].map((service) => (
      <div className="service-gallery-card" key={service.id}>
        <div className="image-zoom-wrapper">
          <img src={service.image} alt={service.title} />
        </div>
        <h4>{service.title}</h4>
      </div>
    ))}
  </div>
</section>
<section className="stats-section" ref={sectionRef}>
        <div className="stats-header">
          <p className="stats-tag">Featured Case Study</p>
          <h2 className="stats-title">Design startup movement</h2>
          <p className="stats-subtitle">
            In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi ac tellus.
          </p>
        </div>

        <div className="stats-cards">
          <div className="stat">
            <div className="stat-icon"><img src="/images/icon/icon-7.png" alt="Smile" /></div>
            <h3 className="stat-number">{counters[0]}+</h3>
            <p>Years of operation</p>
          </div>
          <div className="stat">
            <div className="stat-icon"><img src="/images/icon/icon-8.png" alt="Projects" /></div>
            <h3 className="stat-number">{counters[1]}+</h3>
            <p>Projects delivered</p>
          </div>
          <div className="stat">
            <div className="stat-icon"><img src="/images/icon/icon-9.png" alt="People" /></div>
            <h3 className="stat-number">{counters[2]}+</h3>
            <p>Specialist</p>
          </div>
          <div className="stat">
            <div className="stat-icon"><img src="/images/icon/apple.png" alt="Apple" /></div>
            <h3 className="stat-number">{counters[3]}+</h3>
            <p>Years of operation</p>
          </div>
        </div>

        <div className="stats-images">
          <img src="/images/image1.png" alt="Design 1" />
          <img src="/images/image2.png" alt="Design 2" />
        </div>
      </section>

<section className="work-together-section">
  <div className="bubbles-container">
    <div className="bubble bubble-yellow" style={{ '--i': 1 }}></div>
    <div className="bubble bubble-yellow" style={{ '--i': 2 }}></div>
    <div className="bubble bubble-yellow" style={{ '--i': 3 }}></div>
    <div className="bubble bubble-pink" style={{ '--i': 4 }}></div>
    <div className="bubble bubble-pink" style={{ '--i': 5 }}></div>
    <div className="bubble bubble-dark" style={{ '--i': 6 }}></div>
    <div className="bubble bubble-dark" style={{ '--i': 7 }}></div>
  </div>

  <div className="work-content">
    <p className="subheading">Let's Work Together</p>
    <h1 className="main-heading">Need a successful project?</h1>
  </div>

  <div className="characters-container">
    <img src="/images/laptoppose.png" alt="Laptop Pose" className="character woman" />
    <img src="/images/chat-group.png" alt="Chat Group" className="character chat-group" />
    <img src="/images/bill-pay.png" alt="Bill Pay" className="character man" />
  </div>
</section>
<section className="footer-container">
  <div className="footer-top">
    <h2 className="subscribe-title">Get in Touch</h2>
    <p className="subscribe-description">
      Subscribe to stay updated with our latest news and services.
    </p>
    <form className="subscribe-form">
      <input type="email" placeholder="Enter your email" required />
      <button type="submit">Subscribe</button>
    </form>
  </div>

  <div className="footer-links">
    <div className="footer-column">
      <h4>Support</h4>
      <ul>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Use</a></li>
      </ul>
    </div>

    <div className="footer-column">
      <h4>Services</h4>
      <ul>
        <li><a href="/design">Website Design</a></li>
        <li><a href="/development">Website Development</a></li>
        <li><a href="/marketing">Digital Marketing</a></li>
        <li><a href="/ecommerce">E-Commerce Website</a></li>
        <li><a href="/seo">Google Ads & SEO</a></li>
        <li><a href="/redesign">Website Redesign</a></li>
      </ul>
    </div>

    <div className="footer-column">
      <h4>Company</h4>
      <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/careers">Careers</a></li>
        <li><a href="/partners">Partners</a></li>
      </ul>
    </div>
  </div>
</section>
</>
  );
};

export default HomePage;
