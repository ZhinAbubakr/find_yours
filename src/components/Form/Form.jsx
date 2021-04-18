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
  const [selectedDate, setSelectedDate] = React.useState('')
  const [profile] = useContext(ProfileContext)
  const [item, setItem] = useState('')
  const [isLost, setIsLost] = useState('')
  const [color, setColor] = useState('')
  const [whereLost, setWhereLost] = useState('')
  const [phone, setPhone] = useState('')
  const [image, setImage] = useState(null)
  const [more, setMore] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = React.useState('')
  const [facebook, setFacebook] = React.useState('')
  const classes = useStyles()

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    const storageRef = storage.ref()
    const fileRef = storageRef.child(`images/${file.name}`)

    fileRef.put(file).then(() =>
      storage
        .ref('images')
        .child(file.name)
        .getDownloadURL()
        .then((url) => setImage(url))
    )
  }

  const handleChangeCat = (event) => {
    setCategory(event.target.value)
  }

  const handleChangeLoc = (event) => {
    setWhereLost(event.target.value)
  }

  const handleChangeCol = (event) => {
    setColor(event.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    db.collection('posts')
      .add({
        avatar: profile.imageUrl,
        title: item,
        isLost: isLost,
        category: category,
        color: color,
        province: whereLost,
        name: profile.name,
        phone: phone,
        date: selectedDate,
        country: 'Iraq',
        body: more.split(' '),
        email: email,
        facebook: facebook,
        userId: profile.googleId,
        image: image,
        createdAt: new Date(),
      })

      .then(() => {
        alert('Submited')
      })

      .catch((error) => {
        alert(error.message)
      })

    setIsLost('')
    setItem('')
    setImage('')
    setFacebook('')
    setColor('')
    setWhereLost('')
    setPhone('')
    setSelectedDate('')
    setImage('')
    setMore('')
    setEmail('')
    setCategory('')
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
                value={item}
                onChange={(e) => setItem(e.target.value)}
                required
              />
              <h4 className={classes.title}>{t('filter.catagory')}</h4>
              <p className={classes.desc}>{t('form.categoryEx')}</p>

              <Select
                className={classes.input}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={category}
                onChange={handleChangeCat}
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
                value={color}
                onChange={handleChangeCol}
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
                value={whereLost}
                onChange={handleChangeLoc}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
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
                value={isLost}
                onChange={(e) => setIsLost(e.target.value)}
                required>
                <MenuItem value={true}>{t('filter.Lost')}</MenuItem>
                <MenuItem value={false}>{t('filter.Found')}</MenuItem>
              </Select>
              <h4 className={classes.title}>{t('form.date')} </h4>
              <p className={classes.desc}>{t('form.dateEx')} </p>

              <TextField
                id='date'
                label={t('form.date')}
                type='date'
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
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
                id='outlined-basic'
                label={t('form.addInfo')}
                variant='outlined'
                className={classes.input}
                value={more}
                onChange={(e) => setMore(e.target.value)}
              />
              <h4 className={classes.title}>{t('form.email')}</h4>
              <p className={classes.desc}>{t('form.emailEx')}</p>
              <TextField
                id='outlined-basic'
                label={t('form.email')}
                variant='outlined'
                className={classes.input}
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <Button variant='contained' className={classes.button} color='primary' type='submit'>
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
