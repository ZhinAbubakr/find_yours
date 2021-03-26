import React ,{useState} from 'react';
import Post from '../Dashboard/Post/Post';
import useStyles from "./style";
import { ThemeProvider } from '@material-ui/styles';
import {theme} from "./style";
import {Container, Button, Grid, Typography, CardMedia, Divider, ListItem} from '@material-ui/core';


export default function InsetDividers() {
  const classes = useStyles();
  const [item]=useState([{},{},{},{},{},{},])

  return (
    <>
        <Container className={classes.container} maxWidth="lg">
            <ThemeProvider theme={theme}>
                <Typography variant="h4" className={classes.headerTypo}>My Dashboard</Typography>
                <Grid container spacing={3} direction="row">
                    <Grid xs={12} sm={6} md={3}>
                        <Container maxWidth="sm">
                            <CardMedia
                                className={classes.media}
                                image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                                title="Contemplative Reptile"
                            />
                        </Container>
                    </Grid>
                    <Grid item xs={12} md={8} className={classes.container3}>
                        <ListItem>
                             <Container maxWidth="lg" className={classes.container2}>
                                <Typography variant="body1" color="textSecondary">Full name</Typography>
                                <Typography variant="body1">zhin abubakr abdullah</Typography>
                                <Divider/>
                            </Container>
                            <Container maxWidth="lg" className={classes.container2}>
                                <Typography variant="body1" color="textSecondary">Email</Typography>
                                <Typography variant="body1">zhin@gmail.com</Typography>
                                <Divider/>
                            </Container>
                        </ListItem>
                        <br/>
                        <ListItem>
                            <Container maxWidth="lg">
                                <Typography variant="body1" color="textSecondary">Address</Typography>
                                <Typography variant="body1">Iraq/Erbil city</Typography>
                                <Divider/>
                            </Container>
                            <Container maxWidth="lg">
                                <Typography variant="body1" color="textSecondary">Phone No.</Typography>
                                <Typography variant="body1">0750 00 00000</Typography>
                                <Divider/>
                            </Container>
                        </ListItem>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Container>

        <Divider variant="inset"  className={classes.divider}/>

        <Container className={classes.container1} maxWidth="lg"><ThemeProvider theme={theme}>
            <Grid className={classes.btn3}>
                <Button>see all</Button>
            </Grid>
            <Grid>
                <Typography variant="h6" style={{fontWeight:'bold'}}>Found Items</Typography>
            </Grid>
            <Grid container spacing={2}>
                {item.slice(0, 3).map(()=>(
                    <Grid item xs={12} sm={6} md={4}>
                        <Post />
                    </Grid>
                ))}
            </Grid>
            <Grid item xs={12} className={classes.btn2}>
                <Button variant="contained" color="secondary" style={{fontWeight:'bold'}}>
                    Add Post
                </Button>
            </Grid></ThemeProvider>
        </Container>

        <Divider variant="inset"  className={classes.divider1}/>

        <Container maxWidth="lg" className={classes.container1}><ThemeProvider theme={theme}>
            <Grid className={classes.btn3}>
                <Button>see all</Button>
            </Grid>
            <Grid>
                <Typography variant="h6" style={{fontWeight:'bold'}}>Lost Items</Typography>
            </Grid>
            <Grid container spacing={2}>
                {item.slice(0, 3).map(()=>(
                    <Grid item xs={12} sm={6} md={4}>
                        <Post />
                    </Grid>
                ))}        
            </Grid>
            <Grid item xs={12} className={classes.btn2}>
                <Button variant="contained" color="secondary" style={{fontWeight:'bold'}}>
                    Add Post
                </Button>
            </Grid></ThemeProvider>
        </Container>
    </>
  );
}
