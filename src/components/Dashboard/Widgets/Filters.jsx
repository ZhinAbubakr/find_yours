import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useStylesFilter } from "./Style.js";
export default function Filters({ handlePosts }) {
  const classes = useStylesFilter();
  const mobileView = useMediaQuery("(max-width: 960px)");
  const [state, setState] = useState({
    category: "",
    Status: "",
    province: "",
    color: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  useEffect(() => {
    handlePosts(state);
  }, [state]);

  return (
    <Card className={classes.root}>
      <CardHeader title="Filters" className={classes.fheader} />
      <div className={classes.fbuttons}>
        <Button
          onClick={() =>
            setState({ category: "", Status: "", province: "", color: "" })
          }
          variant="contained"
          className={classes.cbutton}
          disableElevation
        >
          Clear
        </Button>
        <FormControl variant="outlined" className={classes.fformControl}>
          <InputLabel htmlFor="outlined-age-native-simple">Catagory</InputLabel>
          <Select
            native
            value={state.category}
            onChange={handleChange}
            label="Category"
            inputProps={{
              name: "category",
              id: "outlined-age-native-simple",
            }}
          >
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
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            <option value={true}>Lost</option>
            <option value={false}>Found</option>
          </Select>
        </FormControl>
        {mobileView && (
          <FormControl variant="outlined" className={classes.fformControl}>
            <InputLabel htmlFor="outlined-age-native-simple">City</InputLabel>
            <Select
              native
              value={state.province}
              onChange={handleChange}
              label="City"
              inputProps={{
                name: "province",
                id: "outlined-age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value="baghdad">Baghdad</option>
              <option value="erbil">Erbil</option>
              <option value="basrah">Basrah</option>
              <option value="wasit">Wasit</option>
              <option value="najaf">Najaf</option>
              <option value="sulaymaniyah">Sulaymaniyah</option>
              <option value="saladdin">Saladdin</option>
              <option value="nineveh">Nineveh</option>
              <option value="maysan">Maysan</option>
              <option value="karbala">Karbala</option>
              <option value="kirkuk">Kirkuk</option>
              <option value="diyala">Diyala</option>
              <option value="dhi Qar">Dhi Qar</option>
              <option value="babil">Babil</option>
              <option value="anbar">Anbar</option>
              <option value="duhok">Duhok</option>
              <option value="diwaniya">Diwaniya</option>
              <option value="muthana">Muthana</option>
            </Select>
          </FormControl>
        )}
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
            <option value="red">red</option>
            <option value="white">white</option>
            <option value="blue">blue</option>
          </Select>
        </FormControl>
      </div>
    </Card>
  );
}
