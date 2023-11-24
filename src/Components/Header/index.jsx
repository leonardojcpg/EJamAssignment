import React from "react";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import infoIconA from "./assets/infoIcon-a.svg";
import infoIconB from "./assets/infoIcon-b.svg";
import infoIconC from "./assets/infoIcon-c.svg";
import infoIconD from "./assets/infoIcon-d.svg";
import "./styles.css";

export const Header = ({ infoTitleA, infoTitleB, infoTitleC, infoTitleD }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  if (isMobile) {
    const settings = {
      dots: false,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Slider {...settings}>
        <div className="header-container">
          <div className="info-container">
            <img src={infoIconA} alt="" />
            <p>{infoTitleA}</p>
          </div>
        </div>
        <div className="header-container">
          <div className="info-container">
            <img src={infoIconB} alt="" />
            <p>{infoTitleB}</p>
          </div>
        </div>
        <div className="header-container">
          <div className="info-container">
            <img src={infoIconC} alt="" />
            <p>{infoTitleC}</p>
          </div>
        </div>
        <div className="header-container">
          <div className="info-container">
            <img src={infoIconD} alt="" />
            <p>{infoTitleD}</p>
          </div>
        </div>
      </Slider>
    );
  }

  return (
    <div className="header-container">
      <div className="info-container">
        <img src={infoIconA} alt="" />
        <p>{infoTitleA}</p>
      </div>
      <div className="info-container">
        <img src={infoIconB} alt="" />
        <p>{infoTitleB}</p>
      </div>
      <div className="info-container">
        <img src={infoIconC} alt="" />
        <p>{infoTitleC}</p>
      </div>
      <div className="info-container">
        <img src={infoIconD} alt="" />
        <p>{infoTitleD}</p>
      </div>
    </div>
  );
};
