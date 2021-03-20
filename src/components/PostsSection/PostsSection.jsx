import React, {useState}  from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import {
  Typography, Button, Grid, CssBaseline, Card, CardActions, 
  CardContent, Container, Paper, InputBase, IconButton,
} from "@material-ui/core";

export default function Posts() {
    const [item]=useState([
        {
          id: 1,
          name: 'Dog',
          location: ' G & J Tire Shop, Grand Street, Brooklyn, NY, USA',
        },
        {
          id: 2,
          name: 'Dog',
          location: ' G & J Tire Shop, Grand Street, Brooklyn, NY, USA',
        },
        {
          id: 3,
          name: 'Dog',
          location: ' G & J Tire Shop, Grand Street, Brooklyn, NY, USA',
        },
        {
          id: 4,
          name: 'Dog',
          location: ' G & J Tire Shop, Grand Street, Brooklyn, NY, USA',
        },
        {
          id: 5,
          name: 'Dog',
          location: ' G & J Tire Shop, Grand Street, Brooklyn, NY, USA',
        },
        {
          id: 6,
          name: 'Dog',
          location: ' G & J Tire Shop, Grand Street, Brooklyn, NY, USA',
        },
    ])

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <div>
                    <Container maxWidth="lg">
                        <Typography component="h1" variant="h4" gutterBottom>
                            Featured Lost Items
                        </Typography>
                            <Typography  variant="h6" align="center" color="primary" paragraph>
                            View our recently featured Lost and Found property entries.
                            </Typography>
                        <Container maxWidth="lg" align="center"> 
                            <Paper component="form">
                                <InputBase
                                    placeholder="Search Posted Items"
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <IconButton type="submit" aria-label="search">
                                    {/* <SearchIcon /> */}
                                    <AiOutlineSearch />
                                </IconButton>
                            </Paper>
                        </Container>
                    </Container>
                </div>

                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        {item.slice(0, 4).map((data)=>(
                            <Grid item xs={12} sm={6} md={3} >
                                <Card>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <spam>{data.name}</spam>
                                        </Typography>
                                        <Typography component="p" variant="body2" color="textSecondary">
                                            <p>{data.location}</p>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">
                                            View Post
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                        <Container maxWidth="lg" >
                                <Button variant="contained" color="secondary">
                                    View More Lost Items
                                </Button>
                        </Container>
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}