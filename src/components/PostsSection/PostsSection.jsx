import React, { useEffect, useState } from "react"
import { db } from "../../firebase"
import useStyles from "./style"
import { ThemeProvider } from "@material-ui/styles"
import { theme } from "./style"
import { Typography, Button, Grid, CssBaseline, Box } from "@material-ui/core"
import Post from "../Dashboard/Post/Post"

export default function Posts() {
	const classes = useStyles()
	const [posts, setPosts] = useState([])
	const [postsNum, setPostsNum] = useState(10)
	const [showMoreBtn, setShowMoreBtn] = useState(true)

	useEffect(() => {
		const res = []
		db.collection("posts")
			.limit(postsNum)
			.get()
			.then((snapshot) => {
				snapshot.docs.map((doc) => res.push(doc.data()))
				setPosts(res)
			})
		db.collection("posts")
			.get()
			.then((snap) => setShowMoreBtn(snap.size > postsNum))
	}, [postsNum])

	return (
		<div>
			<CssBaseline />
			<Box pb={2} pt={4}>
				<ThemeProvider theme={theme}>
					<Typography
						className={classes.heroTypography}
						component="h1"
						variant="h4"
						gutterBottom>
						Featured Lost Items
					</Typography>
					<Typography
						className={classes.heroTypography2}
						variant="h6"
						paragraph>
						View our recently featured Lost and Found property entries
					</Typography>
				</ThemeProvider>
			</Box>
			<div className={classes.posts}>
				{posts ? (
					<>
						{posts.map((post, i) => (
							<Post key={i} post={post} />
						))}
						{showMoreBtn && (
							<Grid container item justify="center">
								<Box pb={2}>
									<Button
										onClick={() => setPostsNum(postsNum + 10)}
										className="showMoreBtn">
										show more
									</Button>
								</Box>
							</Grid>
						)}
					</>
				) : (
					<CircularProgress />
				)}
			</div>
		</div>
	)
}
