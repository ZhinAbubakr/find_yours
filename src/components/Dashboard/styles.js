import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => (
    {
        "body": {
          "backgroundColor": "#f7f7f7"
        },
        "messageSender": {
          "display": "flex",
          "marginTop": "30px",
          "flexDirection": "column",
          "backgroundColor": "white",
          "borderRadius": "15px",
          "boxShadow": "0px 5px 7px -7px rgba(0, 0, 0, 0.75)",
          "width": "100%"
        },
        "messageSender_top": {
          "display": "flex",
          "borderBottom": "1px solid #eff2f5",
          "padding": "15px",
          "alignItems": "center"
        },
        "button": {
          "backgroundColor": "#3aafa9",
          "color": "white",
          "margin": "0 10px"
        },
        "buttons": {
          "marginLeft": "auto"
        },
        "posts": {
          "margin": "10px",
          "display": "flex",
          "flexWrap": "wrap",
          "justifyContent": "space-evenly"
        },
        "widget": {
          "margin": "10px",
          "justifyContent": "center"
        },
        "searchbar": {
          "margin": "0 0 0 20px"
        },
        "MuiPaper_rounded": {
          "borderRadius": "20px !important"
        },
        "MuiPopover_paper":{
            "overflow-x": "unset !important",
            "overflow-y": "unset !important",   
        }
      }
));

  

export { useStyles };