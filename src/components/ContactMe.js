import React, { useState } from "react";
import "../styles.css";
import { LuArrowDownRight } from "react-icons/lu";
import { HiArrowUpRight } from "react-icons/hi2";


function ContactMe() {

    const email = "nguyentranminhthu.65@gmail.com";
    const [showToolTip, setShowToolTip] = useState(false);



    const copyEmailToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setShowToolTip(true)
            setTimeout(() => setShowToolTip(false), 3000);

        } catch(err) {
            console.error("Fail to copy: ", err);
        }
    }
    return (
        <div className="contact-container">
             <div className="section-title contact-me">
                <div ><h1>LET'S BUILD</h1></div>
                <div className="right">
                <LuArrowDownRight size={64} color="#e76350"/>

                <h1>TOGETHER</h1>
                
                </div>
            </div>
            <div className="email" onClick={copyEmailToClipboard} style={{cursor: 'pointer', position: 'relative'}}>
                <h3>{email}</h3>
                <p>Click to copy</p>
                {showToolTip && <div className="tooltip" style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '20%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#000',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    zIndex: 1,
                    fontSize: '14px',
                    }}>Can't wait to hear from you!</div>}
            </div>
            <div className="foot">
            <div>©2024 — MAYTHUNGUYEN</div>

            <div className="social">
            <div className="social-title">
                <h3>SOCIALS</h3>
            </div>
            <div className="social-channels">
                <div className="git">
                    <a href="https://github.com/Maythunguyen" target="_blank" rel="noopener noreferrer">GITHUB</a>
                    <a href="https://github.com/Maythunguyen" target="_blank" rel="noopener noreferrer"> <HiArrowUpRight size={30}/></a>
                </div>

                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/may-thu-nguyen/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                    <a href="https://www.linkedin.com/in/may-thu-nguyen/" target="_blank" rel="noopener noreferrer"><HiArrowUpRight size={30}/></a>
                </div>

            </div>
                
               

               
            </div>

            </div>

        </div>
    )
}

export default ContactMe;