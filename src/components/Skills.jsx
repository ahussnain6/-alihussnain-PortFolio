import React from 'react'
import "./styles/Skills.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { arr } from '../assets/Data';
import {Fade}  from "react-awesome-reveal";
const Skills = () => {
 
  return (
    <>
    <div id='skill'>
    <h1 className='outfit-44 font-616'>My Skills</h1> 
    <Fade triggerOnce="true" >

    <div  className='skills center row' >
    <div className="skill-1 center">

      {
        arr.map((elem,index)=>{
          return (
            <ProgressBar variant={`success-${index +1}`} now={elem.percent} max={100}
            className='progress bg-successs' 
            label={elem.skill}
            
            />
          )
        })
      }
   
    
    </div>
  

   
               
               </div>
               </Fade>

    </div>
    </>
  )
}
export default Skills;

   {/* <div className="box">      */}

          {/* {arr.map((curElem)=>{   return(<>
       <div className={`${curElem.className} c`} style={{display:"flex"}}>
        <span className="ij"><h5 className='skilln'>{curElem.skill}</h5>
        </span><span className="jk" ></span>
        </div>  </>  )   }  ) }  
         */}
        {/* </div>   */}
               {/* </div> */}
               
               
               {/* </div> */} 