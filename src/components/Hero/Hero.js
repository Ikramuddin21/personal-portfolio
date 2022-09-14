import React from "react";
import image from "../../images/hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div>
        <img src={image} alt="" />
        <h1>
          Ikram <span className="highlight">Uddin</span>
        </h1>
        <h2>
          <span className="highlight2">Frontend</span> Developer
        </h2>
      </div>
    </div>
  );
};

export default Hero;
