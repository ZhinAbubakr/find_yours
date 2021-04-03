import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Drawer,
	Link,
	MenuItem
} from "@material-ui/core"
import { useStyles } from "./styles.js"
import { FiMenu } from "react-icons/fi"
import React, { useState, useEffect } from "react"
import { Link as RouterLink } from "react-router-dom"
import google from "../../Assets/Google.png"
import Menu from "@material-ui/core/Menu"
import LanguageIcon from "@material-ui/icons/Language"

const options = ["Arabic", "English", "Kurdish"]

const ITEM_HEIGHT = 48

const headersData = [
	{
		label: "Home",
		href: "/"
	},
	{
		label: "Dashboard",
		href: "/dashboard"
	},
	{
		label: "Privacy Policy",
		href: "/PrivacyPolicy"
	},
	{
		label: "About us",
		href: "/about"
	},
	{
		label: "Contact us",
		href: "/contactUs"
	}
]

export default function Header() {
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
		// console.log(event.currentTarget.innerText);
	}
	const {
		header,
		logo,
		menuButton,
		toolbar,
		drawerContainer,
		toolbar2,
		languageicon,
		googleimg,
		toolbar3,
		toolbar4
	} = useStyles()

	const [state, setState] = useState({
		mobileView: false,
		drawerOpen: false
	})

	const { mobileView, drawerOpen } = state

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({ ...prevState, mobileView: false }))
		}

		setResponsiveness()

		window.addEventListener("resize", () => setResponsiveness())
	}, [])

	const displayDesktop = () => {
		return (
			<Toolbar className={toolbar}>
				{femmecubatorLogo}
				<div>{getMenuButtons()}</div>
				<div className={toolbar2}>
					<IconButton
						aria-label="more"
						aria-controls="long-menu"
						aria-haspopup="true"
						onClick={handleClick}>
						<LanguageIcon className={languageicon} />
					</IconButton>
					<Menu
						id="long-menu"
						anchorEl={anchorEl}
						keepMounted
						open={open}
						onClose={handleClose}
						PaperProps={{
							style: {
								maxHeight: ITEM_HEIGHT * 4.5,
								width: "20ch"
							}
						}}>
						{options.map((option) => (
							<MenuItem
								key={option}
								selected={option === "Pyxis"}
								onClick={handleClose}>
								{option}
							</MenuItem>
						))}
					</Menu>
					<img className={googleimg} src={google} alt="google" />
				</div>
			</Toolbar>
		)
	}

	const displayMobile = () => {
		const handleDrawerOpen = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: true }))
		const handleDrawerClose = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: false }))

		return (
			<Toolbar>
				<IconButton
					{...{
						edge: "start",
						color: "inherit",
						"aria-label": "menu",
						"aria-haspopup": "true",
						onClick: handleDrawerOpen
					}}>
					<FiMenu />
				</IconButton>

				<Drawer
					{...{
						anchor: "left",
						open: drawerOpen,
						onClose: handleDrawerClose
					}}>
					<div className={drawerContainer}>{getDrawerChoices()}</div>
				</Drawer>
				<div className={toolbar3}>
					{femmecubatorLogo}
					<div className={toolbar4}>
						<IconButton
							aria-label="more"
							aria-controls="long-menu"
							aria-haspopup="true"
							onClick={handleClick}>
							<LanguageIcon className={languageicon} />
						</IconButton>
						<Menu
							id="long-menu"
							anchorEl={anchorEl}
							keepMounted
							open={open}
							onClose={handleClose}
							PaperProps={{
								style: {
									maxHeight: ITEM_HEIGHT * 4.5,
									width: "20ch"
								}
							}}>
							{options.map((option) => (
								<MenuItem
									key={option}
									selected={option === "Pyxis"}
									onClick={handleClose}>
									{option}
								</MenuItem>
							))}
						</Menu>
						<img className={googleimg} src={google} alt="google" />
					</div>
				</div>
			</Toolbar>
		)
	}

	const getDrawerChoices = () => {
		return headersData.map(({ label, href }) => {
			return (
				<Link
					{...{
						component: RouterLink,
						to: href,
						color: "inherit",
						style: { textDecoration: "none" },
						key: label
					}}>
					<MenuItem>{label}</MenuItem>
				</Link>
			)
		})
	}

	const femmecubatorLogo = (
		<Typography variant="h6" component="h1" className={logo}>
			FindYours
		</Typography>
	)

	const getMenuButtons = () => {
		return headersData.map(({ label, href }) => {
			return (
				<Button
					{...{
						key: label,
						color: "inherit",
						to: href,
						component: RouterLink,
						className: menuButton
					}}>
					{label}
				</Button>
			)
		})
	}

	return (
		<header>
			<AppBar className={header}>
				{mobileView ? displayMobile() : displayDesktop()}
			</AppBar>
		</header>
	)
}
