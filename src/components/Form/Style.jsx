import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
  close: {
    position: 'fixed',
    color: '#3bb78f',
    '&:hover': {
      color: 'red',
    },
  },
  divider: {
    padding: '0px 20% 0px 20%',
    [theme.breakpoints.down('xs')]: {
      padding: '0px 7% 0px 7%',
    },
  },
  doneIcon: {
    fontSize: '100px',
    color: '#3bb78f',
  },
  dialog: {
    background: '#f1f1f1',
    height: '27vh',
    overflow: 'hidden',
  },
  goBtn: {
    backgroundImage: 'linear-gradient(to right, #0bab64, #3bb78f)',
    color: 'white',
  },
  loading: {
    color: '#3bb78f',
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
  moreW: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
  },
  title: {
    marginBottom: '2px',
  },
  selectW: {
    width: '70%',
  },
  contactW: {
    width: '95%',
  },
  fileInput: {
    display: 'none',
  },

  inputImg: {
    display: 'none !important',
    width: '28rem',
    [theme.breakpoints.down('xs')]: {
      width: '15rem',
      margin: '0',
    },
    marginLeft: '5rem !important',
  },
}))

export default useStyle
