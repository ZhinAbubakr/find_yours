import { makeStyles, withStyles } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

const useStyles = makeStyles({
  fileInput: {
    display: 'none',
  },
  cloudIcon: {
    fontSize: '150px',
    color: '#3AAFA9',
  },
  uploadFile: {
    border: '2px dotted #3AAFA9',
    height: '100%',
    width: '100%',
    cursor: 'pointer',
  },
  selectW: {
    width: '90%',
  },
  drawer: {
    minWidth: '60%',
  },
  backDrop: {
    backdropFilter: 'blur(3px)',
    background: 'rgba(0,0,30,0.4)',
  },
  divider: {
    padding: '0px 25% 0px 25%',
  },
  contactP: {
    paddingTop: '10px',
  },
  file: {
    display: 'none',
  },
  media: {
    width: 250,
    height: 250,
    borderRadius: '10px',
    padding: '10px',
    marginLeft: '20px',
  },
  paper: {
    padding: 14,
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
})
export default useStyles

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        '& fieldset': {
          borderRadius: '30px',
        },
      },
    },
  },
})

export const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '30px',
      '& fieldset': {
        borderColor: 'red',
        borderRadius: '30px',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField)
