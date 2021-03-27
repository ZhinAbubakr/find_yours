import { makeStyles } from '@material-ui/core/styles';
import { grey } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 320,
      marginBottom: "15px",
      borderRadius: "20px",
      width: "300px",
    },
    buttons: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      margin: "15px 0px",
    },
    button: {
      backgroundColor: "#3AAFA9",
      color: "white",
      width: "130px",
      margin: "5px",
      "&:hover": {
        backgroundColor: "#27938d",
      },
    },
    avatar: {
      backgroundColor: grey[500],
      width: "30px",
      height: "30px",
    },
    header: {
      backgroundColor: "#3AAFA9",
      color: "white",
      height: "15px",
    },
    fbuttons: {
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "fit-content",
        margin: "10px",
      },
      fbutton: {
        backgroundColor: "#3AAFA9",
        color: "white",
        margin: "0 25px",
        "&:hover": {
          backgroundColor: "#27938d",
        },
      },
      favatar: {
        backgroundColor: grey[500],
        width: "30px",
        height: "30px",
      },
      fheader: {
        backgroundColor: "#3AAFA9",
        color: "white",
        height: "15px",
      },
      fformControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      fselectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));

  const useStyleDashboard = makeStyles(() => ({
    button: {
      color: "white",
      margin: "0 5px",
      backgroundColor: "#3AAFA9",
      "&:hover": {
        backgroundColor: "#27938d",
      },
    },
    widget: {
      marginTop: "20px",
      display: "flex",
      justifyContent: "center",
      height: "fit-content",
    },
    container: {
      marginTop: "50px",
    },
    searchfield: {
      height: "40px",
      backgroundColor: "#f7f7f7",
      boxShadow: "none",
      border: "1px solid rgb(231, 231, 231)",
    },
  }));

  const useStylesFilter = makeStyles((theme) => ({
    root: {
      maxWidth: 320,
      marginBottom: "15px",
      borderRadius: "20px",
      width: "300px",
    },
    fbuttons: {
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "fit-content",
        margin: "10px",
      },
      fbutton: {
        backgroundColor: "#3AAFA9",
        color: "white",
        margin: "0 25px",
        "&:hover": {
          backgroundColor: "#27938d",
        },
      },
      favatar: {
        backgroundColor: grey[500],
        width: "30px",
        height: "30px",
      },
      fheader: {
        backgroundColor: "#3AAFA9",
        color: "white",
        height: "15px",
      },
      fformControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      fselectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));

  const useStylesFilterFlat = makeStyles((theme) => ({
    root: {
      // maxWidth: 320,
      marginBottom: "15px",
      borderRadius: "20px",
      // width: "300px",
      margin: '0 20px',
      marginTop: '10px'
    },
    fbuttons: {
        display: "flex",
        // flexWrap: "nowrap",
        // flexDirection: "column",
        // justifyContent: "space-evenly",
        height: "fit-content",
        margin: "10px",
        overflow: 'scroll',
      },
      fheader: {
        backgroundColor: "#3AAFA9",
        color: "white",
        height: "0px",
      },
      fformControl: {
        margin: theme.spacing(1),
        minWidth: 150,
      },
      fselectEmpty: {
        marginTop: theme.spacing(2),
      },
      box: {
        height: '40px',
      },
      label:{
        transform: 'translate(14px, 13px) scale(1)'
      }
  }));

  const Accordion = withStyles({
    root: {
      border: "1px solid rgba(0, 0, 0, .125)",
      boxShadow: "none",
      "&:not(:last-child)": {
        borderBottom: 0,
      },
      "&:before": {
        display: "none",
      },
      "&$expanded": {
        margin: "auto",
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: "rgba(0, 0, 0, .03)",
      borderBottom: "1px solid rgba(0, 0, 0, .125)",
      marginBottom: -1,
      minHeight: 56,
      "&$expanded": {
        minHeight: 56,
      },
    },
    content: {
      "&$expanded": {
        margin: "12px 0",
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);

  const useStylesLastPosts = makeStyles(() => ({
    root: {
      maxWidth: 320,
      marginBottom: "15px",
      borderRadius: "20px",
      width: "300px",
    },
    buttons: {
      display: "flex",
      flexWrap: "nowrap",
      flexDirection: "column",
      justifyContent: "space-evenly",
      height: "170px",
    },
    button: {
      backgroundColor: "#3AAFA9",
      color: "white",
      margin: "0 25px",
      "&:hover": {
        backgroundColor: "#27938d",
      },
    },
    avatar: {
      backgroundColor: grey[500],
      width: "30px",
      height: "30px",
    },
    header: {
      backgroundColor: "#3AAFA9",
      color: "white",
      height: "15px",
    },
    media: {
      height: "0%",
      paddingTop: "56.25%", // 16:9
      marginTop: "0px",
      marginBottom: "10px",
      borderRadius: "10px",
    },
  }));

  const useStylesWidgets = makeStyles(() => ({
    root: {
      maxWidth: 320,
      marginBottom: "15px",
      borderRadius: "20px",
      width: "300px",
    },
    buttons: {
      display: "flex",
      flexWrap: "nowrap",
      flexDirection: "column",
      justifyContent: "space-evenly",
      height: "170px",
    },
    button: {
      backgroundColor: "#3AAFA9",
      color: "white",
      margin: "0 25px",
      "&:hover": {
        backgroundColor: "#27938d",
      },
    },
    avatar: {
      backgroundColor: grey[500],
      width: "30px",
      height: "30px",
    },
    header: {
      backgroundColor: "#3AAFA9",
      color: "white",
      height: "15px",
    },
  }));

export { useStylesFilterFlat, useStyleDashboard, useStylesWidgets, useStyles, useStylesFilter ,Accordion, AccordionSummary, AccordionDetails, useStylesLastPosts };