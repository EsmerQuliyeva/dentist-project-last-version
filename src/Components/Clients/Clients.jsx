import React from "react";
import sophie from "../../assets/sophie-CdUBmCFc.jpg";
import morgan from "../../assets/morgan-BpynVxgl.jpg";
import lila from "../../assets/lila-DuuYARB5.jpg";
import "./Clients.css"
const cards = [
  { name: "DSophie Morre", image: sophie },
  { name: "Morgan Wood", image: morgan },
  { name: "Lila Wood", image: lila },
];
const Clients = () => {
  return (
    <div className="container">
      <div className="clients-container">
        <h1>
          See what our over 1,000 happy<br></br> customers have to say
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque totam
          rerum, a eaque obcaecati iure excepturi amet est
        </p>
        <div className="clients">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <div className="image-content">
                <span className="overlay"></span>
                <div className="card-image">
                  <img src={card.image} className="card-img" alt={card.name}/>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">{card.name}</h2>
                <p className="description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Labore expedita aliquam, aut quia eum nihil.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
