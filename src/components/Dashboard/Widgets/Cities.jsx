import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
// import Avatar from "@material-ui/core/Avatar";
import { grey } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
// import ghost from "../../../Assets/Ghost.jpg";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 320,
    marginBottom: "15px",
    borderRadius: "20px",
    width: "300px",
  },
  buttons: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "15px 0px",
  },
  button: {
    backgroundColor: "#3AAFA9",
    color: "white",
    margin: "5px",
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
}));

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
      </div>
    </Card>
  );
}
