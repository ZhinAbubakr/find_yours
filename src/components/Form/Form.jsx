import { Paper, Grid, Select, MenuItem } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import useStyles from './Style'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { db } from '../../firebase'
import { storage } from '../../firebase'
import 'date-fns'
import { ProfileContext } from '../../profileContext'
import { useTranslation } from 'react-i18next'

const Form = () => {
  const { t } = useTranslation()
  const [state, setState] = useState({
    date: '',
    item: '',
    email: '',
    more: '',
    facebook: '',
    phone: '',
    whereLost: '',
    color: '',
    category: '',
    isLost: '',
    image: '',
  })
  const [profile] = useContext(ProfileContext)
  const classes = useStyles()

  const handleChange = (event) => {
    const name = event.target.name
    setState({
      ...state,
      [name]: event.target.value,
    })
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    const storageRef = storage.ref()
    const fileRef = storageRef.child(`images/${file.name}`)

    fileRef.put(file).then(() =>
      storage
        .ref('images')
        .child(file.name)
        .getDownloadURL()
        .then((url) => setState({ ...state, image: url }))
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    db.collection('posts')
      .add({
        // space for improvement with avatar and username.
        avatar: profile.imageUrl,
        title: state.item,
        isLost: state.isLost,
        category: state.category,
        color: state.color,
        province: state.whereLost,
        name: profile.name,
        phone: state.phone,
        date: state.date,
        country: 'Iraq',
        body: state.more.split(' '),
        email: state.email,
        facebook: state.facebook,
        userId: profile.googleId,
        image: state.image,
        createdAt: new Date(),
      })

      .then(() => {
        alert('Submited')
      })

      .catch((error) => {
        alert(error.message)
      })

    setState({
      date: '',
      item: '',
      email: '',
      more: '',
      facebook: '',
      phone: '',
      whereLost: '',
      color: '',
      category: '',
      isLost: '',
      image: '',
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>
              <h4 className={classes.title}>{t('form.title')}</h4>
              <p className={classes.desc}>{t('form.titleEx')}</p>
              <TextField
                id='outlined-basic'
                label={t('form.title')}
                variant='outlined'
                className={classes.input}
                value={state.item}
                name='item'
                onChange={handleChange}
                required
              />
              <h4 className={classes.title}>{t('filter.catagory')}</h4>
              <p className={classes.desc}>{t('form.categoryEx')}</p>

              <Select
                className={classes.input}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={state.category}
                onChange={handleChange}
                name='category'
                required>
                <MenuItem value='documents'>{t('filter.Documents')}</MenuItem>
                <MenuItem value='animals/pets'>{t('filter.AnimalsPets')}</MenuItem>
                <MenuItem value='clothing'>{t('filter.Clothing')}</MenuItem>
                <MenuItem value='electronics'>{t('filter.Electronics')}</MenuItem>
                <MenuItem value='personal accessories'>{t('filter.personalAccessories')}</MenuItem>
                <MenuItem value='other'>{t('filter.Other')}</MenuItem>
              </Select>
              <h4 className={classes.title}>{t('filter.color')}</h4>
              <p className={classes.desc}>{t('form.colorEx')} </p>
              <Select
                className={classes.input}
                labelId='color'
                id='demo-simple-select'
                value={state.color}
                onChange={handleChange}
                name='color'
                required>
                <MenuItem value='blue'>{t('filter.blue')}</MenuItem>
                <MenuItem value='white'>{t('filter.white')}</MenuItem>
                <MenuItem value='red'>{t('filter.red')}</MenuItem>
                <MenuItem value='other'>{t('filter.Other')}</MenuItem>
              </Select>
              <h4 className={classes.title}>{t('form.where')}</h4>
              <p className={classes.desc}>{t('form.whereEx')}</p>
              <Select
                className={classes.input}
                labelId='Provinces'
                id='demo-simple-select'
                value={state.whereLost}
                name='whereLost'
                onChange={handleChange}
                required>
                <MenuItem value='baghdad'>{t('city.baghdad')}</MenuItem>
                <MenuItem value='erbil'>{t('city.erbil')}</MenuItem>
                <MenuItem value='basrah'>{t('city.basrah')}</MenuItem>
                <MenuItem value='wasit'>{t('city.wasit')}</MenuItem>
                <MenuItem value='sulaymaniyah'>{t('city.sulaymaniyah')}</MenuItem>
                <MenuItem value='nineveh'>{t('city.nineveh')}</MenuItem>
                <MenuItem value='maysan'>{t('city.maysan')}</MenuItem>
                <MenuItem value='karbala'>{t('city.karbala')}</MenuItem>
                <MenuItem value='kirkuk'>{t('city.kirkuk')}</MenuItem>
                <MenuItem value='diyala'>{t('city.diyala')}</MenuItem>
                <MenuItem value='dhi Qar'>{t('city.dhiqar')}</MenuItem>
                <MenuItem value='babil'>{t('city.babil')}</MenuItem>
                <MenuItem value='duhok'>{t('city.duhok')}</MenuItem>
                <MenuItem value='anbar'>{t('city.anbar')}</MenuItem>
                <MenuItem value='diwaniya'>{t('city.diwaniya')}</MenuItem>
                <MenuItem value='muthana'>{t('city.muthana')}</MenuItem>
                <MenuItem value='wasit'>{t('city.wasit')}</MenuItem>
                <MenuItem value='saladdin'>{t('city.saladdin')}</MenuItem>
              </Select>

              <h2 className={classes.contact}>{t('form.contact')}</h2>
              <h4 className={classes.title}>{t('form.phone')}</h4>
              <p className={classes.desc}>{t('form.contactEx')}</p>
              <TextField
                id='outlined-basic'
                label={t('form.phone')}
                variant='outlined'
                className={classes.input}
                value={state.phone}
                onChange={handleChange}
                name='phone'
                required
                type='number'
              />

              <h4 className={classes.title}>{t('form.facebook')}</h4>
              <p className={classes.desc}>{t('form.facebookEx')}</p>
              <TextField
                id='outlined-basic'
                label={t('form.facebook')}
                variant='outlined'
                className={classes.input}
                value={state.facebook}
                name='facebook'
                onChange={handleChange}
                required
                type='text'
              />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>
              <h4 className={classes.title}>{t('form.lostor')}</h4>
              <p className={classes.desc}>{t('form.type')}</p>
              <Select
                className={classes.input}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={state.isLost}
                onChange={handleChange}
                name='isLost'
                required>
                <MenuItem value={true}>{t('filter.Lost')}</MenuItem>
                <MenuItem value={false}>{t('filter.Found')}</MenuItem>
              </Select>
              <h4 className={classes.title}>{t('form.date')} </h4>
              <p className={classes.desc}>{t('form.dateEx')} </p>

              <TextField
                id='date'
                label={t('form.date')}
                name='date'
                type='date'
                value={state.selectedDate}
                onChange={handleChange}
                className={classes.input}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />

              <h4 className={classes.title}>{t('form.image')}</h4>
              <p className={classes.desc}>{t('form.imageEx')}</p>
              <input
                type='file'
                onChange={(e) => handleImageUpload(e)}
                id='contained-button-file'
                className={classes.fileInput}
                name='image'
              />
              <label htmlFor='contained-button-file'>
                <Button
                  className={classes.input}
                  variant='contained'
                  style={{ background: '#3AAFA9' }}
                  color='primary'
                  component='span'>
                  {t('form.upload')}
                </Button>
              </label>
              <h4 className={classes.title}>{t('form.addInfo')}</h4>
              <p className={classes.desc}>{t('form.addInfoEx')}</p>
              <TextField
                name='more'
                id='outlined-basic'
                label={t('form.addInfo')}
                variant='outlined'
                className={classes.input}
                value={state.more}
                onChange={handleChange}
              />
              <h4 className={classes.title}>{t('form.email')}</h4>
              <p className={classes.desc}>{t('form.emailEx')}</p>
              <TextField
                id='outlined-basic'
                label={t('form.email')}
                name='email'
                variant='outlined'
                className={classes.input}
                type='email'
                value={state.email}
                onChange={handleChange}
                required
              />
            </Paper>
          </Grid>
          <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justify='center'
            style={{ minHeight: '1vh' }}>
            <Grid item xs={3}>
              <Button
                variant='contained'
                style={{ background: '#3AAFA9' }}
                className={classes.button}
                color='primary'
                type='submit'>
                {t('dash.submit')}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </form>
  )
}

export default Form
