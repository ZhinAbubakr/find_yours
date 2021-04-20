import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import PlanetOne from '../../images/1.png'
import PlanetTwo from '../../images/2.png'
import PlanetThree from '../../images/3.png'
import { Section, Container, ColumnLeft, ColumnRight, Image, Button } from './style.js'
import { FORM_ROUTE } from '../../containers/routes'
import { Link } from 'react-router-dom'
import { ProfileContext } from '../../profileContext'
import { useTranslation } from 'react-i18next'

export default function HeroSection() {
  const { t } = useTranslation()
  const [profile] = useContext(ProfileContext)
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <Section>
      <Container dir={t('heroSection.direction')}>
        <ColumnLeft>
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            {t('heroSection.greeting')}
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}>
            {t('heroSection.lost&found')}
          </motion.p>
          {profile.length != 0 ? (
            <Link to={FORM_ROUTE}>
              <Button
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
            </Link>
          ) : (
            <Button
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
              Submit
            </Button>
          )}
        </ColumnLeft>
        <ColumnRight>
          <Image
            src={PlanetOne}
            alt='planet'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <Image
            src={PlanetTwo}
            alt='planet'
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={PlanetThree}
            alt='planet'
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
        </ColumnRight>
      </Container>
    </Section>
  )
}
