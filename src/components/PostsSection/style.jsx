import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: '#3aafa9',
      padding: theme.spacing(4, 4, 4),
    },
    btn: {
      marginLeft: theme.spacing(20),
      color: '#17252A',
      fontSize: '14px',
    },
    btn2: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(4),
    },
    cardGrid: {
      backgroundColor: '#3aafa9',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardContent: {
      flexGrow: 1,
    },
    heroTypography: {
      fontWeight: "bold",
      textAlign:"center",
      color:"textPrimary"
    },
    heroTypography2: {
        textAlign:"center",
        color:"textPrimary"
    },
  // ******search button*****
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  })); 

  export const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Poppins',
        'sans-serif',
      ].join(','),
    },
    palette: {
      primary: {
        main: '#17252a',
      },
      secondary: {
        main: '#3aafa9',
      },
    },
  });

export default useStyles