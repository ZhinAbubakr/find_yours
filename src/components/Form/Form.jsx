import { Paper, Grid, Select, MenuItem } from "@material-ui/core";
import React, { useContext, useState } from "react";
import useStyles from "./Style";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { db } from "../../firebase";
import { storage } from "../../firebase";
import "date-fns";
import { ProfileContext } from "../../profileContext";
// import IconButton from '@material-ui/core/IconButton';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';

const Form = () => {
	const [selectedDate, setSelectedDate] = React.useState("");
	const [profile] = useContext(ProfileContext);
	const [item, setItem] = useState("");
	const [isLost, setIsLost] = useState("");
	const [color, setColor] = useState("");
	const [whereLost, setWhereLost] = useState("");
	const [phone, setPhone] = useState("");
	const [image, setImage] = useState(null);
	const [more, setMore] = useState("");
	const [email, setEmail] = useState("");
	const [category, setCategory] = React.useState("");
	const [facebook, setFacebook] = React.useState("");
	const classes = useStyles();

	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		const storageRef = storage.ref();
		const fileRef = storageRef.child(`images/${file.name}`);

		fileRef.put(file).then(() =>
			storage
				.ref("images")
				.child(file.name)
				.getDownloadURL()
				.then((url) => setImage(url))
		);
	};

	const handleChangeCat = (event) => {
		setCategory(event.target.value);
	};

	const handleChangeLoc = (event) => {
		setWhereLost(event.target.value);
	};

	const handleChangeCol = (event) => {
		setColor(event.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		db.collection("posts")
			.add({
				avatar: profile.imageUrl,
				title: item,
				isLost: isLost,
				category: category,
				color: color,
				province: whereLost,
				name: profile.name,
				phone: phone,
				date: selectedDate,
				country: "Iraq",
				body: more.split(" "),
				email: email,
				facebook: facebook,
				userId: profile.googleId,
				image: image
			})

			.then(() => {
				alert("Submited");
			})

			.catch((error) => {
				alert(error.message);
			});

		setIsLost("");
		setItem("");
		setImage("");
		setFacebook("");
		setColor("");
		setWhereLost("");
		setPhone("");
		setSelectedDate("");
		setImage("");
		setMore("");
		setEmail("");
		setCategory("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={12} lg={6}>
						<Paper className={classes.paper}>
							<h4 className={classes.title}>Property</h4>
							<p className={classes.desc}>
								(Dog, Jacket, Smartphone, Wallet, etc.)
							</p>
							<TextField
								id="outlined-basic"
								label="property"
								variant="outlined"
								className={classes.input}
								value={item}
								onChange={(e) => setItem(e.target.value)}
								required
							/>
							<h4 className={classes.title}>Category</h4>
							<p className={classes.desc}>
								(Animals/Pets, Clothing, Electronics, Personal Accessories etc.)
								This field is required.
							</p>

							<Select
								className={classes.input}
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={category}
								onChange={handleChangeCat}
								required>
								<MenuItem value="documents">Documents</MenuItem>
								<MenuItem value="animals/pets">Animals/Pets</MenuItem>
								<MenuItem value="clothing">Clothing</MenuItem>
								<MenuItem value="electronics">Electronics</MenuItem>
								<MenuItem value="personal accessories">
									Personal Accessories
								</MenuItem>
								<MenuItem value="other">Other</MenuItem>
							</Select>
							<h4 className={classes.title}>Color</h4>
							<p className={classes.desc}>
								Please add the color that best represents the property (Black,
								Red, Blue, etc.)
							</p>
							<Select
								className={classes.input}
								labelId="color"
								id="demo-simple-select"
								value={color}
								onChange={handleChangeCol}
								required>
								<MenuItem value="black">Black</MenuItem>
								<MenuItem value="white">White</MenuItem>
								<MenuItem value="red">Red</MenuItem>
								<MenuItem value="green">Green</MenuItem>
								<MenuItem value="yellow">Yellow</MenuItem>
								<MenuItem value="blue">Blue</MenuItem>
								<MenuItem value="pink">Pink</MenuItem>
								<MenuItem value="gray">Gray</MenuItem>
								<MenuItem value="brown">Brown</MenuItem>
								<MenuItem value="orange">Orange</MenuItem>
								<MenuItem value="purple">Purple</MenuItem>
							</Select>
							<h4 className={classes.title}>Where Lost</h4>
							<p className={classes.desc}>
								Please provide an approximate location of city
							</p>
							<Select
								className={classes.input}
								labelId="Provinces"
								id="demo-simple-select"
								value={whereLost}
								onChange={handleChangeLoc}
								required>
								<MenuItem value="baghdad">Baghdad</MenuItem>
								<MenuItem value="babil">Erbil</MenuItem>
								<MenuItem value="basra">Basrah</MenuItem>
								<MenuItem value="saladdin">Saladdin</MenuItem>
								<MenuItem value="nineveh">Nineveh</MenuItem>
								<MenuItem value="maysan">Maysan</MenuItem>
								<MenuItem value="karbala">Karbala</MenuItem>
								<MenuItem value="karbala">Kirkuk</MenuItem>
								<MenuItem value="diyala">Diyala</MenuItem>
								<MenuItem value="dhi Qar">Dhi Qar</MenuItem>
								<MenuItem value="babil">Babil</MenuItem>
								<MenuItem value="anbar">Anbar</MenuItem>
								<MenuItem value="duhok">Duhok</MenuItem>
								<MenuItem value="nineveh">Nineveh</MenuItem>
								<MenuItem value="diwaniya">Diwaniya</MenuItem>
								<MenuItem value="wuthana">Muthana</MenuItem>
								<MenuItem value="wasit">Wasit</MenuItem>
								<MenuItem value="sulaymaniyah">Sulaymaniyah</MenuItem>
							</Select>

							<h2 className={classes.contact}>Contact Information.</h2>
							<h4 className={classes.title}>Phone Number</h4>
							<p className={classes.desc}>
								Please enter the phone number to display on your submission
							</p>
							<TextField
								id="outlined-basic"
								label="Phone Number"
								variant="outlined"
								className={classes.input}
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								required
								type="number"
							/>

							<h4 className={classes.title}>Facebook Acount</h4>
							<p className={classes.desc}>
								Please enter the facebook link to display on your post.
							</p>
							<TextField
								id="outlined-basic"
								label="facebook link"
								variant="outlined"
								className={classes.input}
								value={facebook}
								onChange={(e) => setFacebook(e.target.value)}
								required
								type="text"
							/>
						</Paper>
					</Grid>
					<Grid item xs={12} lg={6}>
						<Paper className={classes.paper}>
							<h4 className={classes.title}>Lost Or Found</h4>
							<p className={classes.desc}>Select type</p>
							<Select
								className={classes.input}
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={isLost}
								onChange={(e) => setIsLost(e.target.value)}
								required>
								<MenuItem value={true}>Lost</MenuItem>
								<MenuItem value={false}>Found</MenuItem>
							</Select>
							<h4 className={classes.title}>Date </h4>
							<p className={classes.desc}>
								Please add the approximate date of when the item was lost/found.
							</p>

							<TextField
								id="date"
								label="Date"
								type="date"
								value={selectedDate}
								onChange={(e) => setSelectedDate(e.target.value)}
								className={classes.input}
								InputLabelProps={{
									shrink: true
								}}
								required
							/>

							<h4 className={classes.title}>Image</h4>
							<p className={classes.desc}>
								(This image will display on the website.)
							</p>
							<input
								type="file"
								onChange={(e) => handleImageUpload(e)}
								id="contained-button-file"
								className={classes.input}
							/>
							<label htmlFor="contained-button-file">
								<Button variant="contained" color="primary" component="span">
									Upload
								</Button>
							</label>
							<h4 className={classes.title}>Additional Information</h4>
							<p className={classes.desc}>
								Please provide any additional details/description of your lost
								property.
							</p>
							<TextField
								id="outlined-basic"
								label="Additional Information"
								variant="outlined"
								className={classes.input}
								value={more}
								onChange={(e) => setMore(e.target.value)}
							/>
							<h4 className={classes.title}>Email</h4>
							<p className={classes.desc}>
								Please enter the email to display on your submission
							</p>
							<TextField
								id="outlined-basic"
								label="Email"
								variant="outlined"
								className={classes.input}
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</Paper>
					</Grid>
					<Grid
						container
						spacing={0}
						direction="column"
						alignItems="center"
						justify="center"
						style={{ minHeight: "1vh" }}>
						<Grid item xs={3}>
							<Button
								variant="contained"
								className={classes.button}
								color="primary"
								type="submit">
								Submit
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</form>
	);
};

export default Form;
