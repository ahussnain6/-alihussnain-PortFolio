import React, { useState } from "react";
import "./styles/Project.css";
import { Projec } from "../../src/assets/Project.js";

const Projects = () => {
  const [data, setData] = useState(Projec);
  return (
    <>
      <div id="project">
        <h1 className="cen-13">My Projects</h1>

        <div className="boxes">
          {data.map((elem) => {
            return (
              <>
                <div className="box1">
                  <span className="p-1">
                    <h4 className="cen-13 font-23">{elem.name}</h4>
                  </span>
                  <span className="p-2">
                    <h2 className="font-23">{elem.details}</h2>
                  </span>
                  <span className="p-3">
                    <button className="btn-y font">
                      <a className="link-98 font-23" href={elem.projectlink}>
                        Visit Project
                      </a>
                    </button>
                    <button className="btn-y font ">
                      <a className="link-98 font-23" href={elem.gitlink}>
                        Get Source Code
                      </a>
                    </button>
                  </span>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Projects;
