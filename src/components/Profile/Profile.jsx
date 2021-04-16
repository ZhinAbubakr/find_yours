import React, { useState, useEffect, useContext } from "react";
import Post from "../Dashboard/Post/Post";
import useStyles from "./style";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./style";
import {
	Container,
	Button,
	Grid,
	Typography,
	CardMedia,
	Divider,
	Box,
	ListItem
} from "@material-ui/core";
import { ProfileContext } from "../../profileContext";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FORM_ROUTE } from "../../containers/routes";

export default function Profile() {
	const classes = useStyles();

	const [posts, setPosts] = useState([]);
	const [profile] = useContext(ProfileContext);

	useEffect(() => {
		if (profile) {
			db.collection("posts")
				.where("userID", "==", `${profile ? profile.googleId : null}`)
				.onSnapshot((snapshot) => {
					setPosts(snapshot.docs.map((doc) => doc.data()));
				});
		}
	}, [profile]);

	const profileInfo = (
		<ListItem>
			<Grid container justify="space-around">
				<Grid item xs={12} sm={5}>
					<Box pb={2}>
						<Typography variant="body1" color="textSecondary">
							Full name
						</Typography>
						<Typography variant="body1">
							{profile.name || "Name Not provided"}
						</Typography>
						<Divider />
					</Box>
				</Grid>
				<Grid item xs={12} sm={5}>
					<Typography variant="body1" color="textSecondary">
						Email
					</Typography>
					<Typography variant="body1">
						{profile.email || "Email Not provided"}
					</Typography>
					<Divider />
				</Grid>
			</Grid>
		</ListItem>
	);
	return (
		<>
			<Container className={classes.container} maxWidth="lg">
				<ThemeProvider theme={theme}>
					<Typography variant="h4" className={classes.headerTypo}>
						{profile.name}
					</Typography>
					<Grid container spacing={3} direction="row">
						<Grid item xs={12} sm={6} md={3}>
							<Container maxWidth="sm">
								<CardMedia
									component="img"
									className={classes.media}
									src={profile.imageUrl}
									title="x"
								/>
							</Container>
						</Grid>
						{posts.length === 0 && profileInfo}
						{posts.map((post, i) => (
							<Grid key={i} item xs={12} md={8} className={classes.container3}>
								{profileInfo}
								<br />
								<ListItem>
									<Grid container justify="space-around">
										<Grid item xs={12} sm={5}>
											<Box pb={2}>
												<Typography variant="body1" color="textSecondary">
													Address
												</Typography>
												<Typography variant="body1">
													{post.province || "Address Not provided"}
												</Typography>
												<Divider />
											</Box>
										</Grid>
										<Grid item xs={12} sm={5}>
											<Typography variant="body1" color="textSecondary">
												Phone No.
											</Typography>
											<Typography variant="body1">
												{post.phone || "Phone No. Not provided"}
											</Typography>
											<Divider />
										</Grid>
									</Grid>
								</ListItem>
							</Grid>
						))}
					</Grid>
				</ThemeProvider>
			</Container>

			<Divider variant="inset" className={classes.divider} />

			<ThemeProvider theme={theme}>
				<Grid container justify="space-around" spacing={2}>
					<Grid>
						<Typography variant="h6" style={{ fontWeight: "bold" }}>
							My Posts
						</Typography>
					</Grid>

					<Grid xs={12} item>
						{posts.length === 0 && (
							<Typography variant="h6" className={classes.noPosts}>
								you do not have any posts to show!
							</Typography>
						)}
					</Grid>

					{posts ? (
						posts.map((post, i) => (
							<Grid align="center" key={i} item xs={12} sm={6} md={4}>
								<Post post={post} />
							</Grid>
						))
					) : (
						<Grid xs={12}>
							<CircularProgress style={{ marginLeft: "45%" }} />
						</Grid>
					)}

					<Grid align="right" item xs={12}>
						<Box px={2} py={2}>
							<Link to={FORM_ROUTE} className={classes.links}>
								<Button className={classes.button} variant="contained">
									Add Post
								</Button>
							</Link>
						</Box>
					</Grid>
				</Grid>
			</ThemeProvider>
		</>
	);
}
