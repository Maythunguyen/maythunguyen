import React from "react";
import "../styles.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


function AboutMe() {
    return(
        <div className="about-me">
            
                <div className="intro-myself">
                    <div className="title"><h1>Hello World!</h1></div>
                    <div className="content-icons">
                        <div className="myself-content">
                            <p>
                        I'm May. Passionate and versatile aspiring software engineer with a strong foundation in web development (HTML, CSS, JavaScript) and proficiency in modern front-end technologies like React. Additionally, I bring a solid understanding of back-end development with Python, including data analysis and basic AI knowledge. My portfolio showcases hands-on experience in creating interactive web applications. Eager to contribute my skills, creativity, and passion for innovation to your team.
                            </p>
                        </div>
                    
                        </div>
                
                </div>
        </div>
        
    )
}

export default AboutMe;