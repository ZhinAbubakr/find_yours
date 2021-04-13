import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  headCont:{
    textAlign:"justify",
    marginLeft:"0.2rem",
    [theme.breakpoints.down("md")]: {
      margin:"1rem"
    },

  },

  head1: {
    marginTop:"5rem",
    fontSize: "40px",

    [theme.breakpoints.down("md")]: {
      textAlign:"center",
      fontSize:"2rem",
      marginLeft:"0.8rem"

    },

  },

  revision:{
    marginTop:"0.5rem",
    fontWeight:"100",
    color:"grey",
    
  }
}));

export  { useStyles };
