import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
	bgColor: {
		backgroundColor: "#3AAFA9"
	},
	fontTitleSize: {
		fontSize: "2.5rem",
		fontWeight: "bold",
		marginTop:"10rem",
		marginRight:"1.25rem",
		textAlign:"center"
	},
	txtFontSize: {
		fontSize: "1.2rem",
		marginTop:"3.1rem",
		marginRight:"3.75rem",
		marginLeft:"0.6rem"
	},
	img: { 
		background: "white",
		borderRadius: "10px",
		marginTop:"9.5rem",
		marginBottom:"5rem",
	},
	btn: {
		color: "white !important",
		borderRadius: "25px !important",
		marginTop:"50px",
		marginLeft:"20px"
	},
	lostBtn: {
		background: "#2B7A78 !important"
	},
	foundBtn: {
		background: "#17252A !important"
	}
})

export default useStyles
