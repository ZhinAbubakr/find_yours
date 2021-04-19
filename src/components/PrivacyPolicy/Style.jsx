import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  head1: {
    marginTop: '5rem',
    fontSize: '40px',

    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
  revision: {
    marginTop: '0.5rem',
    fontWeight: '100',
    color: 'grey',
  },
}))

export { useStyles }
