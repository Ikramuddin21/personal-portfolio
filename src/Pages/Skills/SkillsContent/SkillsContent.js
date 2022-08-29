import React, { useEffect, useState } from "react";
import "./SkillsContent.css";

const SkillsContent = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("portfolio.json")
      .then((res) => res.json())
      .then((data) => setSkills(data.keywords));
  }, []);
  
  return (
    <div className="skills-content">
      <div>
        <h1 className="highlight">My Skills</h1>
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

export default SkillsContent;
