import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "Who We Are",
      subItems: [
        { name: "Our Teams", link: "/team" },
        { name: "Our Story", link: "/story" },
      ],
    },
    {
      name: "What We Do",
      subItems: [
        { name: "Design", link: "/services/design" },
        { name: "Redesign", link: "/services/redesign" },
        { name: "Development", link: "/services/development" },
        { name: "Website", link: "/services/website" },
        { name: "Ads", link: "/services/ads" },
        { name: "Marketing", link: "/services/marketing" },
      ],
    },
    {
      name: "Blogs",
      subItems: [
        { name: "Design", link: "/blogs/design" },
        { name: "Development", link: "/blogs/development" },
      ],
    },
    {
      name: "Clients",
      subItems: [
        { name: "Web", link: "/clients/web" },
        { name: "Digital Marketing", link: "/clients/digital-marketing" },
      ],
    },
    {
      name: "Contact",
      subItems: [
        { name: "Email", link: "/contact/email" },
        { name: "Visit Us", link: "/contact/visit" },
      ],
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Logo */}
        <div className="navbar-left">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Center: Navigation Items */}
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          {menuItems.map((item, index) => (
            <li className="nav-item" key={index}>
              {item.subItems ? (
                <div className="dropdown-wrapper">
                  <span className="nav-link">
                    {item.name} <span className="arrow">▼</span>
                  </span>
                  <ul className="dropdown">
                    {item.subItems.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={sub.link}
                          className={`dropdown-link ${
                            location.pathname === sub.link ? "active" : ""
                          }`}
                          onClick={() => setMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  to={item.link}
                  className={`nav-link ${
                    location.pathname === item.link ? "active" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right: Toggle */}
        <div className="navbar-right">
          <div className="menu-toggle" onClick={toggleMenu}>
            ☰
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
