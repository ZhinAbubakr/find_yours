import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
// import ghost from "../../../Assets/Ghost.jpg";
import { useStyles } from "./Style.js";

export default function Widget() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        // avatar={<Avatar src={ghost} className={classes.avatar} />}
        title="Cities"
        className={classes.header}
      />
      <div className={classes.buttons}>
        <Button variant="contained" className={classes.button} disableElevation>
          Erbil
        </Button>
        <Button variant="contained" className={classes.button} disableElevation>
          Baghdad
        </Button>
        <Button variant="contained" className={classes.button} disableElevation>
          Basrah
        </Button>
        <Button variant="contained" className={classes.button} disableElevation>
          Duhok
        </Button>
        <Button variant="contained" className={classes.button} disableElevation>
          anbar
        </Button>
        <Button variant="contained" className={classes.button} disableElevation>
          Babil
        </Button>
        <Button variant="contained" className={classes.button} disableElevation>
          Dhi Qar
        </Button>
        <Button variant="contained" className={classes.button} disableElevation>
          Diyala
        </Button>
        <Button variant="contained" className={classes.button} disableElevation>
          Kirkuk
        </Button>
        <Button variant="contained" className={classes.button} disableElevation>
          Karbala
        </Button>
        <Button variant="contained" className={classes.button} disableElevation>
          Maysan
        </Button>
        <Button variant="contained" className={classes.button} disableElevation>
          Nineveh
        </Button>
        <Button variant="contained" className={classes.button} disableElevation>
          Saladdin
        </Button>
        <Button variant="contained" className={classes.button} disableElevation>
          Sulaymaniyah
        </Button>
        <Button variant="contained" className={classes.button} disableElevation>
          Najaf
        </Button>
        <Button variant="contained" className={classes.button} disableElevation>
          Wasit
        </Button>
      </div>
    </Card>
  );
}
