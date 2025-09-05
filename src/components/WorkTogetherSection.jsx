import React from 'react';
import './WorkTogetherSection.css';

const WorkTogetherSection = () => {
  return (
    <section className="work-together-section">
    <div className="bubbles-container">
  {/* Yellow bubbles */}
  <div className="bubble bubble-yellow" style={{ '--i': 1 }}></div>
  <div className="bubble bubble-yellow" style={{ '--i': 2 }}></div>
  <div className="bubble bubble-yellow" style={{ '--i': 3 }}></div>

  {/* Pink bubbles */}
  <div className="bubble bubble-pink" style={{ '--i': 4 }}></div>
  <div className="bubble bubble-pink" style={{ '--i': 5 }}></div>

  {/* Dark bubbles */}
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
  );
};

export default WorkTogetherSection;
