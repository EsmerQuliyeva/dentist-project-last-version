import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  return (
    <div className="nav-general-container">
      <div className="nav-container">
        <div className="logo-container">
          <img src={logo} className="logo" alt="logo" />
          <Link to="/" className="link-logo"> 
            <h2>OralEase</h2>
          </Link>
        </div>
        <nav className={`nav-links-container ${isOpen ? "active" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link selected" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link selected" : "nav-link"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "nav-link selected" : "nav-link"
            }
          >
            Services
          </NavLink>
        </nav>
        <div className="nav-btns">
          <button className="telephone">
            <BsFillTelephoneFill className="telephone-icon" />
            <a href="tel:012 564 47 65" className="footer-link">
                012 564 47 65
              </a>
          </button>
          <button className="book-btn">Book now</button>
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>
    </div>
  );
};

export default Navbar;
