import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="contact-heading">Get In Touch</h2>
      <div className="contact-wrapper">
        <h4>Address : Purana Paltan, Dhaka</h4>
        <h4>
          Mail :
          <a target="_blank" href="https://gmail.com" rel="noreferrer">
            {" "}
            ikramuddin2122@gmail.com
          </a>
        </h4>
        <h4>Phone : 01865503788</h4>
        <h4>
          Github :
          <a
            target="_blank"
            href="https://github.com/Ikramuddin21"
            rel="noreferrer"
          >
            {" "}
            https://github.com/Ikramuddin21
          </a>
        </h4>
        <h4>
          LinkedIn :
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ikram-uddin21/"
            rel="noreferrer"
          >
            {" "}
            https://www.linkedin.com/in/ikram-uddin21/
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Contact;
