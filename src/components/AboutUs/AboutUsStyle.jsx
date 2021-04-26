import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({
  txtFontSize: {
    fontSize: '0.8rem !important', // hi
  },
  fontTitleSize: {
    fontSize: '1.5rem !important',
    marginLeft: 50,
  },
  giveP: {
    padding: '2rem !important',
  },
  avatar: {
    height: '200px !important',
    width: '200px !important',
  },
  nameFont: {
    fontSize: '2rem !important',
  },
  avatarFont: {
    fontSize: '1rem !important',
    opacity: '80%',
  },
  github: {
    color: '#0077b5',
    height: '20px',
    width: '20px',
    paddingLeft: '5px',
  },
  linkedIn: {
    color: '#6e5494',
    height: '20px',
    width: '20px',
    paddingRight: '5px',
  },
  '@media  (min-width: 700px)': {
    fontTitleSize: {
      fontSize: '2.5rem !important ',
    },
    txtFontSize: {
      fontSize: '1.5rem !important',
    },
    giveP: {
      padding: '6rem !important',
    },
  },
  '@media  (min-width: 960px)': {
    fontTitleSize: {
      fontSize: '3rem !important ',
    },
    txtFontSize: {
      fontSize: '2rem !important',
    },
    giveP: {
      padding: '6rem !important',
    },
  },
})

export default useStyles
