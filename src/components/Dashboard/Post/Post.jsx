import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
// import { BiHeart } from "react-icons/bi";
// import { BiShareAlt } from "react-icons/bi";
import { MdMoreVert } from "react-icons/md";

import Button from "@material-ui/core/Button";
import ghost from "../../../Assets/Ghost.jpg";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Chip from "@material-ui/core/Chip";
import ErrorIcon from "@material-ui/icons/Error";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useStyles } from "./Style";

export default function RecipeReviewCard() {
  const classes = useStyles();
  const tileData = [
    {
      id: 1,
      img:
        "https://cosmosmagazine.com/wp-content/uploads/2020/02/190404-cat-full.jpg",
    },
    {
      id: 2,
      img:
        "https://cosmosmagazine.com/wp-content/uploads/2020/02/190404-cat-full.jpg",
    },
    {
      id: 3,
      img:
        "https://cosmosmagazine.com/wp-content/uploads/2020/02/190404-cat-full.jpg",
    },
  ];
  const isLost = true;
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={ghost} className={classes.avatar} />}
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
            <MdMoreVert />
          </IconButton>
        }
        title="Othman"
        subheader={
          <>
            <div>Sep 14 2021, Erbil</div>
            {isLost ? (
              <Chip
                className={classes.lostTag}
                color="secondary"
                size="small"
                icon={<ErrorIcon className={classes.tagIcon} />}
                label="Lost"
              />
            ) : (
              <Chip
                className={classes.foundTag}
                color="primary"
                size="small"
                icon={<CheckCircleIcon className={classes.tagIcon} />}
                label="Found"
              />
            )}
          </>
        }
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
          <GridListTile className={classes.image} 
          key={tile.id}
          >
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

      {/* <CardContent className={classes.content}>
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
      </CardContent> */}

      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          
          <BiHeart />
        </IconButton> */}
        {/* <IconButton aria-label="share">
          
          <BiShareAlt />
        </IconButton> */}
        <Button className={classes.button}>contact</Button>
      </CardActions>
    </Card>
  );
}
