import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: '#3aafa9',
      padding: theme.spacing(6, 4, 4),
    },
    btn: {
      marginLeft: theme.spacing(20),
      color: '#17252A',
      fontSize: '14px',
    },
    btn2: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(6),
      marginLeft: theme.spacing(62),
      
    },
    cardGrid: {
      backgroundColor: '#3aafa9',
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardContent: {
      flexGrow: 1,
    },
  // ******search button*****
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    heroTypography: {
      fontWeight: "bold",
      textAlign:"center",
      color:"textPrimary"
    }
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