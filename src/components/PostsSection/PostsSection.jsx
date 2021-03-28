import React, { useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import useStyles from "./style"
import { ThemeProvider } from "@material-ui/styles"
import { theme } from "./style"
import {
	Typography,
	Button,
	Grid,
	CssBaseline,
	Card,
	CardActions,
	CardContent,
	Container,
	Paper,
	InputBase,
	IconButton,
	Box
} from "@material-ui/core"
import Pagination from "@material-ui/lab/Pagination"

export default function Posts() {
    const classes = useStyles();
    
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
            <main className={classes.heroContent}>
                <div>
                    <Container maxWidth="sm">
                        <ThemeProvider theme={theme}>
                            <Typography className={classes.heroTypography} component="h1" variant="h4" gutterBottom>
                                Featured Lost Items
                            </Typography>
                            <Typography className={classes.heroTypography2} variant="h6" paragraph>
                            View our recently featured Lost and Found property entries
                            </Typography>
                        </ThemeProvider>
                        <div>
                        <Grid>
                            <Grid item xs={12}>
                                <Container align="center" maxWidth="lg"> 
                                    <Paper component="form" className={classes.root}>
                                        <InputBase
                                            className={classes.input}
                                            placeholder="Search Posted Items"
                                            inputProps={{ 'aria-label': 'search google maps' }}
                                        />
                                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                            <AiOutlineSearch />
                                        </IconButton>
                                    </Paper>
                                </Container>
                            </Grid>
                        </Grid></div>
                    </Container>
                </div>

                <Container className={classes.cardGrid} maxWidth="lg">
                    <Grid container spacing={3}>
                        {item.slice(0, 4).map((data)=>(
                            <Grid item xs={12} sm={6} md={3} >
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <ThemeProvider theme={theme}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {data.name}
                                            </Typography>
                                            <Typography component="p" variant="body2">
                                                {data.location}
                                            </Typography>
                                        </ThemeProvider>
                                    </CardContent>
                                    <CardActions>
                                        <Button className={classes.btn} size="small">
                                            View Post
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                        <Grid item xs={12}>
                            <Container align="center">
                                <ThemeProvider theme={theme}>
                                    <Button variant="contained" color="primary" className={classes.btn2}>
                                        View More Lost Items
                                    </Button>
                                </ThemeProvider>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}

