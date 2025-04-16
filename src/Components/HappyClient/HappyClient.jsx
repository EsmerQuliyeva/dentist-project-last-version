import React from "react";
import HappyIll from "../../assets/happy-ill.jpg";
import "./HappyClient.css"
const HappyClient = () => {
  return (
    <div className="container">
      <div className="happy-ill-container">
        <div className="happy-ill">
          <div className="happy-ill-first">
            <h1>
              Schedule a virtual or<br></br>presential appointment{" "}
            </h1>
            <button className="book-btn" id="happy-client-book-btn">
              Book an appointment
            </button>
          </div>
          <div className="happy-ill-second">
            <img src={HappyIll} alt="happy client" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyClient;
