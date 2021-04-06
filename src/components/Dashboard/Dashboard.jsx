import Navbar from "../Navbar/Navbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";
import "./styles.css";
import Post from "./Post/Post";

import React, { useContext, useState } from "react";
import Widget from "./Widgets/Widget";
import LastPosts from "./Widgets/LastPosts";
import Cities from "./Widgets/Cities";
import Filters from "./Widgets/Filters";
import SearchBar from "material-ui-search-bar";
// import LinearProgress from "@material-ui/core/LinearProgress";
import { useStyleDashboard } from "./Widgets/Style";
import FiltersFlat from "./Widgets/FiltersFlat";
import { ProfileContext } from "../../profileContext";
import { db } from "../../firebase";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Dashboard() {
  const [profile] = useContext(ProfileContext);
  const [posts, setPosts] = useState();
  const [state, setState] = React.useState({
    mobileView: false,
    mediumView: false,
  });

  const { mobileView, mediumView } = state;
  React.useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  React.useEffect(() => {
    const setResponsiveness = () => {
      if (window.innerWidth < 812) {
        setState((prevState) => ({ ...prevState, mobileView: true }));
      }
      if (window.innerWidth < 1210) {
        setState((prevState) => ({ ...prevState, mediumView: true }));
      }

      // window.innerWidth < 900
      //   ? setState((prevState) => ({ ...prevState, mobileView: true }))
      //   : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const { container, searchfield, button, widget } = useStyleDashboard();
  return (
    <div>
      <Navbar />

      {mediumView && (
        <Grid container justify="center" className={container}>
          <Grid item xs={12} sm={8} lg={8}>
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
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {mobileView && <FiltersFlat />}
            <div className="posts">
              {posts ? (
                posts.map((post) => <Post post={post} />)
              ) : (
                <CircularProgress />
              )}
            </div>
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
                      Submit item
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="posts">
              {posts ? (
                posts.map((post) => <Post post={post} />)
              ) : (
                <CircularProgress />
              )}
            </div>
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
