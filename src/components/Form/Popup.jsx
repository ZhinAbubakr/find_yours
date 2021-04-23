import { Grid, Box, Typography, Dialog, Zoom } from '@material-ui/core'
import React from 'react'
import useStyles from './Style'
import Button from '@material-ui/core/Button'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import DoneAllIcon from '@material-ui/icons/DoneAll'

function FormSubmitted({ openDialog, loading }) {
  const { t } = useTranslation()
  const classes = useStyles()
  const history = useHistory()
  const handlePush = () => {
    history.push('/dashboard')
  }
  return (
    <>
      <Dialog
        fullWidth
        aria-labelledby='simple-dialog-title'
        open={openDialog}
        classes={{ paper: classes.dialog }}
        BackdropProps={{
          classes: {
            root: classes.backDrop,
          },
        }}>
        <Box py={1}>
          <Grid container direction='column' justify='center' alignItems='center'>
            {loading ? (
              <Box align='center' pt={2}>
                <Loader type='Circles' color='#3AAFA9' height={80} width={80} />
                <Typography variant='h5' className={classes.loading}>
                  {t('formPopup.submitting')}
                </Typography>
              </Box>
            ) : (
              <Zoom in={true}>
                <div align='center'>
                  <DoneAllIcon className={classes.doneIcon} />
                  <Typography variant='body1' className={classes.loading}>
                    {t('formPopup.submitted')}
                  </Typography>
                  <Button
                    onClick={handlePush}
                    variant='contained'
                    className={classes.goBtn}
                    size='small'>
                    {t('formPopup.go')}
                  </Button>
                </div>
              </Zoom>
            )}
          </Grid>
        </Box>
      </Dialog>
    </>
  )
}

export default FormSubmitted
