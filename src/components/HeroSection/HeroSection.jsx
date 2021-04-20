import React, { useContext } from 'react'
import { Grid, Typography, Container } from '@material-ui/core'
import { Button, Fade, Slide, Zoom } from '@material-ui/core'
import Men from '../../images/men.svg'
import Laptop from '../../images/laptop.svg'
import Tag from '../../images/tag.svg'
import { Section } from './style.js'
import { FORM_ROUTE } from '../../containers/routes'
import { Link } from 'react-router-dom'
import { ProfileContext } from '../../profileContext'
import { useTranslation } from 'react-i18next'

export default function HeroSection() {
  const { t } = useTranslation()
  const [profile] = useContext(ProfileContext)

  return (
    <Section>
      <Grid justify='space-around' alignItems='center' container dir={t('heroSection.direction')}>
        <Grid sm={12} md={5} lg={5} style={{ paddingLeft: '10em' }} justify='center'>
          <Slide timeout={1500} direction='right' in={true}>
            <Container>
              <Typography
                style={{ color: 'white', fontWeight: 'bold' }}
                variant='h2'
                component='h2'>
                {t('heroSection.greeting')}
              </Typography>
              <Typography style={{ color: 'white' }} variant='h4' component='h2'>
                {t('heroSection.lost&found')}
              </Typography>
            </Container>
          </Slide>
          <br />
          {profile.length != 0 ? (
            <Container>
              <Link style={{ textDecoration: 'none' }} to={FORM_ROUTE}>
                <Fade in={true} timeout={1500}>
                  <Button size='large' variant='contained' disableElevation>
                    {t('heroSection.button')}
                  </Button>
                </Fade>
              </Link>
            </Container>
          ) : (
            <Fade in={true} timeout={2000}>
              <Button
                size='large'
                disableElevation
                variant='contained'
                onClick={() => alert('you need to log in to post!')}
                whileHover={{ scale: 1.05 }}
                whileTap={{
                  scale: 0.95,
                  backgroundColor: '#67F6E7',
                  border: 'none',
                  color: '#000',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1.5 } }}>
                {t('heroSection.button')}
              </Button>
            </Fade>
          )}
        </Grid>

        <Grid
          className='herotext'
          sm={12}
          md={7}
          lg={7}
          style={{ width: '-webkit-fill-available', paddingRight: '4em' }}
          justify='center'>
          <div
            style={{
              position: 'relative',
              maxWidth: '856px',
              minHeight: '395px',
            }}>
            <Zoom in={true} timeout={1500}>
              <img
                style={{ width: '-webkit-fill-available', position: 'absolute', display: 'inline' }}
                src={Laptop}
                alt=''
              />
            </Zoom>

            <Slide style={{ transitionDelay: '500ms' }} timeout={2500} direction='down' in={true}>
              <Fade in={true} timeout={1500}>
                <img
                  style={{
                    width: '-webkit-fill-available',
                    position: 'absolute',
                    display: 'inline',
                  }}
                  src={Tag}
                  alt=''
                />
              </Fade>
            </Slide>

            <Slide timeout={1500} direction='left' in={true}>
              <img
                style={{ width: '-webkit-fill-available', position: 'absolute', display: 'inline' }}
                src={Men}
                alt=''
              />
            </Slide>
          </div>
        </Grid>
      </Grid>
    </Section>
  )
}
