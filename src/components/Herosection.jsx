import React from "react";
import "./styles/Home.css";
import photo from "../../public/profile-removebg-preview.png";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import { Intro } from "../assets/Project.js";
import Education from "./Education";
import Experience from "./Experience";
const Herosection = () => {
  return (
    <>
      <div id="#" className="home">
        <div className="lhome">
          <span className="str">
            <h1 className="h1 font-414">Hello, I am Ali</h1>
            <p className="p font-414">Software Engineer</p>
            <p className="info font-414">{Intro}</p>
          </span>
        </div>
        <div className="rhome">
          <div class="pi">
            <img src={photo} alt="img1-1" class="img2" />
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
    </>
  );
};
export default Herosection;
