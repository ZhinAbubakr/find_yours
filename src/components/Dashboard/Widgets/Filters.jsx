import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
// import Avatar from "@material-ui/core/Avatar";
import { grey } from "@material-ui/core/colors";
// import Button from "@material-ui/core/Button";
// import ghost from "../../../Assets/Ghost.jpg";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 320,
    marginBottom: "15px",
    borderRadius: "20px",
    width: "300px",
  },
  buttons: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "fit-content",
    margin: "10px",
  },
  button: {
    backgroundColor: "#3AAFA9",
    color: "white",
    margin: "0 25px",
    "&:hover": {
      backgroundColor: "#27938d",
    },
  },
  avatar: {
    backgroundColor: grey[500],
    width: "30px",
    height: "30px",
  },
  header: {
    backgroundColor: "#3AAFA9",
    color: "white",
    height: "15px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Filters() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        // avatar={<Avatar src={ghost} className={classes.avatar} />}
        title="Filters"
        className={classes.header}
      />
      <div className={classes.buttons}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">Catagory</InputLabel>
          <Select
            native
            value={state.catagory}
            onChange={handleChange}
            label="Catagory"
            inputProps={{
              name: "catagory",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>Wallets</option>
            <option value={20}>Documents</option>
            <option value={30}>Other</option>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">City</InputLabel>
          <Select
            native
            value={state.city}
            onChange={handleChange}
            label="City"
            inputProps={{
              name: "city",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>Erbil</option>
            <option value={20}>Baghdad</option>
            <option value={30}>Basrah</option>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">Color</InputLabel>
          <Select
            native
            value={state.color}
            onChange={handleChange}
            label="Color"
            inputProps={{
              name: "color",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>red</option>
            <option value={20}>white</option>
            <option value={30}>blue</option>
          </Select>
        </FormControl>
      </div>
    </Card>
  );
}
