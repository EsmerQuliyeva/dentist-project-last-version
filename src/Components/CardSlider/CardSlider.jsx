import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import firstphoto from "../../assets/hygiene-dentist.svg";
import secondPhoto from "../../assets/ortho-dentistt.svg";
import thirdPhoto from "../../assets/cosmetic-tooth.png";
import "./CardSlider.css"
const cards = [
  { name: "Cosmetic", image: firstphoto },
  { name: "Oral Hygiene", image: secondPhoto },
  { name: "Dental Implant", image: thirdPhoto },
  { name: "Surgery", image: firstphoto },
  { name: "Cosmetic", image: secondPhoto },
  { name: "Dentist", image: thirdPhoto },
  { name: "Surgery", image: firstphoto },
  { name: "Hygiene", image: secondPhoto },
];

const CardSlider = () => {
  return (
    <div className="container">
      <div className="card-slider-present">
        <h2>
          Our team of dentists can help with <br></br>a variety of dental
          services
        </h2>
        <button className="book-btn">Book an appointment</button>
      </div>
      <div className="slider-container">
        <Swiper
          modules={[Navigation, Pagination]} // Modülleri burada kullanın
          slidesPerView={1}
          spaceBetween={10}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className="card"  style={{ maxWidth: "400px" }}>
              <div>
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="card-image">
                    <img src={card.image} className="card-img" alt={card.name} />
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">{card.name}</h2>
                  <p className="description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Labore expedita aliquam, aut quia eum nihil.
                  </p>
                  <Link className="learn-link">Learn More</Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CardSlider;
