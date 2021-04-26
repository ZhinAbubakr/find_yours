import {
  Select,
  MenuItem,
  Dialog,
  Button,
  TextField,
  Box,
  Grid,
  Divider,
  FormControl,
  Typography,
} from '@material-ui/core'
import React, { useState } from 'react'
import { db } from '../../firebase'
import { useTranslation } from 'react-i18next'
import useStyles from './style'
import { storage } from '../../firebase'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

function EditForm({ post, postId, handleUpdated }) {
  const classes = useStyles()
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
        image: state.image,
      })
      .then(() => {
        setOpenDialog(!openDialog)
        handleUpdated()
      })
      .catch((error) => {
        alert('Error removing document: ', error)
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
      <Dialog
        fullWidth
        aria-labelledby='simple-dialog-title'
        open={openDialog}
        classes={{ paper: classes.drawer }}
        BackdropProps={{
          classes: {
            root: classes.backDrop,
          },
        }}>
        <Box px={2} pb={2} dir={t('privacyPolicy.direction')}>
          <h3 align='center'>{t('editForm.editItem')}</h3>
          <Box className={classes.divider}>
            <Divider />
          </Box>

          <form onSubmit={handleUpdate}>
            <h4>{t('form.title')}</h4>
            <TextField
              id='outlined-basic'
              label={t('form.title')}
              variant='outlined'
              value={state.item}
              inputProps={{ name: 'item', maxLength: 20 }}
              onChange={handleChange}
              required
            />
            <Grid container spacing={3} direction='row' justify='space-around'>
              <Grid item sm={6} lg={3} xs={12}>
                <h4>{t('filter.catagory')}</h4>
                <FormControl className={classes.selectW}>
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
                    <MenuItem value='personal accessories'>
                      {t('filter.personalAccessories')}
                    </MenuItem>
                    <MenuItem value='other'>{t('filter.Other')}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={6} lg={3} xs={12}>
                <h4> {t('filter.color')}</h4>
                <FormControl className={classes.selectW}>
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
                </FormControl>
              </Grid>
              <Grid item sm={6} lg={3} xs={12}>
                <h4>{t('editForm.where')}</h4>
                <FormControl className={classes.selectW}>
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
                </FormControl>
              </Grid>
              <Grid item sm={6} lg={3} xs={12}>
                <h4>{t('form.lostor')}</h4>
                <FormControl className={classes.selectW}>
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
                </FormControl>
              </Grid>
            </Grid>
            <h4 className={classes.title}>{t('form.image')}</h4>
            <Grid container justify='space-around'>
              <Grid item sm={4}>
                <input
                  type='file'
                  onChange={(e) => handleImageUpload(e)}
                  id='contained-button-file'
                  className={classes.fileInput}
                />
                <label htmlFor='contained-button-file'>
                  <Grid container justify='center' className={classes.uploadFile}>
                    <Grid item xs={12} align='center'>
                      <Typography variant='h6'>{t('editForm.editImage')}</Typography>
                    </Grid>

                    <Grid item xs={12} align='center'>
                      <CloudUploadIcon className={classes.cloudIcon} />
                    </Grid>
                  </Grid>
                </label>
              </Grid>
              <Grid item sm={6} xs={10}>
                <Box py={1} align='center'>
                  <img src={state.image} alt='dd' width='70%' height='200px' />
                </Box>
              </Grid>
            </Grid>
            <Box className={classes.divider}>
              <h3 align='center' className={classes.contactP}>
                {t('form.contact')}
              </h3>
              <Divider />
            </Box>
            <Grid container spacing={3} direction='row' justify='space-around'>
              <Grid item xs={12} md={4}>
                <h4>{t('form.phone')}</h4>
                <TextField
                  id='outlined-basic'
                  label={t('form.phone')}
                  variant='outlined'
                  value={state.phone}
                  inputProps={{ name: 'phone', maxLength: 20 }}
                  onChange={handleChange}
                  required
                  type='number'
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <h4>{t('form.facebook')}</h4>
                <TextField
                  id='outlined-basic'
                  label={t('form.facebook')}
                  variant='outlined'
                  inputProps={{ name: 'facebook', maxLength: 100 }}
                  value={state.facebook}
                  onChange={handleChange}
                  required
                  type='text'
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <h4>{t('form.email')}</h4>
                <TextField
                  id='outlined-basic'
                  label={t('form.email')}
                  variant='outlined'
                  type='email'
                  inputProps={{ name: 'email', maxLength: 50 }}
                  value={state.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>

            <h4>{t('form.date')} </h4>
            <TextField
              id='date'
              label={t('form.date')}
              type='date'
              value={state.date}
              onChange={handleChange}
              inputProps={{ name: 'date', maxLength: 20 }}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
            <h4>{t('form.addInfo')}</h4>
            <TextField
              id='filled-multiline-flexible'
              multiline
              maxrows={4}
              label={t('form.addInfo')}
              variant='outlined'
              style={{ width: '100%' }}
              inputProps={{ name: 'more', maxLength: 250 }}
              value={state.more}
              onChange={handleChange}
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
