import React, { useContext } from "react";
import { ProfileContext } from "../../../profileContext";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { useStylesWidgets } from "./Style";
import { MdMoreVert } from "react-icons/md";
import IconButton from "@material-ui/core/IconButton";

export default function Widget() {
  const [profile] = useContext(ProfileContext);
  const classes = useStylesWidgets();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <div>
            <Avatar src={profile.imageUrl} className={classes.avatar} />
            <div
              style={{
                display: "inline",
                position: "absolute",
                left: "275px",
                top: "80px",
              }}
            >
              <IconButton>
                <MdMoreVert />
              </IconButton>
            </div>
          </div>
        }
        title={profile.name}
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
