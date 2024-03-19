import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import MySkills from "./MySkills";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";
import Panel from "./Panel";


function App() {
    return (

        <div>
            <Navbar/>
            <Panel/>
            <AboutMe/>
            <MySkills/>
            <MyProjects/>
            <ContactMe/>
        </div>

    )
}

export default App;