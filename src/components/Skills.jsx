import React from 'react'
import "./styles/Skills.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { arr } from '../assets/Data';
const Skills = () => {
 
  return (
    <>
    <div id='skill'>
    <h1 className='outfit-44 font-616'>My Skills</h1> 
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


    </div>
    </>
  )
}
export default Skills;
 