import React, { useState, useEffect, useContext } from "react";
import Post from "../Dashboard/Post/Post";
import useStyles from "./style";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./style";
import {
  Container,
  Button,
  Grid,
  Typography,
  CardMedia,
  Divider,
  ListItem,
} from "@material-ui/core";
import { ProfileContext } from "../../profileContext";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FORM_ROUTE } from "../../containers/routes";

export default function Profile() {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);
  const [profile] = useContext(ProfileContext);

  useEffect(() => {
    if (profile) {
      db.collection("posts")
        .where("userID", "==", `${profile ? profile.googleId : null}`)
        .onSnapshot((snapshot) => {
          setPosts(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [profile]);
  return (
    <>
      <Container className={classes.container} maxWidth="lg">
        <ThemeProvider theme={theme}>
          <Typography variant="h4" className={classes.headerTypo}>
            My Dashboard
          </Typography>
          <Grid container spacing={3} direction="row">
            <Grid item xs={12} sm={6} md={3}>
              <Container maxWidth="sm">
                <CardMedia
                  className={classes.media}
                  image={profile.imageUrl}
                  title="Contemplative Reptile"
                />
              </Container>
            </Grid>

            {posts.map((post, i) => (
              <Grid key={i} item xs={12} md={8} className={classes.container3}>
                <ListItem>
                  <Container maxWidth="lg" className={classes.container2}>
                    <Typography variant="body1" color="textSecondary">
                      Full name
                    </Typography>
                    <Typography variant="body1">
                      {profile.name || "Phone Number Not Provided"}
                    </Typography>
                    <Divider />
                  </Container>
                  <Container maxWidth="lg" className={classes.container2}>
                    <Typography variant="body1" color="textSecondary">
                      Email
                    </Typography>
                    <Typography variant="body1">
                      {profile.email || "Phone Number Not Provided"}
                    </Typography>
                    <Divider />
                  </Container>
                </ListItem>
                <br />
                <ListItem>
                  <Container maxWidth="lg">
                    <Typography variant="body1" color="textSecondary">
                      Address
                    </Typography>
                    <Typography variant="body1">
                      {post.province || "Phone Number Not Provided"}
                    </Typography>
                    <Divider />
                  </Container>
                  <Container maxWidth="lg">
                    <Typography variant="body1" color="textSecondary">
                      Phone No.
                    </Typography>
                    <Typography variant="body1">
                      {post.phone || "Phone Number Not Provided"}
                    </Typography>
                    <Divider />
                  </Container>
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </ThemeProvider>
      </Container>

      <Divider variant="inset" className={classes.divider} />

      <Container maxWidth="lg" className={classes.container1}>
        <ThemeProvider theme={theme}>
          <Grid className={classes.btn3}>
            <Button>see all</Button>
          </Grid>
          <Grid>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              My Posts
            </Typography>
          </Grid>
          <Grid container spacing={2}>
            {posts ? (
              posts.map((post, i) => (
                <Grid key={i} item xs={12} sm={6} md={4}>
                  <Post post={post} />
                </Grid>
              ))
            ) : (
              <CircularProgress style={{ marginLeft: "45%" }} />
            )}
          </Grid>
          <Grid item xs={12} className={classes.btn2}>
            <Link to={FORM_ROUTE} className={classes.links}>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
              >
                Add Post
              </Button>
            </Link>
          </Grid>
        </ThemeProvider>
      </Container>
    </>
  );
}
