import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { grey } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import ghost from "../../../Assets/Ghost.jpg";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 320,
    marginBottom: "15px",
    borderRadius: "20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    marginTop: "5px",
  },
  button: {
    marginLeft: "auto",
    color: "grey",
  },
  avatar: {
    backgroundColor: grey[500],
  },
  content: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  root1: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList1: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title1: {
    color: theme.palette.primary.light,
  },
  titleBar1: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  image: {
    width: "100% !important",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const tileData = [
    {
      img:
        "https://cosmosmagazine.com/wp-content/uploads/2020/02/190404-cat-full.jpg",
    },
    {
      img:
        "https://cosmosmagazine.com/wp-content/uploads/2020/02/190404-cat-full.jpg",
    },
    {
      img:
        "https://cosmosmagazine.com/wp-content/uploads/2020/02/190404-cat-full.jpg",
    },
  ];
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={ghost} className={classes.avatar} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Othman"
        subheader="Sep 14 2021 | Iraq, Erbil"
      />
      <CardContent className={classes.content}>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      {/* <CardMedia
        className={classes.media}
        image="https://cosmosmagazine.com/wp-content/uploads/2020/02/190404-cat-full.jpg"
        title="Paella dish"
      /> */}

      <GridList className={classes.gridList1} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile className={classes.image} key={tile.img}>
            <img src={tile.img} alt={tile.img} />
            <GridListTileBar
              classes={{
                root: classes.titleBar1,
                title: classes.title1,
              }}
            />
          </GridListTile>
        ))}
      </GridList>

      <CardContent className={classes.content}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            borderBottom: "1px solid #bdbdbd",
            padding: "5px",
          }}
        >
          <Typography variant="body2" color="textSecondary" component="p">
            123 Likes
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            23 comments
          </Typography>
        </div>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button className={classes.button}>view post</Button>
      </CardActions>
    </Card>
  );
}
