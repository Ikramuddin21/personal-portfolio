import React, { useEffect, useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("portfolio.json")
      .then((res) => res.json())
      .then((data) => setSkills(data.keywords));
  }, []);
  
  return (
    <div className="skills">
      <div>
        <h2 className="skills-heading">My Skills</h2>
        <div className="skills-data-wrapper">
          {skills.map((skill) => (
            <div key={skill.id} className="skills-data">
              <img src={skill.logo} alt="" />
              <h4>{skill.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
