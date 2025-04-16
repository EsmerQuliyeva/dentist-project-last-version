import React from "react";
import Interrior from "../Components/Interrior/Interrior";
import CardSlider from "../Components/CardSlider/CardSlider";
import HappyTeam from "../Components/HappyTeam/HappyTeam";
import Clients from "../Components/Clients/Clients";
import HappyClient from "../Components/HappyClient/HappyClient";
import Contact from "../Components/Contact/Contact";
const Home = () => {
  return (
    <div className="container">
      <Interrior />
      <CardSlider />
      <HappyTeam />
      <Clients />
      <HappyClient />
      <Contact />
    </div>
  );
};

export default Home;