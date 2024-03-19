import React, { useState, useRef } from "react";

function MySkills() {
  const skills = ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "ExpressJS", "Python", "Flask", "FastAPI", "Firebase" ];
  const marqueeRef = useRef(null);
  const [pause, setPause] = useState(false);

  const togglePause = () => {
    setPause(!pause);
  };

  return (
    <div className="my-skill">
        <h2>Skills</h2>
        <div className="skills-container" onClick={togglePause} ref={marqueeRef}>
       
        {skills.map((skill, index) => (
            <div key={index} className={`skill ${pause ? "paused" : ""}`}>
            <p>{skill}</p>
            </div>
        ))}
        </div>
    </div>
  );
}

export default MySkills;
