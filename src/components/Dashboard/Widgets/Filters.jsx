import React, { useEffect } from "react"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import ghost from "../../../Assets/Ghost.jpg";
import { db } from "../../../firebase"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { useStylesFilter } from "./Style.js"
export default function Filters() {
	const classes = useStylesFilter()

	const [state, setState] = React.useState({
		// Status: false,
		// "category ": "",
		// color: "",
		// city: ""
	})
	const [, setPosts] = React.useState([])

	const handleChange = (event) => {
		const name = event.target.name
		setState({
			...state,
			[name]: event.target.value
		})
	}

	useEffect(() => {
		// to prevent the first render.
		if (Object.keys(state).length != 0) {
			handlePosts()
		}
	}, [state])

	const handlePosts = () => {
		const res = []

		const query = db.collection("posts")
		const category = state.category
			? query.where("category ", "==", state["category"])
			: query
		const color = state.color
			? category.where("color", "==", state["color"])
			: category
		const province = state.province
			? color.where("province", "==", state["province"])
			: color
		const check = state["Status"] === "true" ? true : false
		const isLost = state.Status
			? province.where("isLost", "==", check)
			: province

		isLost.get().then((snapshot) => {
			snapshot.docs.map((doc) => res.push(doc.data()))
			setPosts(res)
		})
	}
	return (
		<Card className={classes.root}>
			<CardHeader
				// avatar={<Avatar src={ghost} className={classes.avatar} />}
				title="Filters"
				className={classes.fheader}
			/>
			<div className={classes.fbuttons}>
				<FormControl variant="outlined" className={classes.fformControl}>
					<InputLabel htmlFor="outlined-age-native-simple">Catagory</InputLabel>
					<Select
						native
						value={state.category}
						onChange={handleChange}
						label="Category"
						inputProps={{
							name: "category",
							id: "outlined-age-native-simple"
						}}>
						<option aria-label="None" value="" />
						<option value="wallets">Wallets</option>
						<option value="documents">Documents</option>
						<option value="other">Other</option>
					</Select>
				</FormControl>
				<FormControl variant="outlined" className={classes.fformControl}>
					<InputLabel htmlFor="outlined-age-native-simple">Status</InputLabel>
					<Select
						native
						value={state.Status}
						onChange={handleChange}
						label="Status"
						inputProps={{
							name: "Status",
							id: "outlined-age-native-simple"
						}}>
						<option aria-label="None" value="" />
						<option value={true}>Lost</option>
						<option value={false}>Found</option>
					</Select>
				</FormControl>
				<FormControl variant="outlined" className={classes.fformControl}>
					<InputLabel htmlFor="outlined-age-native-simple">City</InputLabel>
					<Select
						native
						value={state.province}
						onChange={handleChange}
						label="City"
						inputProps={{
							name: "province",
							id: "outlined-age-native-simple"
						}}>
						<option aria-label="None" value="" />
						<option value="erbil">Erbil</option>
						<option value="baghdad">Baghdad</option>
						<option value="basrah">Basrah</option>
					</Select>
				</FormControl>
				<FormControl variant="outlined" className={classes.fformControl}>
					<InputLabel htmlFor="outlined-age-native-simple">Color</InputLabel>
					<Select
						native
						value={state.color}
						onChange={handleChange}
						label="Color"
						inputProps={{
							name: "color",
							id: "outlined-age-native-simple"
						}}>
						<option aria-label="None" value="" />
						<option value="red">red</option>
						<option value="white">white</option>
						<option value="blue">blue</option>
					</Select>
				</FormControl>
			</div>
		</Card>
	)
}
