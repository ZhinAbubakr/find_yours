import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import {Container,
        Grid, 
        Typography, 
        CardMedia, 
        Divider, 
        ListItem,
        Paper,
        } from '@material-ui/core';


export default function InsetDividers() {

  return (
    <>
        <Container >
            <Paper  >
                <ThemeProvider>
                    <Typography variant="h4" >
                        Item Lost Information:
                    </Typography>
                    <Grid container>
                        <Grid xs={16} sm={8} md={3}>
                            <CardMedia
                                image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                                title=""
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={8}>
                            <ListItem>
                                <Container maxWidth="lg">
                                    <Typography variant="body1" color="textSecondary">
                                        Item Name:
                                    </Typography>
                                    <Typography variant="body1">
                                        Cat
                                    </Typography>
                                    <Divider/>
                                </Container>
                                <Container maxWidth="lg">
                                    <Typography variant="body1" color="textSecondary">
                                        Date Lost:
                                    </Typography>
                                    <Typography variant="body1">
                                        12/4/2021
                                    </Typography>
                                    <Divider/>
                                </Container>
                                <Container maxWidth="lg">
                                    <Typography variant="body1" color="textSecondary">
                                        Time Lost:
                                    </Typography>
                                    <Typography variant="body1">
                                        12:00 pm
                                    </Typography>
                                    <Divider/>
                                </Container>
                            </ListItem>
                            <br/>
                            <ListItem>
                                <Container maxWidth="lg">
                                    <Typography variant="body1" color="textSecondary">
                                        Where Lost:
                                    </Typography>
                                    <Typography variant="body1">
                                        Erbil city
                                    </Typography>
                                    <Divider/>
                                </Container>
                                <Container maxWidth="lg">
                                    <Typography variant="body1" color="textSecondary">
                                        Item Color:
                                    </Typography>
                                    <Typography variant="body1">
                                        Black and White
                                    </Typography>
                                    <Divider/>
                                </Container>
                                <Container maxWidth="lg">
                                    <Typography variant="body1" color="textSecondary">
                                        Category:
                                    </Typography>
                                    <Typography variant="body1">
                                        Animals/pets
                                    </Typography>
                                    <Divider/>
                                </Container>
                            </ListItem>
                            <br/>
                            <ListItem>
                                <Container maxWidth="lg">
                                    <Typography variant="body1" color="textSecondary">
                                        Aditional Information:
                                    </Typography>
                                    <Typography variant="body1">
                                        Erbil city
                                    </Typography>
                                    <Divider/>
                                </Container>
                            </ListItem>
                        </Grid>
                    </Grid>

                    <Typography variant="h4">
                        Contact Information:
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} >
                            <ListItem>
                                <Container>
                                    <Typography variant="body1" color="textSecondary">
                                        First Name:
                                    </Typography>
                                    <Typography variant="body1">
                                        Zhin
                                    </Typography>
                                    <Divider/>
                                </Container>
                                <Container>
                                    <Typography variant="body1" color="textSecondary">
                                        Second Name:
                                    </Typography>
                                    <Typography variant="body1">
                                        Zhin
                                    </Typography>
                                    <Divider/>
                                </Container>
                            </ListItem>
                            <br/>
                            <ListItem>
                                <Container maxWidth="lg">
                                    <Typography variant="body1" color="textSecondary">
                                        Email:
                                    </Typography>
                                    <Typography variant="body1">
                                        zhin@gmail.com
                                    </Typography>
                                    <Divider/>
                                </Container>
                                <Container maxWidth="lg">
                                    <Typography variant="body1" color="textSecondary">
                                        Phon No.
                                    </Typography>
                                    <Typography variant="body1">
                                        0750 000 00 00
                                    </Typography>
                                    <Divider/>
                                </Container>
                            </ListItem>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </Paper>
        </Container>
    </>
  );
}