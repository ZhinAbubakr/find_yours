import { Select, MenuItem, Dialog, Button, TextField, Box } from '@material-ui/core'
import React, { useState } from 'react'
import { db } from '../../firebase'
import 'date-fns'
import { useTranslation } from 'react-i18next'

function EditForm({ post, postId, handleUpdated }) {
  const [openDialog, setOpenDialog] = useState(false)
  const { t } = useTranslation()
  const [state, setState] = useState({
    date: post.date,
    item: post.title,
    email: post.email,
    more: post.body.join().replace(/,/g, ' '),
    facebook: post.facebook,
    phone: post.phone,
    whereLost: post.province,
    color: post.color,
    category: post.category,
    isLost: post.isLost,
    image: post.image,
  })

  const handleChange = (event) => {
    const name = event.target.name
    setState({
      ...state,
      [name]: event.target.value,
    })
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    db.collection('posts')
      .doc(postId)
      .update({
        date: state.date,
        title: state.item,
        email: state.email,
        body: state.more.split(' '),
        facebook: state.facebook,
        phone: state.phone,
        province: state.whereLost,
        color: state.color,
        category: state.category,
        isLost: state.isLost,
      })
      .then(() => {
        console.log('Document successfully deleted!')
        setOpenDialog(!openDialog)
        handleUpdated()
      })
      .catch((error) => {
        console.error('Error removing document: ', error)
      })
  }
  const handleDeleteDialog = () => {
    setOpenDialog(!openDialog)
  }
  const handleCancel = () => {
    setOpenDialog(false)
    setState({
      date: post.date,
      item: post.title,
      email: post.email,
      more: post.body.join().replace(/,/g, ' '),
      facebook: post.facebook,
      phone: post.phone,
      whereLost: post.province,
      color: post.color,
      category: post.category,
      isLost: post.isLost,
      image: post.image,
    })
  }
  return (
    <>
      <Button variant='contained' onClick={handleDeleteDialog} color='primary' size='small'>
        {t('post.edit')}
      </Button>
      <Dialog fullWidth aria-labelledby='simple-dialog-title' open={openDialog}>
        <Box px={2} py={2}>
          <h4>Edit your post: </h4>
          <form onSubmit={handleUpdate}>
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
            <Box py={1} align='center'>
              <Box px={1} component='span'>
                <Button variant='contained' size='small' color='primary' type='submit'>
                  {t('dash.submit')}
                </Button>
              </Box>
              <Button variant='contained' size='small' color='secondary' onClick={handleCancel}>
                {t('post.cancel')}
              </Button>
            </Box>
          </form>
        </Box>
      </Dialog>
    </>
  )
}

export default EditForm
