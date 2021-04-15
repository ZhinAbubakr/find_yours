import React from "react"
import {
	Button,
	CssBaseline,
	TextField,
	Grid,
	Box,
	Typography,
	Container
} from "@material-ui/core"
import { useStyles } from "./Style.js"

export default function ContactUsForm(props) {
	const classes = useStyles()
	const { firstName, lastName, email, text } = props.value
	const {
		handleEmail,
		handleFirstName,
		handleLastName,
		handleText,
		handleSubmit
	} = props
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box mb={20.9} mt={16}>
				<div className={classes.paper}>
					<Typography component="h1" variant="h5">
						Thanks for taking time to reach out <br /> How can we help you today
						?
					</Typography>
					<form className={classes.form} onSubmit={handleSubmit}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									value={firstName}
									onChange={(e) => handleFirstName(e)}
									autoComplete="fname"
									name="firstName"
									variant="outlined"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									value={lastName}
									onChange={(e) => handleLastName(e)}
									variant="outlined"
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="lname"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									value={email}
									onChange={(e) => handleEmail(e)}
									variant="outlined"
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									value={text}
									onChange={(e) => handleText(e)}
									variant="outlined"
									required
									fullWidth
									name="textarea"
									label="Message"
									type="TextareaAutosize"
									id="textarea"
								/>
							</Grid>
							<Grid item xs={12}></Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color={classes.Color}
							className={`${classes.submit} ${classes.backgroundColor}`}>
							Submit
						</Button>
					</form>
				</div>
			</Box>
		</Container>
	)
}
