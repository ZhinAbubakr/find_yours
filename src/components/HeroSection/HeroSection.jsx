import React from "react"
import useStyles from "./style"
import { Grid, Typography, Container, Box, Button } from "@material-ui/core"
import image from "../../images/undraw_celebration_0jvk.svg"

export default function HeroSection() {
	const classes = useStyles()

	return (
		<div className={classes.bgColor}>
			<Container>
				<Grid
					spacing={4}
					container
					direction="row"
					justify="center"
					alignItems="flex-start">
					<Grid
						container
						direction="column"
						spacing={2}
						item
						xs={12}
						sm={8}
						md={6}
						>
						<Grid item>
							<Typography className={classes.fontTitleSize}>
								FindYours reunites people 
								
								with Lost & Found property
							</Typography>
						</Grid>
						<Grid item>
							<Box color="white">
								<Typography className={classes.txtFontSize}>
									FindYours, a one of a kind internet lost and found, which
									matches users who have lost property to those who have found
									property
								</Typography>
							</Box>
						</Grid>
						<Grid container direction="row" justify="space-between" item>
							<Grid item xs={6}>
								<Button
									className={`${classes.btn} ${classes.foundBtn}`}
									variant="contained" 
									size="large"
									>
									SUBMIT FOUND ITEMS
								</Button>
							</Grid>
							<Grid item xs={6}>
								<Button
									className={`${classes.btn} ${classes.lostBtn}`}
									variant="contained"
									size="large"

									>
									SUBMIT LOST ITEMS
								</Button>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} sm={8} md={6} className={classes.img}>
						<object width="100%" data={image} type="image/svg+xml"  />
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}
