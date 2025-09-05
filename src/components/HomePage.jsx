import React from 'react';
import './HomePage.css';

const LandingPage = () => {
  return (
    <div className="homepage-container">
      <div className="left-half">
        <div className="bubble-background">
          <span className="bubble" style={{ top: '10%', left: '20%' }}></span>
          <span className="bubble" style={{ top: '50%', left: '10%' }}></span>
          <span className="bubble" style={{ top: '70%', left: '70%' }}></span>
        </div>

        <div className="text-content">
          <h1>
            Build beautiful <br />
            website & Digital <br />
            <span className="highlight">.Marketing</span>
          </h1>
          <p>
            Create live segments and target the right people for messages based on their behaviors.
          </p>
          <button>Get Started</button>
        </div>
      </div>

      <div className="right-half">
        <div className="image-wrapper">
          <img src="/images/window.png" alt="Calendar" className="calendar-bg" />
          <img src="/images/laptop-poses.png" alt="Hero" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
