import React from "react";
import image from "../../../images/image-home.png";
import "./HomeContent.css";

const HomeContent = () => {
  return (
    <section className="home-content">
      <img src={image} alt="" />
      <h1>
        Ikram <span className="highlight">Uddin</span>
      </h1>
      <h2>
        <span className="highlight2">Frontend</span> Developer
      </h2>
    </section>
  );
};

export default HomeContent;
