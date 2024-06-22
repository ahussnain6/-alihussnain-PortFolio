import React from "react";
import "./styles/Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer id="contact" className="contact">
      <div className="fleft">
        Wanna collaborate with me, please don't hesitate, feel free to contact
        with me
        <div className="email" style={{ fontWeight: "bolder" }}>
          ahussnain67h@gmail.com
        </div>
      </div>
      <div className="logos">
        <div className="l1">
          <a
            style={{ textDecoration: "none" }}
            href="https://www.facebook.com/profile.php?id=100022856990291&mibextid=ZbWKwL"
            target="_blank"
          >
            {" "}
            <FaFacebook className="logo" />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.instagram.com/ahussnain951"
            target="_blank"
          >
            {" "}
            <FaInstagram className="logo" />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://github.com/ahussnain6"
            target="_blank"
          >
            {" "}
            <FaGithub className="logo" />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.linkedin.com/in/ali-hussnain-098955284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            {" "}
            <FaLinkedin className="logo" />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://x.com/AliHussnain67h?s=09"
            target="_blank"
          >
            {" "}
            <FaSquareXTwitter className="logo" />
          </a>
        </div>
        <div className="l2">&copy; All Rights Reserved 2023</div>
      </div>
      <div className="fright">
        For any additional information or for any query & assistance feel free
        to reach out to me. <b>+923274666681</b>
      </div>
    </footer>
  );
};

export default Footer;
