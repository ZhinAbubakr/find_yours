import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import Grid from "@material-ui/core/Grid";
import "./footer.css";
import { Link } from "react-router-dom";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaTwitter />, link: "https://twitter.com/" },
  { Social: <FaGithub />, link: "https://github.com/" },
];

const Footer = () => {
  return (
    <footer>
      <Grid container>
        <Grid item sm={4} xs={12} lg={4}>
          <h1 className="logo">FindYours</h1>
        </Grid>
        <Grid item sm={4} xs={12} lg={4}>
          <div className="iconsrow">
            <ul className="icons">
              {SocialShare.map((val, i) => (
                <li className="icon" key={i}>
                  <a href={`${val.link}`}>{val.Social}</a>
                </li>
              ))}
            </ul>
            <div className="copyright">
              <p>Copyright © 2021 FindYours. All Rights Reserved.</p>
            </div>
          </div>
        </Grid>
        <Grid item sm={4} xs={12} lg={4}>
          <ul className="links">
            <li>
              <Link className="link"
          to='/contact'>
              Contact
              </Link>
            </li>
            <li>
            <Link className="link" to='/about'>About</Link>
            </li>
            <li>
            <Link className="link" to='/PrivacyPolicy'>Privacy</Link>
            </li>
          </ul>
        </Grid>
      </Grid>
    </footer>
  );
};
export default Footer;
