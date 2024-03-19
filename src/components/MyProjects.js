import React from "react";
import ProjectList from "./List/ProjectList";
import "../styles.css";
import { MdArrowOutward } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

function MyProjects() {
    return (

        <div className="projects-container">
            <div className="projects-title">
                <div className="feature"><h1>FEATURED</h1></div>
                <div className="project-dot">
                    <GoDotFill size={64} color="#e76350"/>

                    <h1>PROJECT</h1>
                
                </div>
            </div>
            <div className="my-projects">
            {ProjectList.map(project => (
                <div className="project-infor" key={project.id}>
            
                    <img src={project.projectImg} alt={project.projectName}/>
                        <div className="project-skill">
                        {project.projectSkills.map((skill, index) => (
                                    <div className="skill-item" key={index}>
                                        {skill}
                                    </div>
                                ))}
                        </div>
                    <div className="project-title">
                        <h2>{project.projectName}</h2>

                    </div>
                    <div className="arrow-open">
                        <MdArrowOutward size={48}/> 
                    </div>
                </div>


            ))}
                

            </div>

        </div>




    )
}

export default MyProjects;