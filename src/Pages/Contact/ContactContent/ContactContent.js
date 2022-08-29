import React from "react";
import "./ContactContent.css";

const ContactContent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact-content">
      <h1 className="highlight">Get In Touch</h1>
      <div className="contact-wrapper">
        <div className="contact-left">
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
              ikramuddin2122@gmail.com
            </a>
          </h4>
        </div>
        <div className="contact-right">
            <span>Form functionality not added.</span>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea type="text" placeholder="Message" />
           <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
