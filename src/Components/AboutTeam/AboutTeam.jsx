import React from "react";
import firstPicture from "../../assets/happy-dentist.jpg";
import secondPicture from "../../assets/happy-team.jpg";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";
import "./AboutTeam.css";
const AboutTeam = () => {
  return (
    <div className="about-page-second">
      <BackgroundCircles />
      <button className="telephone">Our story</button>
      <h1>We started with only one goal: Make our clients smile</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
        porro ex quo laborum aliquam obcaecati voluptates accusamus eum maxime
        voluptas natus odit neque consectetur soluta distinctio sint vitae,
        animi minus?
      </p>
      <div className="about-images"  data-aos="flip-left">
        <div className="about-picture first-rotated">
          <img src={firstPicture} alt="about-team" />
        </div>
        <div className="about-picture second-rotated">
          <img src={secondPicture} alt="about-team" />
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
