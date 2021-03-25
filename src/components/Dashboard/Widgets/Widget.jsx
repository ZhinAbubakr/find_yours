import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ghost from "../../../Assets/Ghost.jpg";
import { useStylesWidgets } from "./Style";

export default function Widget() {
  const classes = useStylesWidgets();
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
