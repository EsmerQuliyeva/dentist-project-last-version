import React from "react";
import introImg from "../../assets/happy-dentist.jpg";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaTooth } from "react-icons/fa6";
import BackgroundCircleAlternative from "../BackgroundCircleAltenative/BackgroundCircleAlternative";
import "./Interrior.css";
const Interrior = () => {
  return (
    <div>
      <BackgroundCircleAlternative />
      <div className="interrior-dentist-site-description-general">
        <div className="interrior-dentist-site">
          <div className="interrior-dentist-site-description">
            <h1>Transforming Smiles With Expert Dental Care</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              aliquam aperiam, veniam atque nostrum
            </p>
            <div className="interrior-dentist-site-description-btns">
              <button className="book-btn">Book an appointment</button>
              <button className="telephone">Browse Services</button>
            </div>
          </div>
          <div className="interrior-dentist-site-image-part">
            <img
              src={introImg}
              alt="intro-img"
              className="interrior-dentist-site-image"
            />
            <div className="intro-card-container">
              <div className="intro-cards">
                <div className="intro-card">
                  <div className="intro-card-left-part">
                    <FaEnvelope className="intro-card-icon" />
                  </div>
                  <div className="intro-card-right-part">
                    <h2>Contact us</h2>
                    <p>870 (240) 51 35.</p>
                    <p>contact@dentalic.com</p>
                    <Link className="intro-card-link">Book an appointment</Link>
                  </div>
                </div>
                <div className="intro-card">
                  <div className="intro-card-left-part">
                    <FaClock className="intro-card-icon" />
                  </div>
                  <div className="intro-card-right-part">
                    <h2>Open Hours</h2>
                    <p>
                      <span>Mon-Fri:</span>8:00 AM- 5:00P.M
                    </p>
                    <p>
                      <span>Mon-Fri:</span>8:00 AM- 5:00P.M
                    </p>
                    <p>
                      <span>Mon-Fri:</span>8:00 AM- 5:00P.M
                    </p>
                  </div>
                </div>
                <div className="intro-card">
                  <div className="intro-card-left-part">
                    <FaTooth className="intro-card-icon" />
                  </div>
                  <div className="intro-card-right-part">
                    <h2>Services</h2>
                    <p>Cosmetic Dentist Implants</p>
                    <p>Dental Implants</p>
                    <p>Teeth Whitening</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interrior;
