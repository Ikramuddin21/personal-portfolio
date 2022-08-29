import React, { useEffect, useState } from "react";
import ProjectData from "../ProjectData/ProjectData";
import "./ProjectsContent.css";

const ProjectsContent = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("portfolio.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects));
  }, []);

  return (
    <div className="projects-content">
      <div>
        <h1 className="highlight">Projects</h1>
        <div className="projects-data-wrapper">
          {projects.map((project) => (
            <ProjectData key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;
