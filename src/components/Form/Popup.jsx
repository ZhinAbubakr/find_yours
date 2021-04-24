import { Grid, Box, Typography, Dialog, Zoom } from '@material-ui/core'
import React from 'react'
import useStyles from './Style'
import Button from '@material-ui/core/Button'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import DoneAllIcon from '@material-ui/icons/DoneAll'
import CloseIcon from '@material-ui/icons/Close'
import HashLoader from 'react-spinners/HashLoader'

function FormSubmitted({ openDialog, loading, setOpenDialog }) {
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
          {!loading && (
            <Button className={classes.close} onClick={() => setOpenDialog(false)}>
              <CloseIcon />
            </Button>
          )}
          <Grid container direction='column' justify='center' alignItems='center'>
            {loading ? (
              <Box align='center' pt={2}>
                <Box pb={7} pt={5}>
                  <HashLoader loading={loading} color='#3bb78f' size={70} />
                </Box>
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
