import React from "react";
import { Link } from "react-router-dom";
import firstphoto from "../../assets/hygiene-dentist.svg";
import secondPhoto from "../../assets/ortho-dentistt.svg";
import thirdPhoto from "../../assets/cosmetic-tooth.png";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";
import "./ServicesPart.css";
const cards = [
  { name: "Cosmetic", image: firstphoto },
  { name: "Oral Hygiene", image: secondPhoto },
  { name: "Dental Implant", image: thirdPhoto },
  { name: "Surgery", image: firstphoto },
  { name: "Cosmetic", image: secondPhoto },
  { name: "Dentist", image: thirdPhoto },
];

const ServicesPart = () => {
  return (
    <div className="service-cards-container">
      <BackgroundCircles />
      <h1>Our Services</h1>
      <div className="service-cards-intro">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          rerum recusandae voluptatem sequi sapiente
        </p>
        <button className="book-btn" id="service-cards-book-btn">
          Book an appointment
        </button>
      </div>
      <div className="service-cards">
        {cards.map((card, index) => (
          <div className="services_card" key={index} data-aos="fade-up">
            <div className="service-card-image-content">
              <span className="overlay"></span>
              <div className="service-card-image">
                <img
                  src={card.image}
                  className="service-card-img"
                  alt={card.name}
                />
              </div>
            </div>
            <div className="services_card-content">
              <h2 className="name">{card.name}</h2>
              <p className="description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
                expedita aliquam, aut quia eum nihil.
              </p>
              <Link className="service-card-learn-link">Learn More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPart;
