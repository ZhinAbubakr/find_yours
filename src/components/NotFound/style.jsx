import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  container: {
    marginTop: 50,
    marginBottom: '36rem',
  },
  typo: {
    textAlign: 'center',
  },
}))

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
})

export default useStyles
