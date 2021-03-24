import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Post from "./Post/Post";

import React from "react";
import Widget from "./Widgets/Widget";
import ghost from "../../Assets/Ghost.jpg";
import LastPosts from "./Widgets/LastPosts";
import Cities from "./Widgets/Cities";
import Filters from "./Widgets/Filters";

export default function Dashboard() {
  const useStyles = makeStyles(() => ({
    button: {
      color: "white",
      margin: "0 5px",
      backgroundColor: "#3AAFA9",
      "&:hover": {
        backgroundColor: "#27938d",
      },
    },
    widget: {
      marginTop: "20px",
      display: "flex",
      justifyContent: "center",
      height: "fit-content",
    },
  }));
  const { button, widget } = useStyles();
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <Grid container justify="center">
        <Grid item sm={3} xs={12} lg={3} className={widget}>
          <div className="widget">
            <Widget />
            <LastPosts />
          </div>
        </Grid>
        <Grid item sm={6} xs={12} lg={6}>
          <div style={{ margin: "0 20px" }}>
            <div className="messageSender">
              <div className="messageSender_top">
                <Avatar src={ghost} />
                <div className="buttons">
                  <Button
                    {...{
                      className: button,
                    }}
                    variant="contained"
                    color="primary"
                    disableElevation
                  >
                    Submit item
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="posts">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </Grid>
        <Grid item sm={3} xs={12} lg={3} className={widget}>
          <div className="widget">
            <Filters />
            <Cities />
          </div>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
