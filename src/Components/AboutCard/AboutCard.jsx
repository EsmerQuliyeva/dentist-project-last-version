import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { RiServiceLine } from "react-icons/ri";
import { FaMedal } from "react-icons/fa6";
import { GiShakingHands } from "react-icons/gi";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";
import "./AboutCard.css";
const AboutCard = () => {
  return (
    <div className="about-cards-container">
      <BackgroundCircles />
      <button className="telephone">Values</button>
      <h1>The core values that drive everything what we do</h1>
      <div className="about-cards">
        <div className="about-card">
          <div className="about-card-img">
            <VscWorkspaceTrusted className="about-card-icon" />
          </div>
          <div>
            <h4>Trust</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              similique voluptate dolore nulla sunt.
            </p>
          </div>
        </div>
        <div className="about-card">
          <div className="about-card-img">
            <RiServiceLine className="about-card-icon" />
          </div>
          <div>
            <h4>Care&Service</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              similique voluptate dolore nulla sunt.
            </p>
          </div>
        </div>
        <div className="about-card">
          <div className="about-card-img">
            <FaMedal className="about-card-icon" />
          </div>
          <div>
            <h4>Responsibility</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              similique voluptate dolore nulla sunt.
            </p>
          </div>
        </div>
        <div className="about-card">
          <div className="about-card-img">
            <GiShakingHands className="about-card-icon" />
          </div>
          <div>
            <h4>Commitment</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              similique voluptate dolore nulla sunt.
            </p>
          </div>
        </div>
      </div>
      <div className="interrior-dentist-site-description-btns">
        <button className="book-btn">Book an appointment</button>
        <button className="telephone">Browse Services</button>
      </div>
    </div>
  );
};

export default AboutCard;
