import React from 'react';
import './Design.css'; // Optional: for your custom styles

const Design = () => {
  return (
    <div className="container py-5 service-page">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2 className="mb-4">Website Design</h2>
          <p>
            Our creative team specializes in designing user-friendly, responsive,
            and visually appealing websites. We focus on delivering a seamless
            user experience and ensuring that your brand identity is clearly
            reflected through every detail.
          </p>
          <p>
            Whether you're launching a new product, rebranding, or upgrading an
            existing website, our design solutions are tailored to fit your goals.
            We ensure cross-browser compatibility, fast loading times, and modern
            aesthetics.
          </p>
          <ul className="list-group list-group-flush mt-3">
            <li className="list-group-item">✔️ Responsive Web Design</li>
            <li className="list-group-item">✔️ UX & UI Design</li>
            <li className="list-group-item">✔️ Branding & Visual Identity</li>
            <li className="list-group-item">✔️ Custom Graphics & Icons</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img
            src="/images/background2.png"
            alt="Web Design Illustration"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default Design;
