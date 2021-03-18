import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa";
import './footer.css'

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaTwitter />, link: "https://twitter.com/" },
  { Social: <FaGithub />, link: "https://github.com/" }
];

const Footer = () => {
  return (
    <footer>
      <h1 className='logo'>FindYours</h1>
          <div className='iconsrow'>
              <ul className="icons">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`}>{val.Social}</a>
                  </li>
                ))}
              </ul>
              <div className="copyright">
                <p>Copyright © 2021 FindYours. All Rights Reserved.</p>
              </div>
              </div>
              
                <ul className='links'>
                  <li><a href="#"></a>Contact</li>
                  <li><a href="#"></a>About</li>
                  <li><a href="#"></a>Terms</li>
                  <li><a href="#"></a>FAQ</li>
                </ul>
              
    </footer>
  );
};
export default Footer;
