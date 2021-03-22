import React from 'react'
import Grid from '@material-ui/core/Grid';
import useStyles from './style'
import image1 from '../../images/1.svg'
import image2 from '../../images/2.svg'
import image3 from '../../images/3.svg'




const InfoSection = () => {
	const classes = useStyles()

    return (
        <div className={classes.root}>
         <Grid container spacing={10} >
                <Grid item xs={12} lg={4}>
                        <img src={image1} className={classes.image}/>
                        <h3 className={classes.title}>Lorem ipsum dolor sit amet.</h3>
                        <p className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel odio nisi. Quisque a congue ante. Maecenas non dolor pretium.</p>
                </Grid>
                <Grid item xs={12} lg={4}>
                <img src={image2} className={classes.image}/>
                <h3 className={classes.title}>Lorem ipsum dolor sit amet,</h3>
                        <p className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel odio nisi. Quisque a congue ante. Maecenas non dolor pretium.</p>                
                </Grid>
                <Grid item xs={12} lg={4}>
                <img src={image3} className={classes.image}/>

                <h3 className={classes.title}>Lorem ipsum dolor sit amet.</h3>
                        <p className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel odio nisi. Quisque a congue ante. Maecenas non dolor pretium.</p>                
                </Grid>
         </Grid>
        </div>
    )
}

export default InfoSection
