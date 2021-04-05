import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles({
	txtFontSize: {
		fontSize: "0.8rem !important" // hi
	},
	fontTitleSize: {
		fontSize: "1.5rem !important"
	},
	giveP: {
		padding: "2rem !important"
	},
	avatar: {
		height: "200px !important",
		width: "200px !important"
	},
	nameFont: {
		fontSize: "2rem !important"
	},
	avatarFont: {
		fontSize: "1rem !important",
		opacity: "80%"
	},
	"@media  (min-width: 700px)": {
		fontTitleSize: {
			fontSize: "2.5rem !important "
		},
		txtFontSize: {
			fontSize: "1.5rem !important"
		},
		giveP: {
			padding: "6rem !important"
		}
	},
	"@media  (min-width: 960px)": {
		fontTitleSize: {
			fontSize: "3rem !important "
		},
		txtFontSize: {
			fontSize: "2rem !important"
		},
		giveP: {
			padding: "6rem !important"
		}
	}
})

export default useStyles
