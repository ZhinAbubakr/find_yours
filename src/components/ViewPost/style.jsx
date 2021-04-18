import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  media: {
    width: 250,
    height: 250,
    borderRadius: '10px',
    padding: '10px',
    marginLeft: '20px',
  },
  container: {
    marginTop: '100px',
    marginBottom: '50px',
  },
  paper: {
    padding: 14,
  },
  container1: {
    marginLeft: 8,
  },
  container2: {
    marginTop: theme.spacing(2),
  },
  headerTypo: {
    marginBottom: 4,
    marginLeft: 2,
  },
  typo1: {
    marginTop: 45,
    paddingLeft: 15,
  },
  container3: {
    marginTop: 5,
  },
}))

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
})

export default useStyles
