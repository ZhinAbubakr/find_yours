import React from 'react'
import Gif from '../../Assets/dribbble_1.gif'
import useStyles from './style'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from './style'
import { Grid, Typography, CardMedia, Card } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const NotFound = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container direction='column' spacing={2} className={classes.container}>
          <Grid item>
            <Card>
              <CardMedia className={classes.media} image={Gif} title='Paella dish' />
            </Card>
          </Grid>
          <Grid item>
            <Typography variant='h1' className={classes.typo}>
              "404"
            </Typography>
            <Typography variant='h5' className={classes.typo}>
              {t('notFound.text1')} :(
            </Typography>
            <Typography variant='body1' color='textSecondary' className={classes.typo}>
              {t('notFound.text2')}
            </Typography>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  )
}

export default NotFound
