import { Button, Grid } from '@material-ui/core'
import React from 'react'
import useStyles from './Style'
import TextField from '@material-ui/core/TextField';



const Form = () => {
    const classes = useStyles()


    return (
       <form className={classes.root}>
             <Grid container  >
                <Grid item xs={12} lg={6}>
                    <h4 className={classes.title}>Item lost</h4>
                    <p className={classes.desc}>(Dog, Jacket, Smartphone, Wallet, etc.) This field may auto-populate</p>
                    <TextField id="outlined-basic" label="Item Lost" variant="outlined" size="large" className={classes.input}/>
                    <h4 className={classes.title}>Category</h4>
                    <p className={classes.desc}>(Animals/Pets, Clothing, Electronics, Personal Accessories etc.) This field is required.</p>
                    <TextField id="outlined-basic" label="Category" variant="outlined" size="large" className={classes.input}/>
                    <h4 className={classes.title}>Color</h4>
                    <p className={classes.desc}>Please add the color that best represents the lost property (Black, Red, Blue, etc.)</p>
                    <TextField id="outlined-basic" label="Color" variant="outlined" size="large" className={classes.input}/>
                    <h4 className={classes.title}>Where Lost</h4>
                    <p className={classes.desc}>Please provide an approximate location of the lost property (Bar, Restaurant, Park, etc.)</p>
                    <TextField id="outlined-basic" label="Location" variant="outlined" size="large" className={classes.input}/>
                    <h2 style={{
                        marginTop:"5rem"
                    }}>Contact Information.</h2>

                    <h4 className={classes.title}>First Name</h4>
                    <p className={classes.desc}>Please enter your first name(This will appear on your submission)</p>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" size="large" className={classes.input}/>
                    <h4 className={classes.title}>Phone Number</h4>
                    <p className={classes.desc}>Please enter the phone number to display on your submission</p>
                    <TextField id="outlined-basic" label="Phone Number" variant="outlined" size="large" className={classes.input}/>
                    
                    
                </Grid>
                <Grid item xs={12} lg={6}>
                <h4 className={classes.title}>Date lost</h4>
                    <p className={classes.desc}>Please add the approximate date of when the item was lost.</p>
                    <TextField id="outlined-basic" label="2-3-2021" variant="outlined" size="large" className={classes.input}/>
                    <h4 className={classes.title}>Time Lost</h4>
                    <p className={classes.desc}>Please add the approximate time of day the item was lost.</p>
                    <TextField id="outlined-basic" label="Time" variant="outlined" size="large" className={classes.input}/>
                    <h4 className={classes.title}>Image</h4>
                    <p className={classes.desc}>(This image will display on the website.)</p>
                    <TextField id="outlined-basic" label="Image" variant="outlined" size="large" className={classes.input}/>
                    <h4 className={classes.title}>Additional Information</h4>
                    <p className={classes.desc}>Please provide any additional details/description of your lost property.</p>
                    <TextField id="outlined-basic" label="Additional Information" variant="outlined" size="large" className={classes.input}/>
                    <h4 className={classes.title} style={{
                        marginTop:"8.5rem"
                    }}>Last Name</h4>
                    <p className={classes.desc}>Please enter your last name(This will appear on your submission)</p>
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" size="large" className={classes.input}/>
                    <h4 className={classes.title}>Email</h4>
                    <p className={classes.desc}>Please enter the email to display on your submission</p>
                    <TextField id="outlined-basic" label="Email" variant="outlined" size="large" className={classes.input}/>
                    <br/>
                    <Button variant="contained" size="large" className={classes.button}  color="primary">Submit</Button>

                </Grid>    
            </Grid>
           
              
       </form>
          
    )
}

export default Form
