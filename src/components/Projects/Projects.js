import React, { useEffect, useState } from "react";
import Project from "../Project/Project";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("portfolio.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects));
  }, []);

  return (
    <div className="projects" id="projects">
      <div>
        <h2 className="projects-heading">Projects</h2>
        <div className="projects-data-wrapper">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
