import {
  Grid,
  Select,
  MenuItem,
  Box,
  Container,
  FormControl,
  FormHelperText,
  Typography,
  Paper,
} from '@material-ui/core'
import React, { useContext, useState } from 'react'
import useStyles from './Style'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { db } from '../../firebase'
import { storage } from '../../firebase'
import 'date-fns'
import { ProfileContext } from '../../profileContext'
import { useTranslation } from 'react-i18next'
import { theme } from '../ViewPost/style'
import { ThemeProvider } from '@material-ui/styles'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

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
    <Container>
      <Paper elevation={8}>
        <Box mt={9} mb={4} pb={1} px={2}>
          <Typography variant='h4' align='center'>
            Submit New Post
          </Typography>
          <ThemeProvider theme={theme}>
            <Grid container direction='row' justify='center'>
              <Grid item xs={12}>
                <h4 className={classes.title}>{t('form.title')}</h4>
                <TextField
                  className={classes.titleTextW}
                  label={t('form.title')}
                  variant='outlined'
                  value={state.item}
                  name='item'
                  helperText={t('form.titleEx')}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <h2>Select</h2>
              <Grid item xs={12} container>
                <Grid item xs={12} sm={6} md={3}>
                  <h4 className={classes.title}>{t('filter.catagory')}</h4>
                  <FormControl className={classes.selectW}>
                    <Select
                      labelId='demo-simple-select-label'
                      value={state.category}
                      onChange={handleChange}
                      name='category'
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
                    <FormHelperText>{t('form.categoryEx')}</FormHelperText>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <FormControl className={classes.selectW}>
                    <h4 className={classes.title}>{t('filter.color')}</h4>
                    <Select
                      labelId='color'
                      value={state.color}
                      onChange={handleChange}
                      name='color'
                      required>
                      <MenuItem value='blue'>{t('filter.blue')}</MenuItem>
                      <MenuItem value='white'>{t('filter.white')}</MenuItem>
                      <MenuItem value='red'>{t('filter.red')}</MenuItem>
                      <MenuItem value='other'>{t('filter.Other')}</MenuItem>
                    </Select>
                    <FormHelperText>{t('form.colorEx')}</FormHelperText>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <FormControl className={classes.selectW}>
                    <h4 className={classes.title}>{t('form.where')}</h4>
                    <Select
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
                    <FormHelperText>{t('form.whereEx')}</FormHelperText>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <FormControl className={classes.selectW}>
                    <h4 className={classes.title}>{t('form.lostor')}</h4>
                    <Select
                      labelId='demo-simple-select-label'
                      value={state.isLost}
                      onChange={handleChange}
                      name='isLost'
                      required>
                      <MenuItem value={true}>{t('filter.Lost')}</MenuItem>
                      <MenuItem value={false}>{t('filter.Found')}</MenuItem>
                    </Select>
                    <FormHelperText>{t('form.type')}</FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>

              <h2 className={classes.contact}>{t('form.contact')}</h2>
              <Grid item xs={12} container justify='space-between'>
                <Grid item xs={12} sm={6} md={3}>
                  <h4 className={classes.title}>{t('form.phone')}</h4>
                  <TextField
                    label={t('form.phone')}
                    variant='outlined'
                    className={classes.contactW}
                    value={state.phone}
                    onChange={handleChange}
                    helperText={t('form.contactEx')}
                    name='phone'
                    required
                    type='number'
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <h4 className={classes.title}>{t('form.facebook')}</h4>
                  <TextField
                    label={t('form.facebook')}
                    variant='outlined'
                    value={state.facebook}
                    className={classes.contactW}
                    name='facebook'
                    helperText={t('form.facebookEx')}
                    onChange={handleChange}
                    required
                    type='text'
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <h4 className={classes.title}>{t('form.email')}</h4>
                  <TextField
                    label={t('form.email')}
                    className={classes.contactW}
                    name='email'
                    helperText={t('form.emailEx')}
                    variant='outlined'
                    type='email'
                    value={state.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <h4 className={classes.title}>{t('form.date')} </h4>
                <TextField
                  id='date'
                  helperText={t('form.dateEx')}
                  label={t('form.date')}
                  name='date'
                  type='date'
                  value={state.selectedDate}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                />
              </Grid>

              <Grid container justify='space-around'>
                <Grid item xs={12}>
                  <Box pb={3}>
                    <h4 className={classes.title}>{t('form.image')}</h4>
                  </Box>
                </Grid>
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
                        <Typography variant='h6'>{t('form.imageEx')}</Typography>
                      </Grid>

                      <Grid item xs={12} align='center'>
                        <CloudUploadIcon className={classes.cloudIcon} />
                      </Grid>
                    </Grid>
                  </label>
                </Grid>
                <Grid item sm={6} xs={10}>
                  <Box py={1} align='center'>
                    {state.image && <img src={state.image} alt='dd' width='70%' height='200px' />}
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <h4 className={classes.title}>{t('form.addInfo')}</h4>
                <TextField
                  name='more'
                  label={t('form.addInfo')}
                  variant='outlined'
                  helperText={t('form.addInfoEx')}
                  value={state.more}
                  className={classes.moreW}
                  onChange={handleChange}
                />
              </Grid>
              <Button
                align='center'
                onClick={handleSubmit}
                variant='contained'
                style={{ background: '#3AAFA9' }}
                className={classes.button}
                color='primary'
                type='submit'>
                {t('dash.submit')}
              </Button>
            </Grid>
          </ThemeProvider>
        </Box>
      </Paper>
    </Container>
  )
}

export default Form
