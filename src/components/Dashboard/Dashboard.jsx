import React, { useContext, useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import { useMediaQuery } from "react-responsive";
// import LinearProgress from "@material-ui/core/LinearProgress";
import Navbar from "../Navbar/Navbar";
import "./styles.css";
import Post from "./Post/Post";
import Widget from "./Widgets/Widget";
import LastPosts from "./Widgets/LastPosts";
import Cities from "./Widgets/Cities";
import Filters from "./Widgets/Filters";
import { useStyleDashboard } from "./Widgets/Style";
import FiltersFlat from "./Widgets/FiltersFlat";
import { ProfileContext } from "../../profileContext";
import { db } from "../../firebase";

export default function Dashboard() {
  const [profile] = useContext(ProfileContext);
  const [posts, setPosts] = useState();
  useEffect(() => {
    const unsubscribe = db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const mobileView = useMediaQuery({ query: "(max-width: 812px)" });
  const mediumView = useMediaQuery({ query: "(max-width: 1210px)" });
  const { container, searchfield, button, widget } = useStyleDashboard();
  const middleColomn = (text) => {
    return (
      <div style={{ margin: "0 20px" }}>
        <div className="messageSender">
          <div className="messageSender_top">
            <Avatar src={profile.imageUrl} />
            <div className="searchbar">
              <SearchBar
                className={searchfield}
                // Resource: https://codesandbox.io/s/mz7nx9v02j?file=/src/appStore.js
                // onRequestSearch={fetch}
                placeholder="Search items ..."
                autoFocus
              />
              {/* {isLoading && <LinearProgress />} */}
            </div>
            <div className="buttons">
              <Button
                {...{
                  className: button,
                }}
                variant="contained"
                color="primary"
                disableElevation
              >
                {text}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const postItems = () => {
    return (
      <div className="posts">
        {posts ? (
          posts.map((post) => <Post post={post} />)
        ) : (
          <CircularProgress />
        )}
      </div>
    );
  };
  return (
    <div>
      <Navbar />
      {mediumView && (
        <Grid container justify="center" className={container}>
          <Grid item xs={12} sm={8} lg={8}>
            {middleColomn("Post")}
            {mobileView && <FiltersFlat />}
            {postItems()}
          </Grid>
          {!mobileView && (
            <Grid item sm={4} lg={4} className={widget}>
              <div className="widget">
                <Filters />
                <Cities />
              </div>
            </Grid>
          )}
        </Grid>
      )}
      {!mediumView && (
        <Grid container justify="center" className={container}>
          <Grid item sm={3} lg={3} className={widget}>
            <div className="widget">
              <div>
                <Widget />
                <LastPosts />
              </div>
            </div>
          </Grid>
          <Grid item sm={6} lg={6}>
            {middleColomn("Submit item")}
            {postItems()}
          </Grid>
          <Grid item sm={3} lg={3} className={widget}>
            <div className="widget">
              <Filters />
              <Cities />
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
