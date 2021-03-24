import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { grey } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import ghost from "../../../Assets/Ghost.jpg";

const useStyles = makeStyles(() => ({
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
    height: "170px",
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
}));

export default function LastPosts() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={ghost} className={classes.avatar} />}
        title="Othman"
        className={classes.header}
      />
      <div className={classes.buttons}>
        <Button variant="contained" className={classes.button} disableElevation>
          Profile
        </Button>
        <Button variant="contained" className={classes.button} disableElevation>
          favorite
        </Button>
        <Button variant="contained" className={classes.button} disableElevation>
          my posts
        </Button>
      </div>
    </Card>
  );
}
