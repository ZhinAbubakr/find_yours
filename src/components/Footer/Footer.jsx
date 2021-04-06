import React from "react"
import {
	FaTwitter,
	FaInstagram,
	FaFacebookF,
	FaLinkedinIn,
	FaGithub
} from "react-icons/fa"
import Grid from "@material-ui/core/Grid"
import { Link } from "react-router-dom"
import useStyles from "./Style"

const SocialShare = [
	{ Social: <FaFacebookF />, link: "https://www.facebook.com/" },
	{ Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
	{ Social: <FaInstagram />, link: "https://www.instagram.com/" },
	{ Social: <FaTwitter />, link: "https://twitter.com/" },
	{ Social: <FaGithub />, link: "https://github.com/" }
]

const Footer = () => {
	const classes = useStyles()
	return (
		<footer className={classes.footer}>
			<Grid container>
				<Grid item sm={4} xs={12} lg={4}>
					<h1 className={classes.logo}>FindYours</h1>
				</Grid>
				<Grid item sm={4} xs={12} lg={4}>
					<div className={classes.iconsrow}>
						<ul className={classes.icons}>
							{SocialShare.map((val, i) => (
								<li className={classes.icon} key={i}>
									<a className={classes.icons_a} href={`${val.link}`}>
										{val.Social}
									</a>
								</li>
							))}
						</ul>
						<div>
							<p>Copyright © 2021 FindYours. All Rights Reserved.</p>
						</div>
					</div>
				</Grid>
				<Grid item sm={4} xs={12} lg={4}>
					<ul className={classes.footer__links}>
						<li className={classes.footer__links_li}>
							<Link className={classes.link} to="/contactUs">
								Contact
							</Link>
						</li>
						<li className={classes.footer__links_li}>
							<Link className={classes.link} to="/about">
								About
							</Link>
						</li>
						<li className={classes.footer__links_li}>
							<Link className={classes.link} to="/PrivacyPolicy">
								Privacy
							</Link>
						</li>
					</ul>
				</Grid>
			</Grid>
		</footer>
	)
}
export default Footer
