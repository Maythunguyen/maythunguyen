import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";

function Panel() {

    const [rotation, setRotation] = useState(0)

    const handleMouseMove = event => {
        const { clientX, clientY } = event;

        const rotationAngle = (clientX + clientX)%360;
        setRotation(rotationAngle)
    }
    
    return (
        <div className="container-panel" onMouseMove={handleMouseMove}>
             <div className="panel-title">
                <div ><h1>SOFTWARE</h1></div>
                <div className="panel-right">
                <GoDotFill size={64} color="#e76350"/>

                <h1>ENGINEER</h1>
                
                </div>
            </div>
            <div className="panel-img">
                <img 
                    
                    src="https://cdn.pixabay.com/photo/2017/08/10/11/34/earth-2621703_1280.png"
                    style={{ transform: `rotate(${rotation}deg)`}}


                />
            </div>
           
        </div>
    );
}
export default Panel;