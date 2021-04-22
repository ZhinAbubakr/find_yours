import React from 'react'
import useStyles from './AboutUsStyle.jsx'
import { Grid, Container, Typography, Box, Avatar } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import team from '../../images/team.svg'
import feedback from '../../images/undraw_design_feedback_dexe.svg'
import search from '../../images/undraw_Web_search_re_efla.svg'
import murtaja from '../../images/murtaja.jpg'
import othman from '../../images/othman.jpg'
import zhin from '../../images/zhin.jpg'
import jalal from '../../images/jalal.jpg'
import ravyar from '../../images/ravyar.png'
import maher from '../../images/maher.png'
import { LinkedIn, GitHub } from '@material-ui/icons'

const developers = [
  {
    name: 'maher',
    bio: 'Lead Engineer',
    img: maher,
    github: 'https://github.com/maqalaqil',
    linkedin: 'https://www.linkedin.com/in/maher-al-aqil-56895894/',
  },
  {
    name: 'murtaja',
    img: murtaja,
    bio: 'Web Developer',
    github: 'https://github.com/murtaja1',
    linkedin: 'https://www.linkedin.com/in/murtaja-adnan-2a02b9206/',
  },
  {
    name: 'zhin',
    bio: 'Web Developer',

    img: zhin,
    github: 'https://github.com/ZhinAbubakr',
    linkedin: 'https://www.linkedin.com/in/zhin-abubakr-473910181/',
  },
  {
    name: 'othman',
    bio: 'Web Developer',

    img: othman,
    github: 'https://github.com/Othmanosx',
    linkedin: 'https://www.linkedin.com/in/othmanosx/',
  },
  {
    name: 'ravyar',
    bio: 'Web Developer',

    img: ravyar,
    github: 'https://github.com/Ravyar19',
    linkedin: 'https://www.linkedin.com/in/ravyar-aram-b767661aa/',
  },
  {
    name: 'jalal',
    bio: 'Web Developer',

    img: jalal,
    github: 'https://github.com/JalalArif',
    linkedin: 'https://www.linkedin.com/in/jalarif/',
  },
]
export default function AboutUs() {
  const { t } = useTranslation()
  const classes = useStyles()
  return (
    <Container>
      <Box mt={12} mb={6}>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item xs={5}>
            <Typography className={classes.fontTitleSize}>{t('aboutUs.about')}</Typography>
          </Grid>
          <Grid item xs={7}>
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
          {developers.map((name, i) => (
            <Grid key={i} container item lg={4} sm={6} xs={12} direction='column'>
              <Grid align='center' item>
                <Avatar src={name.img} className={classes.avatar} />
              </Grid>
              <Grid align='center' item className={classes.nameFont}>
                <Box px={2} py={2}>
                  {t(`aboutUs.${name.name}`)}
                </Box>
              </Grid>
              <Grid align='center' item>
                <Box pb={5} pr={1}>
                  <Typography className={classes.avatarFont}>{name.bio}</Typography>
                  <a href={name.linkedin}>
                    <LinkedIn className={classes.linkedIn} />
                  </a>
                  <a href={name.github}>
                    <GitHub className={classes.github} />
                  </a>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
