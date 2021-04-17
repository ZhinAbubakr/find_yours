import React, { useState, useEffect } from "react";
import useStyles from "./style";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./style";
import {
	Container,
	Grid,
	Typography,
	CardMedia,
	Divider,
	ListItem,
	Paper
} from "@material-ui/core";
import { db } from "../../firebase";
import CircularProgress from "@material-ui/core/CircularProgress";

function ViewPost(props) {
	const classes = useStyles();
	const [post, setPosts] = useState();
	useEffect(() => {
		db.collection("posts")
			.doc(props.match.params.id)
			.get()
			.then((docRef) => {
				setPosts(docRef.data());
			})
			.catch((error) => {
				alert(error);
			});
	}, [props.match.params.id]);
	return (
		<>
			<Container className={classes.container}>
				{post ? (
					<Paper className={classes.paper}>
						<ThemeProvider theme={theme}>
							<Typography variant="h4" className={classes.headerTypo}>
								Item Lost Information:
							</Typography>
							<Grid container>
								<Grid item xs={12} sm={8} md={3}>
									<CardMedia
										className={classes.media}
										component="img"
										src={post.image}
									/>
								</Grid>
								<Grid item xs={12} sm={6} md={8}>
									<ListItem>
										<Container maxWidth="lg" className={classes.container2}>
											<Typography variant="body1" color="textSecondary">
												Item title:
											</Typography>
											<Typography variant="body1">{post.title}</Typography>
											<Divider />
										</Container>
										<Container maxWidth="lg" className={classes.container2}>
											<Typography variant="body1" color="textSecondary">
												Date Lost:
											</Typography>
											<Typography variant="body1">{post.date}</Typography>
											<Divider />
										</Container>
									</ListItem>
									<br />
									<ListItem>
										<Container maxWidth="lg">
											<Typography variant="body1" color="textSecondary">
												Where Lost:
											</Typography>
											<Typography variant="body1">{post.province}</Typography>
											<Divider />
										</Container>
										<Container maxWidth="lg">
											<Typography variant="body1" color="textSecondary">
												Color:
											</Typography>
											<Typography variant="body1">{post.color}</Typography>
											<Divider />
										</Container>
										<Container maxWidth="lg">
											<Typography variant="body1" color="textSecondary">
												Category:
											</Typography>
											<Typography variant="body1">{post.category}</Typography>
											<Divider />
										</Container>
									</ListItem>
									<br />
									<ListItem>
										<Container maxWidth="lg">
											<Typography variant="body1" color="textSecondary">
												Aditional Information:
											</Typography>
											<Typography variant="body1">
												{post.body.map((word, i) => (
													<span key={i}>{word} </span>
												))}
											</Typography>
											<Divider />
										</Container>
									</ListItem>
								</Grid>
							</Grid>

							<Typography variant="h4" className={classes.typo1}>
								Contact Information:
							</Typography>

							<Grid container spacing={3} className={classes.container3}>
								<Grid item xs={12} md={8}>
									<ListItem>
										<Container className={classes.container2}>
											<Typography variant="body1" color="textSecondary">
												Name:
											</Typography>
											<Typography variant="body1">{post.name}</Typography>
											<Divider />
										</Container>
										<Container className={classes.container2}>
											<Typography variant="body1" color="textSecondary">
												Facebook account:
											</Typography>
											<Typography variant="body1">
												{post.facebook ? (
													<a href={post.facebook}>{post.facebook}</a>
												) : (
													"No Account Provided."
												)}
											</Typography>
											<Divider />
										</Container>
									</ListItem>
									<br />
									<ListItem>
										<Container maxWidth="lg">
											<Typography variant="body1" color="textSecondary">
												Email:
											</Typography>
											<Typography variant="body1">
												{post.email ? (
													<a href={`mailto:${post.email}`}>{post.email}</a>
												) : (
													"No Email Provided."
												)}
											</Typography>
											<Divider />
										</Container>
										<Container maxWidth="lg">
											<Typography variant="body1" color="textSecondary">
												Phon No.
											</Typography>
											<Typography variant="body1">
												{post.phone ? post.phone : "No Phone Number Provided."}
											</Typography>
											<Divider />
										</Container>
									</ListItem>
								</Grid>
							</Grid>
						</ThemeProvider>
					</Paper>
				) : (
					<Grid container justify="center" style={{ padding: "300px" }}>
						<CircularProgress />
					</Grid>
				)}
			</Container>
		</>
	);
}

export default ViewPost;
