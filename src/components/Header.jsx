import React from 'react';
import "./styles/Header.css";
const Header = () => {
  return (
    <>            <nav className="navbar">
        <div className="navbar-container cont">
            <input type="checkbox" name="" id=""/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><a href="#about">About</a></li>
                <li><a href="#skill">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="https://drive.google.com/file/d/1eBgh4RDzyxqBKOCY81HMEMxw9iGnyLS2/view?usp=drivesdk" file target='_blank' download>Resume</a></li>
            </ul>
            <h1 className="pl" ><a href="#" className="pli" style={{textDecoration:"none"}}>Ali Hussnain</a></h1>
        </div>
    </nav> 
      {/* </nav> */}
    </>
  );
}
export default Header;
