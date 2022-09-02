import React from "react";
import "./Project.css";

const Project = ({ project }) => {
  const { img, name, type, technologies, links } = project;

  return (
    <div className="project-data">
      <img src={img} alt="" />
      <div className="project-data-text">
        <h3 className="project-name">{name}</h3>
        <h4 className="highlight type">{type}</h4>

        <div className="technologies">
          {technologies.map((technology, index) => (
            <span key={index}>{technology}</span>
          ))}
        </div>

        <div className="project-links">
          {links.map((link, index) => (
            <button key={index}>
              <a
                href={link.demoLink || link.clientLink || link.serverLink}
                target="_blank"
                rel="noreferrer"
              >
                {link.demo || link.client || link.server}
              </a>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
