import { makeStyles } from "@material-ui/core/styles"
import { createMuiTheme } from "@material-ui/core/styles"

const useStyles = makeStyles({
	posts: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-evenly"
	},
	heroTypography: {
		fontWeight: "bold",
		textAlign: "center",
		color: "textPrimary"
	},
	heroTypography2: {
		textAlign: "center",
		color: "textPrimary"
	},
	showMoreBtn: {
		color: "white !important",
		background: "#3aafa9 !important"
	}
})

export const theme = createMuiTheme({
	typography: {
		fontFamily: ["Poppins", "sans-serif"].join(",")
	},
	palette: {
		primary: {
			main: "#17252a"
		},
		secondary: {
			main: "#3aafa9"
		}
	}
})

export default useStyles
