import React from "react";
import "./HomeContent.css";

const HomeContent = () => {
  return (
    <div className="home-content">
      <div>
        <h1>Ikram <span className="highlight">Uddin Akhand</span></h1>
        <h2>Frontend <span className="highlight">Developer</span></h2>
        <button className="get-touch-btn">Get In Touch</button>
      </div>
    </div>
  );
};

export default HomeContent;
