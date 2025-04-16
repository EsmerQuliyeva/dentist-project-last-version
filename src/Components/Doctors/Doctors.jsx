import React from "react";
import morgan from "../../assets/morgan-BpynVxgl.jpg";
import sophie from "../../assets/sophie-CdUBmCFc.jpg";
import lily from "../../assets/lila-DuuYARB5.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import "./Doctors.css";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";
const Doctors = () => {
  return (
    <div className="team-container" style={{ position: "relative" }}>
      <BackgroundCircles />
      <button className="telephone">Our team</button>
      <h1>Our amazing service of dentists is ready to service you</h1>
      <div className="doctors-container">
        <div className="doc-info">
          <img src={morgan} alt="doctor" className="doctor-info" />
          <h4 style={{ fontSize: "30px" }}>Andrew Moore</h4>
          <span style={{ color: "gray", fontSize: "20px" }}>
            Dentist at Global Dentistry
          </span>
          <div className="doc-info-icons">
            <BsFillTelephoneFill className="doctor-telephone-icon" />
            <FaEnvelope className="doctor-message-icon" />
          </div>
        </div>
        <div className="doc-info">
          <img src={sophie} alt="doctor" className="doctor-info" />
          <h4 style={{ fontSize: "30px" }}>Kate Filler</h4>
          <span style={{ color: "gray", fontSize: "20px" }}>
            Dentist at Global Dentistry
          </span>
          <div className="doc-info-icons">
            <BsFillTelephoneFill className="doctor-telephone-icon" />
            <FaEnvelope className="doctor-message-icon" />
          </div>
        </div>
        <div className="doc-info">
          <img src={morgan} alt="doctor" className="doctor-info" />
          <h4 style={{ fontSize: "25px" }}>Andrew Moore</h4>
          <span style={{ color: "gray", fontSize: "20px" }}>
            Dentist at Global Dentistry
          </span>
          <div className="doc-info-icons">
            <BsFillTelephoneFill className="doctor-telephone-icon" />
            <FaEnvelope className="doctor-message-icon" />
          </div>
        </div>
        <div className="doc-info">
          <img src={lily} alt="doctor" className="doctor-info" />
          <h4 style={{ fontSize: "30px" }}>Lilly Howel</h4>
          <span style={{ color: "gray", fontSize: "20px" }}>
            Dentist at Global Dentistry
          </span>
          <div className="doc-info-icons">
            <BsFillTelephoneFill className="doctor-telephone-icon" />
            <FaEnvelope className="doctor-message-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
