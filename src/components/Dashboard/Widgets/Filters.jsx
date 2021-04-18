import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useStylesFilter } from './Style.js'
import { useTranslation } from 'react-i18next'

export default function Filters({ handlePosts, handleClearFilter }) {
  const classes = useStylesFilter()
  const { t } = useTranslation()
  const mobileView = useMediaQuery('(max-width: 960px)')
  const [state, setState] = useState({
    category: '',
    Status: '',
    province: '',
    color: '',
  })

  const handleChange = (event) => {
    const name = event.target.name
    setState({
      ...state,
      [name]: event.target.value,
    })
  }

  useEffect(() => {
    handlePosts(state)
  }, [state])

  const clearFilter = () => {
    setState({ category: '', Status: '', province: '', color: '' })
    // when in mobile view call this function to clear the cities too.
    if (mobileView) {
      handleClearFilter()
    }
  }
  return (
    <Card className={classes.root}>
      <CardHeader title={t('filter.filters')} className={classes.fheader} />
      <div className={classes.fbuttons}>
        <Button
          onClick={clearFilter}
          variant='contained'
          className={classes.cbutton}
          disableElevation>
          {t('city.clear')}
        </Button>
        <FormControl variant='outlined' className={classes.fformControl}>
          <InputLabel htmlFor='outlined-age-native-simple'>{t('filter.catagory')}</InputLabel>
          <Select
            native
            value={state.category}
            onChange={handleChange}
            label='Category'
            inputProps={{
              name: 'category',
              id: 'outlined-age-native-simple',
            }}>
            <option aria-label='None' value='' />
            <option value='animals/pets'>{t('filter.AnimalsPets')}</option>
            <option value='documents'>{t('filter.Documents')}</option>
            <option value='clothing'>{t('filter.Clothing')}</option>
            <option value='electronics'>{t('filter.Electronics')}</option>
            <option value='personal accessories'>{t('filter.personalAccessories')}</option>
            <option value='other'>{t('filter.Other')}</option>
          </Select>
        </FormControl>
        <FormControl variant='outlined' className={classes.fformControl}>
          <InputLabel htmlFor='outlined-age-native-simple'>{t('filter.status')}</InputLabel>
          <Select
            native
            value={state.Status}
            onChange={handleChange}
            label='Status'
            inputProps={{
              name: 'Status',
              id: 'outlined-age-native-simple',
            }}>
            <option aria-label='None' value='' />
            <option value={true}>{t('filter.Lost')}</option>
            <option value={false}>{t('filter.Found')}</option>
          </Select>
        </FormControl>
        {mobileView && (
          <FormControl variant='outlined' className={classes.fformControl}>
            <InputLabel htmlFor='outlined-age-native-simple'>{t('filter.City')}</InputLabel>
            <Select
              native
              value={state.province}
              onChange={handleChange}
              label='City'
              inputProps={{
                name: 'province',
                id: 'outlined-age-native-simple',
              }}>
              <option aria-label='None' value='' />
              <option value='baghdad'>{t('city.baghdad')}</option>
              <option value='erbil'>{t('city.erbil')}</option>
              <option value='basrah'>{t('city.basrah')}</option>
              <option value='wasit'>{t('city.wasit')}</option>
              <option value='najaf'>{t('city.najaf')}</option>
              <option value='sulaymaniyah'>{t('city.sulaymaniyah')}</option>
              <option value='saladdin'>{t('city.saladdin')}</option>
              <option value='nineveh'>{t('city.nineveh')}</option>
              <option value='maysan'>{t('city.maysan')}</option>
              <option value='karbala'>{t('city.karbala')}</option>
              <option value='kirkuk'>{t('city.kirkuk')}</option>
              <option value='diyala'>{t('city.diyala')}</option>
              <option value='dhi Qar'>{t('city.dhiqar')}</option>
              <option value='babil'>{t('city.babil')}</option>
              <option value='anbar'>{t('city.anbar')}</option>
              <option value='duhok'>{t('city.duhok')}</option>
              <option value='diwaniya'>{t('city.diwaniya')}</option>
              <option value='muthana'>{t('city.muthana')}</option>
            </Select>
          </FormControl>
        )}
        <FormControl variant='outlined' className={classes.fformControl}>
          <InputLabel htmlFor='outlined-age-native-simple'>{t('filter.color')}</InputLabel>
          <Select
            native
            value={state.color}
            onChange={handleChange}
            label='Color'
            inputProps={{
              name: 'color',
              id: 'outlined-age-native-simple',
            }}>
            <option aria-label='None' value='' />
            <option value='red'>{t('filter.red')}</option>
            <option value='white'>{t('filter.white')}</option>
            <option value='blue'>{t('filter.blue')}</option>
            <option value='other'>{t('filter.Other')}</option>
          </Select>
        </FormControl>
      </div>
    </Card>
  )
}
