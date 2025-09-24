import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import Email from "./page/Contact/Email";
import VisitUs from "./page/Contact/VisitUs";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from './components/HomePage';

import Design from "./page/Services/Design";
import Development from "./page/Services/Development";
import Redesign from "./page/Services/Redesign";
import Marketing from "./page/Services/Marketing";
import Ads from "./page/Services/Ads";
import Website from "./page/Services/Website";

import OurStory from "./page/OurStory";
import OurTeam from "./page/OurTeams";
import OurClients from "./page/Clients/OurClients";
import Testimonials from "./page/Clients/Testimonials";
import Insights from "./page/Blogs/Insights";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const isEmailModal = location.pathname === "/contact/email";
  const isVisitModal = location.pathname === "/contact/visit";

  const handleClose = () => navigate("/");

  return (
    <>
      
      <Nav />

      {isHome && (
        <>
          <HomePage />
         
        </>
      )}

      <Routes>
        <Route path="/services/design" element={<Design />} />
        <Route path="/services/redesign" element={<Redesign />} />
        <Route path="/services/development" element={<Development />} />
        <Route path="/services/website" element={<Website />} />
        <Route path="/services/ads" element={<Ads />} />
        <Route path="/services/marketing" element={<Marketing />} />
        <Route path="/team" element={<OurTeam/>} />
        <Route path="/story" element={<OurStory/>} />
        <Route path="/clients/ourclients" element={<OurClients/>} />
        <Route path="/clients/testimonials" element={<Testimonials/>} />
        <Route path="/blogs/insights" element={<Insights/>}/>
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
