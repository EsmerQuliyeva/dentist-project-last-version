import React from "react";
import DentalClinic from "../Components/DentalClinic/DentalClinic";
import AboutTeam from "../Components/AboutTeam/AboutTeam";
import AboutCard from "../Components/AboutCard/AboutCard"
import Doctors from "../Components/Doctors/Doctors"

const About = () => {
  return (
    <div className="container">
      <DentalClinic />
      <AboutTeam />
      <AboutCard />
      <Doctors />
    </div>
  );
};

export default About;
