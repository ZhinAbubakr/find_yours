import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";

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
  }));
  const { button } = useStyles();
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <Grid container spacing={3}>
        <Grid item sm={3} xs={12} lg={3}></Grid>
        <Grid item sm={6} xs={12} lg={6}>
          <div>
            <div className="messageSender">
              <div className="messageSender_top">
                <Avatar />
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
                  <Button
                    {...{
                      className: button,
                    }}
                    variant="contained"
                    disableElevation
                  >
                    Primary
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item sm={3} xs={12} lg={3}></Grid>
      </Grid>
      <Footer />
    </div>
  );
}
