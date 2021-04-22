import React, { useContext } from 'react'
import { Grid, Typography, Container } from '@material-ui/core'
import { Button, Fade, Slide, Zoom } from '@material-ui/core'
import Men from '../../images/men.svg'
import Laptop from '../../images/laptop.svg'
import Tag from '../../images/tag.svg'
import LaptopB from '../../images/laptopB.svg'
import { FORM_ROUTE } from '../../containers/routes'
import { Link } from 'react-router-dom'
import { ProfileContext } from '../../profileContext'
import { useTranslation } from 'react-i18next'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export default function HeroSection() {
  const { t } = useTranslation()
  const [profile] = useContext(ProfileContext)
  const mobileView = useMediaQuery('(max-width: 960px)')
  const LeftSection = ({ paddingLeft }) => {
    return (
      <Grid
        xs={12}
        sm={12}
        md={5}
        lg={5}
        style={{
          paddingLeft: mobileView ? paddingLeft : '10em',
          paddingBottom: mobileView ? '13em' : 0,
        }}
        justify='center'>
        <Slide timeout={1500} direction='right' in={true}>
          <Container>
            <Typography style={{ color: 'white', fontWeight: 'bold' }} variant='h2' component='h2'>
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
            <Container>
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
            </Container>
          </Fade>
        )}
      </Grid>
    )
  }
  const RightSection = ({ minHeight, paddingRight }) => {
    return (
      <Grid
        className='herotext'
        xs={12}
        sm={12}
        md={7}
        lg={7}
        style={{ width: '-webkit-fill-available', paddingRight: mobileView ? paddingRight : '4em' }}
        justify='center'>
        <div
          style={{
            position: 'relative',
            maxWidth: '856px',
            minHeight: mobileView ? minHeight : '395px',
          }}>
          <Zoom in={true} timeout={1500}>
            <img
              style={{ width: '-webkit-fill-available', position: 'absolute', display: 'inline' }}
              src={Laptop}
              alt=''
            />
          </Zoom>

          <Slide timeout={2500} direction='down' in={true}>
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
          <Slide timeout={1500} direction='left' in={true}>
            <img
              style={{ width: '-webkit-fill-available', display: 'block' }}
              src={LaptopB}
              alt=''
            />
          </Slide>
        </div>
      </Grid>
    )
  }
  return (
    <Grid
      container
      style={{ height: '100vh', marginTop: '4em', background: '#3aafa9', alignContent: 'center' }}
      alignItems='center'
      justify='space-around'
      dir={t('heroSection.direction')}>
      {mobileView ? (
        <>
          <RightSection />
          <LeftSection />
        </>
      ) : (
        <>
          <LeftSection paddingLeft='1em' />
          <RightSection minHeight='0' paddingRight='0' />
        </>
      )}
    </Grid>
  )
}
