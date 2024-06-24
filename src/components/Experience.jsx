import React from 'react'
import "./styles/Experience.css";
import { E1, E2 } from '../assets/Project';
const Experience = () => {
  return (
    <>
    <div className="experience">
      <h1 className='font-616'>Experiences</h1>
      <div className="co">
  <div className="timeline">
    <ul>
      <li>
        <div className="timeline-content">
          <h3 className="date cent font-515">JAN 2024 - FEB 2024</h3>
          <h1 className='cent font-515'>CodSoft</h1>
          <h1 className='font-515 cent'>Web Development Internship</h1>
          <p className=' cent font-515'>
        {E1}</p>
        </div>
      </li>
      <li>
        <div className="timeline-content">
          <h3 className="date cent font-515" >June 2023 - PRESENT</h3>
          <h1 className='font-515 cent' >Alter Learning Inc</h1>
          <h1 className='font-515 cent'>Software Engineer (Remote)</h1>
          <p className='font-515 cent'>
          {E2}
          </p>
        </div>
      </li>
    </ul>
  </div>
</div>
     
      </div>
    
    </>
  )
}

export default Experience;
