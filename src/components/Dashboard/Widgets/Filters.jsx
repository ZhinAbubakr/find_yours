import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import ghost from "../../../Assets/Ghost.jpg";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useStylesFilter } from "./Style.js";

export default function Filters() {
  const classes = useStylesFilter();

  const [state, setState] = React.useState({
    age: "",
    name: "hi",
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
        className={classes.fheader}
      />
      <div className={classes.fbuttons}>
        <FormControl variant="outlined" className={classes.fformControl}>
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
        <FormControl variant="outlined" className={classes.fformControl}>
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
        <FormControl variant="outlined" className={classes.fformControl}>
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
