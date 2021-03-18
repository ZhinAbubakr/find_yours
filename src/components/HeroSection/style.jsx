import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
	bgColor: {
		backgroundColor: "#3AAFA9"
	},
	fontTitleSize: {
		fontSize: "2.5rem",
		fontWeight: "bold",
		marginTop:"160px",
		marginRight:"20px",
		textAlign:'center'
	},
	txtFontSize: {
		fontSize: "1.2rem",
		marginTop:"50px",
		marginRight:"60px",
		marginLeft:"10px",
		textAlign:'center'
	},
	img: {
		background: "white",
		borderRadius: "10px",
		marginTop:"150px",
		marginBottom:"80px"
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
