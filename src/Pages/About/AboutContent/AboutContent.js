import React from "react";
import aboutImg from "../../../images/ikram.png";
import {Link} from "react-router-dom";
import "./AboutContent.css";

const AboutContent = () => {
  return (
    <section className="about-content">
      <div className="about-content-left">
        <img src={aboutImg} alt="" />
      </div>
      <div className="about-content-right">
        <div className="about-me-area">
          <h2>About Me</h2>
          <p>
            Hello everyone! My name is <strong>Ikram Uddin Akhand</strong>. I am
            a<strong> Frontend Developer</strong>, and I design exceptional
            websites and web apps that provide intuitive, pixel-perfect user
            interfaces with efficient. Also I have backend concepts and able to
            do full stack projects. I have two fullstack projects. Now I am in
            the process of learning to improve my development skills.
          </p>
          <p className="about-education">
            Completed Diploma in Engineering 2022 and my subject was computer
            technology.
          </p>
        </div>
        <div className="about-training-area">
          <h2>Training</h2>
          <ul>
            <li>Internship at Bdtask software limited.</li>
            <li>Programming hero course</li>
          </ul>
        </div>
        <div className="about-address">
            <h4>Address : Purana Paltan, Dhaka</h4>
            <h4>Mail : <Link to="">ikramuddin2122@gmail.com</Link></h4>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
