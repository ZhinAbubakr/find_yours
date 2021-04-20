import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 310,
    marginBottom: '15px',
    borderRadius: '20px',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    marginTop: '5px',
  },
  button: {
    marginLeft: 'auto',
    color: 'grey',
  },
  avatar: {
    backgroundColor: grey[500],
    width: '45px',
    height: '45px',
  },
  content: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  root1: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList1: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title1: {
    color: theme.palette.primary.light,
  },
  titleBar1: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  image: {
    width: '100% !important',
    marginTop: '0px',
  },
  foundTag: {
    height: 'auto',
    backgroundColor: '#3fb59d',
  },
  lostTag: {
    height: 'auto',
    backgroundColor: '#f72b74',
    color: 'white',
  },
  tagIcon: {
    marginLeft: '0px',
  },
  links: {
    textDecoration: 'none',
  },
}))

export { useStyles }
