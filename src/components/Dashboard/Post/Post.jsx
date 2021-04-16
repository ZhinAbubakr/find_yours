import React from "react"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import { MdMoreVert } from "react-icons/md"
import Button from "@material-ui/core/Button"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import Chip from "@material-ui/core/Chip"
import ErrorIcon from "@material-ui/icons/Error"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import { useStyles } from "./Style"
import { Link } from "react-router-dom"

export default function RecipeReviewCard({ post }) {
	const classes = useStyles()
	return (
		<Card className={classes.root}>
			<div>
				<CardHeader
					avatar={<Avatar src={post.avatar} className={classes.avatar} />}
					action={
						<IconButton aria-label="settings">
							<MdMoreVert />
						</IconButton>
					}
					title={post.name}
					subheader={
						<>
							<div style={{ textTransform: "capitalize" }}>
								{post.date.toDate().toDateString()}, {post.province}
							</div>
							{post.isLost ? (
								<Chip
									className={classes.lostTag}
									color="secondary"
									size="small"
									icon={<ErrorIcon className={classes.tagIcon} />}
									label="Lost"
								/>
							) : (
								<Chip
									className={classes.foundTag}
									color="primary"
									size="small"
									icon={<CheckCircleIcon className={classes.tagIcon} />}
									label="Found"
								/>
							)}
						</>
					}
				/>
				<CardContent className={classes.content}>
					<Typography variant="h6" color="textSecondary" component="p">
						{post.title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{post.body}
					</Typography>
				</CardContent>
			</div>
			<div>
				<GridList className={classes.gridList1} cols={2.5}>
					{post.images.map((img) => (
						<GridListTile className={classes.image} key={img.length}>
							<img src={img} alt="Post image" />
							<GridListTileBar
								classes={{
									root: classes.titleBar1,
									title: classes.title1
								}}
							/>
						</GridListTile>
					))}
				</GridList>
				<CardActions disableSpacing>
					<Link to={`/post/${post.id}`} className={classes.links}>
						<Button className={classes.button}>contact</Button>
					</Link>
				</CardActions>
			</div>
		</Card>
	)
}
