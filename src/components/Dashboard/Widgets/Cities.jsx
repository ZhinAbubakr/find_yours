import React from "react"
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button"
// import ghost from "../../../Assets/Ghost.jpg";
import { useStyles } from "./Style.js"

export default function Widget({ handlePosts, doubleFilter }) {
	const classes = useStyles()
	// you could write a function here that has city=true in this only function instead of writing them there.
	return (
		<Card className={classes.root}>
			<CardHeader
				// avatar={<Avatar src={ghost} className={classes.avatar} />}
				title="Cities"
				className={classes.header}
			/>
			<div className={classes.buttons}>
				<Button
					variant="contained"
					onClick={() => handlePosts({ province: "erbil", city: true })}
					className={`${classes.button} ${
						doubleFilter.province === "erbil" ? classes.activeCityBtn : ""
					}`}
					disableElevation>
					Erbil
				</Button>
				<Button
					onClick={() => handlePosts({ province: "baghdad", city: true })}
					variant="contained"
					className={`${classes.button} ${
						doubleFilter.province === "baghdad" ? classes.activeCityBtn : ""
					}`}
					disableElevation>
					Baghdad
				</Button>
				<Button
					onClick={() => handlePosts({ province: "basrah", city: true })}
					variant="contained"
					className={`${classes.button} ${
						doubleFilter.province === "basrah" ? classes.activeCityBtn : ""
					}`}
					disableElevation>
					Basrah
				</Button>
				<Button
					onClick={() => handlePosts({ province: "duhok", city: true })}
					variant="contained"
					className={`${classes.button} ${
						doubleFilter.province === "duhok" ? classes.activeCityBtn : ""
					}`}
					disableElevation>
					Duhok
				</Button>
				<Button
					onClick={() => handlePosts({ province: "anbar", city: true })}
					variant="contained"
					className={`${classes.button} ${
						doubleFilter.province === "anbar" ? classes.activeCityBtn : ""
					}`}
					disableElevation>
					Anbar
				</Button>
				<Button
					onClick={() => handlePosts({ province: "babil", city: true })}
					variant="contained"
					className={`${classes.button} ${
						doubleFilter.province === "babil" ? classes.activeCityBtn : ""
					}`}
					disableElevation>
					Babil
				</Button>
				<Button
					onClick={() => handlePosts({ province: "dhi Qar", city: true })}
					variant="contained"
					className={`${classes.button} ${
						doubleFilter.province === "dhi Qar" ? classes.activeCityBtn : ""
					}`}
					disableElevation>
					Dhi Qar
				</Button>
				<Button
					onClick={() => handlePosts({ province: "diyala", city: true })}
					variant="contained"
					className={`${classes.button} ${
						doubleFilter.province === "diyala" ? classes.activeCityBtn : ""
					}`}
					disableElevation>
					Diyala
				</Button>
				<Button
					onClick={() => handlePosts({ province: "kirkuk", city: true })}
					variant="contained"
					className={`${classes.button} ${
						doubleFilter.province === "kirkuk" ? classes.activeCityBtn : ""
					}`}
					disableElevation>
					Kirkuk
				</Button>
				<Button
					onClick={() => handlePosts({ province: "karbala", city: true })}
					variant="contained"
					className={`${classes.button} ${
						doubleFilter.province === "karbala" ? classes.activeCityBtn : ""
					}`}
					disableElevation>
					Karbala
				</Button>
				<Button
					onClick={() => handlePosts({ province: "maysan", city: true })}
					variant="contained"
					className={`${classes.button} ${
						doubleFilter.province === "maysan" ? classes.activeCityBtn : ""
					}`}
					disableElevation>
					Maysan
				</Button>
				<Button
					onClick={() => handlePosts({ province: "nineveh", city: true })}
					variant="contained"
					className={`${classes.button} ${
						doubleFilter.province === "nineveh" ? classes.activeCityBtn : ""
					}`}
					disableElevation>
					Nineveh
				</Button>
				<Button
					onClick={() => handlePosts({ province: "saladdin", city: true })}
					variant="contained"
					className={`${classes.button} ${
						doubleFilter.province === "saladdin" ? classes.activeCityBtn : ""
					}`}
					disableElevation>
					Saladdin
				</Button>
				<Button
					onClick={() => handlePosts({ province: "sulaymaniyah", city: true })}
					variant="contained"
					className={`${classes.button} ${
						doubleFilter.province === "sulaymaniyah"
							? classes.activeCityBtn
							: ""
					}`}
					disableElevation>
					Sulaymaniyah
				</Button>
				<Button
					onClick={() => handlePosts({ province: "najaf", city: true })}
					variant="contained"
					className={`${classes.button} ${
						doubleFilter.province === "najaf" ? classes.activeCityBtn : ""
					}`}
					disableElevation>
					Najaf
				</Button>
				<Button
					onClick={() => handlePosts({ province: "wasit", city: true })}
					variant="contained"
					className={`${classes.button} ${
						doubleFilter.province === "wasit" ? classes.activeCityBtn : ""
					}`}
					disableElevation>
					Wasit
				</Button>
			</div>
		</Card>
	)
}
