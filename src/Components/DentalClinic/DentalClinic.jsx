import React from "react";
import aboutClient from "../../assets/about-image.jpg";
import "./DentalClinic.css"
const DentalClinic = () => {
  return (
    <div className="about-page-first">
      <h1>We are Dentalic, a dental clinic you can trust</h1>
      <p>We are Dentalic, a dental clinic you can trust</p>
      <img src={aboutClient} alt="about-client" className="about-client" />
    </div>
  );
};

export default DentalClinic;
