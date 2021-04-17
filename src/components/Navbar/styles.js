import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
	header: {
		backgroundColor: "#3AAFA9",
		paddingRight: "1px",
		paddingLeft: "48px",
		"@media (max-width: 900px)": {
			paddingLeft: 0
		},
		boxShadow: "none"
	},
	logo: {
		fontFamily: "Oswald, sans-serif",
		fontWeight: 600,
		color: "#FFFEFE",
		textAlign: "left"
	},
	menuButton: {
		fontFamily: "Oswald, sans-serif",
		fontWeight: 700,
		size: "18px",
	},
	navlink:{
		textDecoration: 'none',
		color: 'white',
		marginLeft: "38px",
		padding: '7px 0px 11px 0px',
		"&.active": {
			borderRadius: '6px',
			border: '1.5px solid rgba(255,255,255,0.5)',
		  }, // eslint-disable-line no-mixed-spaces-and-tabs
	},
	sidelink:{
		textDecoration: 'none',
		color: 'white',
		"&.active": {
			color: '#3c3c3c',
		  }, // eslint-disable-line no-mixed-spaces-and-tabs
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between"
	},
	drawerContainer: {
		padding: "20px 30px"
	},
	paper: {
		background: "linear-gradient(#3AAFA9, #a5adb6)",
		color: "white"
	},
	toolbar2: {
		display: "flex",
		alignItems: "center"
	},
	languageicon: {
		color: "white"
	},
	googleimg: {
		width: "150px"
	},
	toolbar3: {
		display: "flex",
		justifyContent: "space-between",
		flexBasis: "100%",
		alignItems: "center"
	},
	toolbar4: {
		display: "flex",
		alignItems: "center"
	},
	avatar: {
		backgroundColor: "grey",
		width: "34px",
		height: "34px"
	},
	navheader: {
		padding: "0px"
	}
}))

export { useStyles }
