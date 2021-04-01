import React, { useEffect, useState } from "react"
import {db} from '../../firebase'
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
} from "@material-ui/core"

export default function Posts() {
    const classes = useStyles();
    const [posts,setPosts] =useState([])

    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, [])



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
                            <Typography className={classes.heroTypography2} variant="h6" paragraph
                            >
                            View our recently featured Lost and Found property entries
                            </Typography>
                        </ThemeProvider>
                        <div>
                        <Grid>
                            <Grid item xs={12}>
                                <Container align="center" maxWidth="lg"> 
                                 
                                </Container>
                            </Grid>
                        </Grid></div>
                    </Container>
                </div>

                <Container className={classes.cardGrid} maxWidth="lg">
                    <Grid container spacing={3}>
                        {posts.map((data)=>(
                            <Grid item xs={12} sm={6} md={3} >
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <ThemeProvider theme={theme}>
                                            <Typography gutterBottom variant="h5" component="h2" maxLen={10} className={classes.headline} >
                                                {data.body.substring(0,50)}
                                            </Typography>
                                            <Typography component="p" variant="body2">
                                                {data.province}
                                            </Typography>
                                        </ThemeProvider>
                                    </CardContent>
                                    <CardActions>
                                        <Button className={classes.btn} size="small">
                                            Contact
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

