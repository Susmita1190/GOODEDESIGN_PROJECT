// App.js
import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import Email from "./page/Contact/Email";
import VisitUs from "./page/Contact/VisitUs";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from './components/HomePage';
import ServicesSection from './components/ServicesSection';
import SignupSection from './components/SignupSection';
import OurProjects from './components/OurProjects';
import WorkTogether from './components/WorkTogetherSection';
import Footer from './components/Footer';
import Design from './page/Services/Design';
import Redesign from './page/Services/Redesign';
import Development from './page/Services/Development';
import Website from './page/Services/Website';
import Adds from './page/Services/Adds';
import Marketing from './page/Services/Marketing';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const isEmailModal = location.pathname === "/contact/email";
  const isVisitModal = location.pathname === "/contact/visit";

  const handleClose = () => navigate("/");

  return (
    <>
      <Nav />
      <HomePage/>
     <ServicesSection/>
     <SignupSection/>
     <OurProjects/>
     <WorkTogether/>
     <Footer/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/design" element={<Design />} />
        <Route path="/services/redesign" element={<Redesign />} />
        <Route path="/services/development" element={<Development />} />
        <Route path="/services/website" element={<Website />} />
        <Route path="/services/adds" element={<Adds />} />
        <Route path="/services/marketing" element={<Marketing />} />
      </Routes>

      <Modal show={isEmailModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact via Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Email />
        </Modal.Body>
      </Modal>

      <Modal show={isVisitModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Visit Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <VisitUs />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;
