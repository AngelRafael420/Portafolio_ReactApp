import React from "react";
import "./Footer.css";

// Recordendo que el font-awesome sirve para un formato de logo y mas. les deje el link en el README.md

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Angel Marte</h1>
        {/* <p style="color:#FF0000";>Red paragraph text</p> */}
        <p>Dominican Republic, Santo Domingo</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>And let's get down to business</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By Angel Marte 'Nino'</div>
        <div className="sns-links">
          {/* aqui yo agregue varias de mis redes sociales ques mas utilizo actualmente */}
          <a
            href="https://www.youtube.com/channel/UCh7MAhrSyDlfZO8NRMhNDBg"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-youtube youtube"></i>
          </a>
          <a
            href="https://twitter.com/angelrafael420"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/angelrafael420/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram instagram"></i>
          </a>
          <a
            href="https://www.snapchat.com/add/asarmientomarte?share_id=C86Lb6lE3RM&locale=es-US"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-snapchat snapchat"></i>
          </a>
          <a
            href="https://t.me/angelrafael420_2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-telegram telegram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
