import React from "react";
import "./styles/Skills.css";
import { arr } from "../assets/Data";
const Skills = () => {
  // .k-1{
  //   height: 100% !important;
  //   width: 50%;
  //     border: 2px solid red;
  //     background-color: tomato;
  //   }
  //   .k-2{
  //     height: 100% !important;
  //   width: 50%;
  //     border: 2px solid green;
  //   }
  return (
    <>
      <div id="skill">
        <h1 className="outfit-44 font-616">My Skills</h1>
        <div className="skills center row">
          <div className="skill-1">
          {
   arr.map((elem,index)=>{
     return (
    <div className="progress">
<div className="k-1 center-19 font-132" style={{backgroundColor:`${elem.pcolor}`,height:"100%",width:`${elem.percent}%`}}>
  {elem.skill}
</div>
<div className="k-2" style={{backgroundColor:`${elem.mcolor}`,height:"99.5%",width:`${elem.max}%`}}></div>
</div>
     )
   })
 }
            
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;

