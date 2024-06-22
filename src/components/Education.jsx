import React, { useState, useEffect } from "react";
import "./styles/Education.css";
import p from "../../public/1713016251554.jpg";
import Slide from "react-awesome-reveal";
const Education = () => {
  return (
    <>
      <h1 className="t6 font-616">Education</h1>
      <Slide duration={2900} triggerOnce="true">
        <div className={`education `}>
          <div className="ed">
            <span className="e1">
              <img src={p} alt="" className="logi" />
            </span>
            <span className="e2 font-515 ">
              {" "}
              <h1 className="cent font-515">University of the Punjab</h1>
              <h1 className="cent font-515">B.S-Information Technology</h1>
              <h1 className="cent font-515">September 2023 - 2027</h1>
            </span>
          </div>
        </div>
      </Slide>
    </>
  );
};

export default Education;
