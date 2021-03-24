import React from "react"
import useStyles from "./Style"
import { Grid, Container, Typography, Box } from "@material-ui/core"
import team from "../../images/team.svg"
import feedback from "../../images/undraw_design_feedback_dexe.svg"
import search from "../../images/undraw_Web_search_re_efla.svg"

export default function AboutUs() {
	const classes = useStyles()
	return (
		<Container>
			<Box mt={12}>
				<Grid container direction="row" justify="center" alignItems="center">
					<Grid item xs={6}>
						<Typography className={classes.fontTitleSize}>ABOUT US</Typography>
					</Grid>
					<Grid item xs={6}>
						<object width="100%" data={team} type="image/svg+xml" />
					</Grid>
				</Grid>
				<Grid container justify="center" item xs={12}>
					<span>
						<Typography className={`${classes.fontTitleSize} ${classes.giveP}`}>
							What we Give you
						</Typography>
					</span>
				</Grid>

				<Grid container direction="row" justify="center" alignItems="center">
					<Grid item xs={7} style={{ textAlign: "right" }}>
						<Box pr={4}>
							<Typography className={classes.txtFontSize}>
								we can help you to find your lost things
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={5}>
						<Box>
							<object width="90%" data={search} type="image/svg+xml" />
						</Box>
					</Grid>
				</Grid>

				<Grid container direction="row" justify="center" alignItems="center">
					<Grid item xs={6} style={{ alignItems: "flex-end" }}>
						<Box>
							<object width="90%" data={feedback} type="image/svg+xml" />
						</Box>
					</Grid>
					<Grid item xs={6}>
						<Box>
							<Typography className={classes.txtFontSize}>
								If you found something and you want to get it back to the right
								owner
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Container>
	)
}
