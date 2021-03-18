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
  { Social: <FaFacebookF />, link: "https://www.facebook.com/iothmanosx" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/othmanosx" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/othmanosx" },
  { Social: <FaTwitter />, link: "https://twitter.com/othmanosx" },
  { Social: <FaGithub />, link: "https://github.com/othmanosx" }
];

const FooterTwo = () => {
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
export default FooterTwo;
