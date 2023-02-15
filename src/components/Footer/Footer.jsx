import React from "react";
import './FooterStyles.css';

const Footer = () => {
  return (
    <div className="footerContent">
      <a href="https://www.instagram.com/kirtanyc/" target="_blank" rel="noreferrer">
        <img
          className="footerImage"
          src={require('./instagram.png')}
          alt="Instagram"
        />
      </a>
      <a href="https://www.linkedin.com/in/k1rtan/" target="_blank" rel="noreferrer">
        <img
          className="footerImage"
          src={require('./linkedin.png')}
          alt="LinkedIn"
        />
      </a>
      <a href="https://twitter.com/kirtanyc" target="_blank" rel="noreferrer">
        <img
          className="footerImage"
          src={require('./twitter.png')}
          alt="Twitter"
        />
      </a>
      <a href="https://www.youtube.com/channel/UCD5j3fX-_RrZSINdpThFEFQ" target="_blank" rel="noreferrer">
        <img
          className="youtubeFooterImage"
          src={require('./youtube.png')}
          alt="YouTube"
        />
      </a>
    </div>
  );
};

export default Footer;
