import React from 'react'
import { Grid, Typography, Container, Box } from '@material-ui/core'
import { useStyles } from './Style.jsx'
import { useTranslation } from 'react-i18next'

function privacyPolicy() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Container component='main' maxWidth='md' dir={t('privacyPolicy.direction')}>
      <Box mb={14.6}>
        <Grid container>
          <Typography className={classes.head1} component='h1' variant='h5'>
            {t('privacyPolicy.privacyPolicy')}
          </Typography>
        </Grid>
        <Grid>
          <Grid item xs={12} sm={12} className={classes.headCont}>
            <Typography className={classes.revision} component='p'>
              {t('privacyPolicy.RevisedDate')}
            </Typography>
            <p>{t('privacyPolicy.paragraph1')}</p>
          </Grid>
          <Grid item xs={12} sm={12} className={classes.headCont}>
            <p>{t('privacyPolicy.paragraph2')}</p>
          </Grid>

          <Grid item xs={12} className={classes.headCont}>
            <p>{t('privacyPolicy.paragraph3')}</p>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default privacyPolicy
