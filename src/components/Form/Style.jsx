import { makeStyles } from "@material-ui/core/styles"

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "5rem",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  title: {
    marginBottom: "0.2rem !important",
    marginLeft: "5rem",
    [theme.breakpoints.down("xs")]: {
      margin: "0",
      marginTop: "1rem",
      fontSize: "1rem",
    },
  },
  desc: {
    marginTop: "0 !important",
    color: "#8f8f8f",
    fontSize: "0.7rem",
    marginLeft: "5rem",
    [theme.breakpoints.down("xs")]: {
      margin: "0",
      marginBottom: "0.5rem",
      fontSize: "0.4rem",
    },
  },
  input: {
    width: "28rem",
    [theme.breakpoints.down("xs")]: {
      width: "15rem",
      margin: "0",
    },
    [theme.breakpoints.down("md")]: {
      width: "15rem",
      marginLeft: "5rem",
    },
    marginLeft: "5rem",
  },

  button: {
    marginTop: "4rem",
    marginRight: "14.5rem",
    width: "20rem",
    [theme.breakpoints.down("xs")]: {
      width: "10rem",
    },
  },

  contact: {
    marginTop: "3rem",
    marginLeft: "5rem",
    [theme.breakpoints.down("xs")]: {
      margin: "0",
      marginTop: "1rem",
      fontSize: "1.2rem",
    },
  },
  inputImg: {
    display: "none !important",
    width: "28rem",
    [theme.breakpoints.down("xs")]: {
      width: "15rem",
      margin: "0",
    },
    marginLeft: "5rem !important",
  },

  upload: {
    marginLeft: "5rem",

    width: "28rem",
    [theme.breakpoints.down("xs")]: {
      width: "15rem",
      margin: "0",
    },
  },
}))

export default useStyle
