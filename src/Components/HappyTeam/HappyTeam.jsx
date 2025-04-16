import React from "react";
import happyTeam from "../../assets/happy-team.jpg";
import happyClient from "../../assets/happy-client.jpg";
import doc from "../../assets/doc.avif";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";
import "./HappyTeam.css";
const HappyTeam = () => {
  return (
    <div className="happy-team" data-aos="fade-right">
      <BackgroundCircles />
      <div className="happy-team-images">
        <img src={happyTeam} className="happy-team-img" alt="home" />
        <div className="happy-team-second-img">
          <img
            src={happyClient}
            alt="Happy Client"
            className="happy-client-img"
          />
        </div>
      </div>
      <div className="happy-team-descp">
        <p
          className="telephone"
          style={{
            width: "auto",
            maxWidth: "150px",
            margin: "o auto",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          About us
        </p>
        <h2>Our team has only one mission:Make you smile</h2>
        <p style={{ fontSize: "20px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          officia, natus, quidem esse deserunt voluptatibus inventore quod
          dolores ut vel eveniet! Quas blanditiis error fuga ea dicta, iure amet
          omnis.
        </p>
        <div className="doc-details">
          <img
            src={doc}
            alt="doctor"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <div className="doc-name-details">
            <b>
              <p>Dr Andrew Mathew</p>
            </b>
            <span>Dentist at Global Dentistry</span>
          </div>
        </div>
        <button
          className="book-btn"
          style={{ width: "auto", maxWidth: "200px", margin: "o auto" }}
        >
          About our clinic
        </button>
      </div>
    </div>
  );
};

export default HappyTeam;
