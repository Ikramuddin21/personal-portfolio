import React from "react";
import aboutImg from "../../images/about.png";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <h2 className="about-heading">About Me</h2>
      <div className="about-wrapper">
        <div className="about-left">
          <img src={aboutImg} alt="" />
        </div>
        <div className="about-right">
          <div className="about-descriptions">
            <h3 className="highlight">Hello everyone!</h3>
            <p>
              My name is <strong>Ikram Uddin Akhand</strong>. I
              am a<strong> Frontend Developer</strong>, and I design exceptional
              websites and web apps that provide intuitive, pixel-perfect user
              interfaces with efficient. Also I have backend concepts and able
              to do full stack projects. I have two fullstack projects. Now I am
              in the process of learning to improve my development skills.
            </p>
            <p className="about-education">
              Completed Diploma in Engineering 2022 and my subject was Computer
              Technology.
            </p>
          </div>
          <div className="about-address">
            <h4>Address : Purana Paltan, Dhaka</h4>
            <h4>
              Mail :
              <a target="_blank" href="https://gmail.com" rel="noreferrer">
                {" "}
                ikramuddin2122@gmail.com
              </a>
            </h4>
            <h4>Phone : 01865503788</h4>
          </div>
          <a
            className="download-cv"
            target="_blank"
            href="https://drive.google.com/file/d/1ut7RM0arwJxw_ww3Rpt5WZZuSNvOy2g3/view?usp=sharing"
            rel="noreferrer"
          >
            <button>Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
