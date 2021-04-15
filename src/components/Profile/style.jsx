import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    media: {
      width: 180,
      height: 180,
      borderRadius: '120px',
      padding: '10px',
      marginLeft: '20px',
    },
    avatar: {
        width: theme.spacing(5),
        hieght: theme.spacing(5)
    },
    container: {
        marginTop: theme.spacing(12),
    },
    container1: {
      marginLeft: theme.spacing(8),
      marginBottom: theme.spacing(20)
    },
    container2: {
        marginTop: theme.spacing(2),
    },
    divider: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        marginRight: theme.spacing(14),
        marginLeft: theme.spacing(12),
    },
    divider1: {
    marginTop: theme.spacing(14),
    marginBottom: theme.spacing(4),
    marginRight: theme.spacing(14),
    marginLeft: theme.spacing(12),
    },
    btn2: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginRight: theme.spacing(10),
    float: 'right',
    fontWeight:'bold',
    },
    btn3: {
      marginBottom: theme.spacing(2),
      marginRight: theme.spacing(10),
      float: 'right',
      fontWeight:'bold',
    },
    headerTypo: {
        marginBottom: theme.spacing(8),
        marginLeft: theme.spacing(4),
    },
    links: {
        textDecoration: 'none'
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
