import React from "react"
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button"
// import ghost from "../../../Assets/Ghost.jpg";
import { useStyles } from "./Style.js"

export default function Widget({ handlePosts }) {
	const classes = useStyles()
	// you could write a function here that has city=true in this only function instead of writing them there.
	return (
		<Card className={classes.root}>
			<CardHeader
				// avatar={<Avatar src={ghost} className={classes.avatar} />}
				title="Cities"
				className={classes.header}
			/>
			{/* when need to add a button foll all so the can view all the posts when click on one of the cities */}
			<div className={classes.buttons}>
				<Button
					variant="contained"
					onClick={() => handlePosts({ province: "erbil", city: true })}
					className={classes.button}
					disableElevation>
					Erbil
				</Button>
				<Button
					onClick={() => handlePosts({ province: "baghdad", city: true })}
					variant="contained"
					className={classes.button}
					disableElevation>
					Baghdad
				</Button>
				<Button
					onClick={() => handlePosts({ province: "basrah", city: true })}
					variant="contained"
					className={classes.button}
					disableElevation>
					Basrah
				</Button>
				<Button
					onClick={() => handlePosts({ province: "duhok", city: true })}
					variant="contained"
					className={classes.button}
					disableElevation>
					Duhok
				</Button>
				<Button
					onClick={() => handlePosts({ province: "anbar", city: true })}
					variant="contained"
					className={classes.button}
					disableElevation>
					Anbar
				</Button>
				<Button
					onClick={() => handlePosts({ province: "babil", city: true })}
					variant="contained"
					className={classes.button}
					disableElevation>
					Babil
				</Button>
				<Button
					onClick={() => handlePosts({ province: "dhi Qar", city: true })}
					variant="contained"
					className={classes.button}
					disableElevation>
					Dhi Qar
				</Button>
				<Button
					onClick={() => handlePosts({ province: "diyala", city: true })}
					variant="contained"
					className={classes.button}
					disableElevation>
					Diyala
				</Button>
				<Button
					onClick={() => handlePosts({ province: "kirkuk", city: true })}
					variant="contained"
					className={classes.button}
					disableElevation>
					Kirkuk
				</Button>
				<Button
					onClick={() => handlePosts({ province: "karbala", city: true })}
					variant="contained"
					className={classes.button}
					disableElevation>
					Karbala
				</Button>
				<Button
					onClick={() => handlePosts({ province: "maysan", city: true })}
					variant="contained"
					className={classes.button}
					disableElevation>
					Maysan
				</Button>
				<Button
					onClick={() => handlePosts({ province: "nineveh", city: true })}
					variant="contained"
					className={classes.button}
					disableElevation>
					Nineveh
				</Button>
				<Button
					onClick={() => handlePosts({ province: "saladdin", city: true })}
					variant="contained"
					className={classes.button}
					disableElevation>
					Saladdin
				</Button>
				<Button
					onClick={() => handlePosts({ province: "sulaymaniyah", city: true })}
					variant="contained"
					className={classes.button}
					disableElevation>
					Sulaymaniyah
				</Button>
				<Button
					onClick={() => handlePosts({ province: "najaf", city: true })}
					variant="contained"
					className={classes.button}
					disableElevation>
					Najaf
				</Button>
				<Button
					onClick={() => handlePosts({ province: "wasit", city: true })}
					variant="contained"
					className={classes.button}
					disableElevation>
					Wasit
				</Button>
			</div>
		</Card>
	)
}
