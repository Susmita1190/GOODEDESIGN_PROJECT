import React from 'react';
import './SignupSection.css';

const SignupSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-form-container">
        <div className="form-left">
          <h2>Get a free Keystroke, quote now</h2>
          <form
            action="https://formsubmit.co/your-email@example.com" // Replace with your real email
            method="POST"
          >
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" rows="5" required></textarea>
            <button type="submit">SUBMIT</button>

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_subject" value="New Contact Form Submission" />
          </form>
        </div>

        <div className="form-right">
          <h3>We do design, Code & Develop</h3>
          <p>
            From innovative design to seamless development, we provide end-to-end solutions for businesses of all sizes.
            Our team ensures every project is handled with precision, creativity, and the latest tech trends.
          </p>
          <p>
            Or email us directly: <a href="mailto:support@example.com">support@example.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
