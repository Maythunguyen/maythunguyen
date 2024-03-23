import React, { useState } from "react";
import "../styles.css";
import { Link } from "react-scroll";


function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const closeMenu = () => {
        setIsMenuOpen(false)
    }
    return(
        <div className="navbar">
            <div className="logo"><a href="#">MAY <span>THU NGUYEN</span></a></div>
            <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
                <ul className="links">
                    <li className="links-item">
                        <Link to="about-me" spy={true} smooth={true} duration={500} className="button-28" onClick={closeMenu}>ABOUT ME</Link>
                    </li>
                    <li className="links-item">
                        <Link to="projects-container" spy={true} smooth={true} duration={500} className="button-28" onClick={closeMenu}>MY PROJECTS</Link>
                    </li>
                    <li className="links-item">
                        <Link to="contact-me" spy={true} smooth={true} duration={500} className="button-28" onClick={closeMenu}>CONTACT ME</Link>
                    </li>
                </ul>

            </div>
            <div className="hamburger active" onClick={toggleMenu}>
                <span className={`bar bar-1 ${isMenuOpen ? "change" : ""}`}></span>
                <span className={`bar bar-2 ${isMenuOpen ? "change" : ""}`}></span>  
            </div>

        </div>
        
    )
}

export default Navbar;