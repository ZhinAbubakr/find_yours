import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'
import { useStyles } from './Style.js'
import { useTranslation } from 'react-i18next'

export default function Widget({ handlePosts, doubleFilter }) {
  const { t } = useTranslation()
  const classes = useStyles()
  // you could write a function here that has city=true in this only function instead of writing them there.
  return (
    <Card className={classes.root}>
      <CardHeader title='Cities' className={classes.header} />
      <div className={classes.buttons}>
        <Button
          onClick={() => handlePosts({ province: '', city: true })}
          variant='contained'
          className={classes.cbutton}
          disableElevation>
          {t('city.clear')}
        </Button>
        <Button
          onClick={() => handlePosts({ province: 'baghdad', city: true })}
          variant='contained'
          className={`${classes.button} ${
            doubleFilter.province === 'baghdad' ? classes.activeCityBtn : ''
          }`}
          disableElevation>
          {t('city.baghdad')}
        </Button>
        <Button
          variant='contained'
          onClick={() => handlePosts({ province: 'erbil', city: true })}
          className={`${classes.button} ${
            doubleFilter.province === 'erbil' ? classes.activeCityBtn : ''
          }`}
          disableElevation>
          {t('city.erbil')}
        </Button>

        <Button
          onClick={() => handlePosts({ province: 'basrah', city: true })}
          variant='contained'
          className={`${classes.button} ${
            doubleFilter.province === 'basrah' ? classes.activeCityBtn : ''
          }`}
          disableElevation>
          {t('city.basrah')}
        </Button>
        <Button
          onClick={() => handlePosts({ province: 'duhok', city: true })}
          variant='contained'
          className={`${classes.button} ${
            doubleFilter.province === 'duhok' ? classes.activeCityBtn : ''
          }`}
          disableElevation>
          {t('city.duhok')}
        </Button>
        <Button
          onClick={() => handlePosts({ province: 'anbar', city: true })}
          variant='contained'
          className={`${classes.button} ${
            doubleFilter.province === 'anbar' ? classes.activeCityBtn : ''
          }`}
          disableElevation>
          {t('city.anbar')}
        </Button>
        <Button
          onClick={() => handlePosts({ province: 'babil', city: true })}
          variant='contained'
          className={`${classes.button} ${
            doubleFilter.province === 'babil' ? classes.activeCityBtn : ''
          }`}
          disableElevation>
          {t('city.babil')}
        </Button>
        <Button
          onClick={() => handlePosts({ province: 'dhi Qar', city: true })}
          variant='contained'
          className={`${classes.button} ${
            doubleFilter.province === 'dhi Qar' ? classes.activeCityBtn : ''
          }`}
          disableElevation>
          {t('city.dhiqar')}
        </Button>
        <Button
          onClick={() => handlePosts({ province: 'diyala', city: true })}
          variant='contained'
          className={`${classes.button} ${
            doubleFilter.province === 'diyala' ? classes.activeCityBtn : ''
          }`}
          disableElevation>
          {t('city.diyala')}
        </Button>
        <Button
          onClick={() => handlePosts({ province: 'kirkuk', city: true })}
          variant='contained'
          className={`${classes.button} ${
            doubleFilter.province === 'kirkuk' ? classes.activeCityBtn : ''
          }`}
          disableElevation>
          {t('city.kirkuk')}
        </Button>
        <Button
          onClick={() => handlePosts({ province: 'karbala', city: true })}
          variant='contained'
          className={`${classes.button} ${
            doubleFilter.province === 'karbala' ? classes.activeCityBtn : ''
          }`}
          disableElevation>
          {t('city.karbala')}
        </Button>
        <Button
          onClick={() => handlePosts({ province: 'maysan', city: true })}
          variant='contained'
          className={`${classes.button} ${
            doubleFilter.province === 'maysan' ? classes.activeCityBtn : ''
          }`}
          disableElevation>
          {t('city.maysan')}
        </Button>
        <Button
          onClick={() => handlePosts({ province: 'nineveh', city: true })}
          variant='contained'
          className={`${classes.button} ${
            doubleFilter.province === 'nineveh' ? classes.activeCityBtn : ''
          }`}
          disableElevation>
          {t('city.nineveh')}
        </Button>
        <Button
          onClick={() => handlePosts({ province: 'saladdin', city: true })}
          variant='contained'
          className={`${classes.button} ${
            doubleFilter.province === 'saladdin' ? classes.activeCityBtn : ''
          }`}
          disableElevation>
          {t('city.saladdin')}
        </Button>
        <Button
          onClick={() => handlePosts({ province: 'sulaymaniyah', city: true })}
          variant='contained'
          className={`${classes.button} ${
            doubleFilter.province === 'sulaymaniyah' ? classes.activeCityBtn : ''
          }`}
          disableElevation>
          {t('city.sulaymaniyah')}
        </Button>
        <Button
          onClick={() => handlePosts({ province: 'najaf', city: true })}
          variant='contained'
          className={`${classes.button} ${
            doubleFilter.province === 'najaf' ? classes.activeCityBtn : ''
          }`}
          disableElevation>
          {t('city.najaf')}
        </Button>
        <Button
          onClick={() => handlePosts({ province: 'wasit', city: true })}
          variant='contained'
          className={`${classes.button} ${
            doubleFilter.province === 'wasit' ? classes.activeCityBtn : ''
          }`}
          disableElevation>
          {t('city.wasit')}
        </Button>
        <Button
          onClick={() => handlePosts({ province: 'diwaniya', city: true })}
          variant='contained'
          className={`${classes.button} ${
            doubleFilter.province === 'diwaniya' ? classes.activeCityBtn : ''
          }`}
          disableElevation>
          {t('city.diwaniya')}
        </Button>
        <Button
          onClick={() => handlePosts({ province: 'muthana', city: true })}
          variant='contained'
          className={`${classes.button} ${
            doubleFilter.province === 'muthana' ? classes.activeCityBtn : ''
          }`}
          disableElevation>
          {t('city.muthana')}
        </Button>
      </div>
    </Card>
  )
}
