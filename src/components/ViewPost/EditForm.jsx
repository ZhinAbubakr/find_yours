import { Select, MenuItem, Dialog, Button } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from './style'
import TextField from '@material-ui/core/TextField'
// import { db } from '../../firebase'
// import { storage } from '../../firebase'
import 'date-fns'
// import { ProfileContext } from '../../profileContext'
import { useTranslation } from 'react-i18next'

function EditForm() {
  const [openDialog, setOpenDialog] = useState(false)
  const { t } = useTranslation()
  const classes = useStyles()
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
    isLost: false,
  })
  const handleChange = (event) => {
    const name = event.target.name
    console.log(event.target.value)
    setState({
      ...state,
      [name]: event.target.value,
    })
  }
  // const classes = useStyles()
  // const [profile] = useContext(ProfileContext)

  // const handleDelete = () => {
  //   db.collection('posts')
  //     .doc(postId)
  //     .update({

  //     })
  //     .then(() => {
  //       console.log('Document successfully deleted!')
  //       setOpenDialog(!openDialog)
  //     })
  //     .catch((error) => {
  //       console.error('Error removing document: ', error)
  //     })
  // }
  const handleDeleteDialog = () => {
    setOpenDialog(!openDialog)
  }
  return (
    <>
      <Button variant='contained' onClick={handleDeleteDialog} color='primary' size='small'>
        {t('post.edit')}
      </Button>
      <Dialog fullWidth aria-labelledby='simple-dialog-title' open={openDialog}>
        <form>
          <h4>{t('form.title')}</h4>
          <TextField
            id='outlined-basic'
            label={t('form.title')}
            variant='outlined'
            value={state.item}
            inputProps={{ name: 'item' }}
            onChange={handleChange}
            required
          />
          <h4>{t('filter.catagory')}</h4>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={state.category}
            inputProps={{ name: 'category' }}
            onChange={handleChange}
            required>
            <MenuItem value='documents'>{t('filter.Documents')}</MenuItem>
            <MenuItem value='animals/pets'>{t('filter.AnimalsPets')}</MenuItem>
            <MenuItem value='clothing'>{t('filter.Clothing')}</MenuItem>
            <MenuItem value='electronics'>{t('filter.Electronics')}</MenuItem>
            <MenuItem value='personal accessories'>{t('filter.personalAccessories')}</MenuItem>
            <MenuItem value='other'>{t('filter.Other')}</MenuItem>
          </Select>
          <h4>{t('filter.color')}</h4>
          <Select
            labelId='color'
            id='demo-simple-select'
            value={state.color}
            onChange={handleChange}
            inputProps={{ name: 'color' }}
            required>
            <MenuItem value='blue'>{t('filter.blue')}</MenuItem>
            <MenuItem value='white'>{t('filter.white')}</MenuItem>
            <MenuItem value='red'>{t('filter.red')}</MenuItem>
            <MenuItem value='other'>{t('filter.Other')}</MenuItem>
          </Select>
          <h4>{t('form.where')}</h4>
          <Select
            labelId='Provinces'
            id='demo-simple-select'
            value={state.whereLost}
            inputProps={{ name: 'whereLost' }}
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
          <h2>{t('form.contact')}</h2>
          <h4>{t('form.phone')}</h4>
          <TextField
            id='outlined-basic'
            label={t('form.phone')}
            variant='outlined'
            value={state.phone}
            inputProps={{ name: 'phone' }}
            onChange={handleChange}
            required
            type='number'
          />
          <h4>{t('form.facebook')}</h4>
          <TextField
            id='outlined-basic'
            label={t('form.facebook')}
            variant='outlined'
            inputProps={{ name: 'facebook' }}
            value={state.facebook}
            onChange={handleChange}
            required
            type='text'
          />
          <h4>{t('form.lostor')}</h4>
          <p>{t('form.type')}</p>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={state.isLost}
            onChange={handleChange}
            inputProps={{ name: 'isLost' }}
            required>
            <MenuItem value={true}>{t('filter.Lost')}</MenuItem>
            <MenuItem value={false}>{t('filter.Found')}</MenuItem>
          </Select>
          <h4>{t('form.date')} </h4>
          <TextField
            id='date'
            label={t('form.date')}
            type='date'
            value={state.date}
            onChange={handleChange}
            inputProps={{ name: 'date' }}
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
          <h4>{t('form.image')}</h4>
          <input
            type='file'
            inputProps={{ name: 'image' }}
            className={classes.file}
            onChange={handleChange}
            id='contained-button-file'
          />
          <label htmlFor='contained-button-file'>
            <Button
              variant='contained'
              style={{ background: '#3AAFA9' }}
              color='primary'
              component='span'>
              {t('form.upload')}
            </Button>
          </label>
          <h4>{t('form.addInfo')}</h4>
          <TextField
            id='outlined-basic'
            label={t('form.addInfo')}
            variant='outlined'
            inputProps={{ name: 'more' }}
            value={state.more}
            onChange={handleChange}
          />
          <h4>{t('form.email')}</h4>
          <TextField
            id='outlined-basic'
            label={t('form.email')}
            variant='outlined'
            type='email'
            inputProps={{ name: 'email' }}
            value={state.email}
            onChange={handleChange}
            required
          />

          <Button
            variant='contained'
            style={{ background: '#3AAFA9' }}
            color='primary'
            type='submit'>
            {t('dash.submit')}
          </Button>
          <Button variant='contained' color='primary' onClick={handleDeleteDialog}>
            xx
          </Button>
        </form>
      </Dialog>
    </>
  )
}

export default EditForm
