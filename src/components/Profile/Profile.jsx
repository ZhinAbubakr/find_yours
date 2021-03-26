import React ,{useState} from 'react';
import Post from '../Dashboard/Post/Post';
import {Container, Button, Grid, Typography, CardMedia, Divider, ListItem} from '@material-ui/core';


export default function InsetDividers() {
  const [item]=useState([{},{},{},{},{},{},])

  return (
    <>
        <Container maxWidth="lg">
                <Typography variant="h4" >My Dashboard</Typography>
                <Grid container spacing={3} direction="row">
                    <Grid xs={12} sm={6} md={3}>
                        <Container maxWidth="sm">
                            <CardMedia
                                image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                                title="Contemplative Reptile"
                            />
                        </Container>
                    </Grid>
                    <Grid item xs={12} md={8} >
                        <ListItem>
                             <Container maxWidth="lg" >
                                <Typography variant="body1" color="textSecondary">Full name</Typography>
                                <Typography variant="body1">zhin abubakr abdullah</Typography>
                                <Divider/>
                            </Container>
                            <Container maxWidth="lg" >
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
        </Container>

        <Divider variant="inset" />

        <Container maxWidth="lg">
            <Grid>
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
            <Grid item xs={12}>
                <Button variant="contained" color="secondary" style={{fontWeight:'bold'}}>
                    Add Post
                </Button>
            </Grid>
        </Container>

        <Divider variant="inset"/>

        <Container maxWidth="lg" >
            <Grid>
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
            <Grid item xs={12}>
                <Button variant="contained" color="secondary" style={{fontWeight:'bold'}}>
                    Add Post
                </Button>
            </Grid>
        </Container>
    </>
  );
}