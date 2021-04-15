import React, {/*useContext,*/ useEffect,useState} from "react";
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
import { Link } from 'react-router-dom'
import { db } from "../../firebase";
import CircularProgress from "@material-ui/core/CircularProgress";
// import { ProfileContext } from "../../profileContext"

export default function Profile() {
  const classes = useStyles();

  const [posts, setPosts] = useState();
  // const [profile] = useContext(ProfileContext)

  useEffect(() => {
    const res=[];
    db.collection("posts").where("userID", "==", 1 )
    .get()
    .then((snapshot) => {
      snapshot.docs.map((doc) => res.push(doc.data()))
      setPosts(res)
    })
  }, []);

  return (
    <React.Fragment>
      <Container className={classes.container} maxWidth="lg">
        <ThemeProvider theme={theme}>
          <Typography variant="h4" className={classes.headerTypo}>
            My Dashboard
          </Typography>
          <Grid container spacing={3} direction="row">
            <Grid xs={12} sm={6} md={3}>
              <Container maxWidth="sm">
                <CardMedia
                  className={classes.media}
                  image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                  // image={props}
                  title="Contemplative Reptile"
                />
              </Container>
            </Grid>
            <Grid item xs={12} md={8} className={classes.container3}>
              <ListItem>
                <Container maxWidth="lg" className={classes.container2}>
                  <Typography variant="body1" color="textSecondary">
                    Full name
                  </Typography>
                  <Typography variant="body1">zhin abubakr abdullah</Typography>
                  <Divider />
                </Container>
                <Container maxWidth="lg" className={classes.container2}>
                  <Typography variant="body1" color="textSecondary">
                    Email
                  </Typography>
                  <Typography variant="body1">zhin@gmail.com</Typography>
                  <Divider />
                </Container>
              </ListItem>
              <br />
              <ListItem>
                <Container maxWidth="lg">
                  <Typography variant="body1" color="textSecondary">
                    Address
                  </Typography>
                  <Typography variant="body1">Iraq/Erbil city</Typography>
                  <Divider />
                </Container>
                <Container maxWidth="lg">
                  <Typography variant="body1" color="textSecondary">
                    Phone No.
                  </Typography>
                  <Typography variant="body1">0750 00 00000</Typography>
                  <Divider />
                </Container>
              </ListItem>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Container>

      <Divider variant="inset" className={classes.divider} />

      <Container className={classes.container1} maxWidth="lg">
        <ThemeProvider theme={theme}>
          <Grid className={classes.btn3}>
            <Button>see all</Button>
          </Grid>
          <Grid>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Found Items
            </Typography>
          </Grid>
          <Grid container spacing={2}>
            {posts ? (
              posts.map((post) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Post post={post} />
                </Grid>
              ))
            ) : (
              <CircularProgress style={{ marginLeft: "45%" }} />
            )}
          </Grid>
          <Grid item xs={12} className={classes.btn2}>
            <Link to={'/form'} className={classes.links}>
              <Button
                variant="contained"
                color="secondary"
                style={{ fontWeight: "bold" }}
              >
                Add Post
              </Button>
            </Link>
          </Grid>
        </ThemeProvider>
      </Container>

      <Divider variant="inset" className={classes.divider1} />
      
      <Container maxWidth="lg" className={classes.container1}>
        <ThemeProvider theme={theme}>
          <Grid className={classes.btn3}>
            <Button>see all</Button>
          </Grid>
          <Grid>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Lost Items
            </Typography>
          </Grid>
          <Grid container spacing={2}>
            {posts ? (
              posts.map((post) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Post post={post} />
                </Grid>
              ))
            ) : (
              <CircularProgress style={{ marginLeft: "45%" }} />
            )}
          </Grid>
          <Grid item xs={12} className={classes.btn2}>
            <Link to={"/form"} className={classes.links}>
              <Button
                variant="contained"
                color="secondary"
                style={{ fontWeight: "bold" }}
              >
                Add Post
              </Button>
            </Link>
          </Grid>
        </ThemeProvider>
      </Container>
    </React.Fragment>
  );
}
