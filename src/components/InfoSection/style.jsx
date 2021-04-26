import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: '5rem',
    textAlign: 'center',
    padding: '5%',
  },
  title: {
    fontSize: '1.3rem',
  },
  description: {
    color: '#8f8f8f',
    fontSize: '0.8rem',
  },
  image: {
    width: '15rem',
    height: '15rem',
  },
})

export default useStyles
