import React from 'react'
import useStyles from './AboutUsStyle.jsx'
import { Grid, Container, Typography, Box, Avatar } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import team from '../../images/team.svg'
import feedback from '../../images/undraw_design_feedback_dexe.svg'
import search from '../../images/undraw_Web_search_re_efla.svg'

const names = ['maher', 'murtaja', 'zhin', 'othman', 'ravyar', 'jalal']
export default function AboutUs() {
  const { t } = useTranslation()
  const classes = useStyles()
  return (
    <Container>
      <Box mt={12} mb={6}>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item xs={6}>
            <Typography className={classes.fontTitleSize}>{t('aboutUs.about')}</Typography>
          </Grid>
          <Grid item xs={6}>
            <object width='100%' data={team} type='image/svg+xml' />
          </Grid>
        </Grid>
        <Grid container justify='center' item xs={12}>
          <span>
            <Typography className={`${classes.fontTitleSize} ${classes.giveP}`}>
              {t('aboutUs.offer')}
            </Typography>
          </span>
        </Grid>

        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item xs={7} align='right'>
            <Box pr={4}>
              <Typography className={classes.txtFontSize}>{t('aboutUs.lost')}</Typography>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box>
              <object width='90%' data={search} type='image/svg+xml' />
            </Box>
          </Grid>
        </Grid>

        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item xs={6}>
            <Box>
              <object width='90%' data={feedback} type='image/svg+xml' />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography className={classes.txtFontSize}>{t('aboutUs.found')}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid align='center' container direction='row' justify='center'>
        <Typography className={classes.fontTitleSize}>{t('aboutUs.meet')}</Typography>
      </Grid>

      <Box mb={4} mt={4}>
        <Grid container direction='row' justify='space-around' alignItems='center'>
          {names.map((name, i) => (
            <Grid key={i} container item lg={3} md={4} sm={6} xs={12} direction='column'>
              <Grid align='center' item>
                <Avatar src={team} className={classes.avatar} />
              </Grid>
              <Grid align='center' item className={classes.nameFont}>
                <Box px={2} py={2}>
                  {t(`aboutUs.${name}`)}
                </Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
