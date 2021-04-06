import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
	bgColor: {
		backgroundColor: "#3AAFA9"
	},
	txtFontSize: {
		fontSize: "1.2rem",
		marginTop: "3.1rem",
		marginRight: "3.75rem",
		marginLeft: "0.6rem"
	},
	btn: {
		color: "white !important",
		borderRadius: "25px !important",
		marginTop: "50px",
		marginLeft: "20px"
	},
	lostBtn: {
		background: "#2B7A78 !important"
	},
	foundBtn: {
		background: "#17252A !important"
	},
	img: {
		background: "white",
		borderRadius: "10px",
		marginTop: "3rem",
		marginBottom: "5rem"
	},
	fontTitleSize: {
		fontSize: "1.5rem",
		fontWeight: "bold",
		marginRight: "1.25rem",
		marginTop: "3rem",
		textAlign: "center"
	},
	link: {
		textDecoration: 'none'
	},

	"@media  (min-width: 960px)": {
		img: {
			background: "white",
			borderRadius: "10px",
			marginTop: "9.5rem",
			marginBottom: "5rem"
		},
		fontTitleSize: {
			fontSize: "2.5rem",
			fontWeight: "bold",
			marginRight: "1.25rem",
			marginTop: "9.5rem",
			textAlign: "center"
		}
	}
})

export default useStyles
