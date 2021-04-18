import React, { useState, useEffect, useContext } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Post from '../Dashboard/Post/Post'
import useStyles from './style'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from './style'
import {
  Container,
  Button,
  Grid,
  Typography,
  CardMedia,
  Divider,
  Box,
  ListItem,
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { ProfileContext } from '../../profileContext'
import { Link } from 'react-router-dom'
import { db } from '../../firebase'
import { FORM_ROUTE } from '../../containers/routes'

export default function Profile() {
  const classes = useStyles()
  const [postsNum, setPostsNum] = useState(3)
  const [posts, setPosts] = useState([])
  const [profile] = useContext(ProfileContext)
  const [showMoreBtn, setShowMoreBtn] = useState(true)
  const { t } = useTranslation()

  useEffect(() => {
    const fetch = () => {
      if (profile) {
        const query = db
          .collection('posts')
          .where('userId', '==', `${profile ? profile.googleId : null}`)
        query
          .limit(postsNum)

          .onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => doc.data()))
          })

        query.get().then((snap) => setShowMoreBtn(snap.size > postsNum))
      }
    }
    fetch()
    return fetch()
  }, [profile, postsNum])
  const profileInfo = (
    <ListItem>
      <Grid container justify='space-around'>
        <Grid item xs={12} sm={5}>
          <Box pb={2}>
            <Typography variant='body1' color='textSecondary'>
              {t('profile.name')}
            </Typography>
            <Typography variant='body1'>{profile.name || 'Name Not provided'}</Typography>
            <Divider />
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant='body1' color='textSecondary'>
            {t('profile.email')}
          </Typography>
          <Typography variant='body1'>{profile.email || 'Email Not provided'}</Typography>
          <Divider />
        </Grid>
      </Grid>
    </ListItem>
  )
  return (
    <>
      <Container className={classes.container} maxWidth='lg'>
        <ThemeProvider theme={theme}>
          <Typography variant='h4' className={classes.headerTypo}>
            {profile.name}
          </Typography>
          <Grid container spacing={3} direction='row'>
            <Grid item xs={12} sm={6} md={3}>
              <Container maxWidth='sm'>
                <CardMedia
                  component='img'
                  className={classes.media}
                  src={profile.imageUrl}
                  title='x'
                />
              </Container>
            </Grid>
            {posts.length === 0 ? (
              profileInfo
            ) : (
              <Grid item xs={12} md={8} className={classes.container3}>
                {profileInfo}
                <br />
                <ListItem>
                  <Grid container justify='space-around'>
                    <Grid item xs={12} sm={5}>
                      <Box pb={2}>
                        <Typography variant='body1' color='textSecondary'>
                          {t('profile.address')}
                        </Typography>
                        <Typography variant='body1'>
                          {posts[0].province || 'Address Not provided'}
                        </Typography>
                        <Divider />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                      <Typography variant='body1' color='textSecondary'>
                        {t('profile.phone')}
                      </Typography>
                      <Typography variant='body1'>
                        {posts[0].phone || 'Phone No. Not provided'}
                      </Typography>
                      <Divider />
                    </Grid>
                  </Grid>
                </ListItem>
              </Grid>
            )}
          </Grid>
        </ThemeProvider>
      </Container>

      <Divider variant='inset' className={classes.divider} />

      <ThemeProvider theme={theme}>
        <Grid container justify='space-around' spacing={2}>
          <Grid>
            <Typography variant='h6' style={{ fontWeight: 'bold' }}>
              {t('profile.myposts')}
            </Typography>
          </Grid>

          <Grid xs={12} item>
            {posts.length === 0 && (
              <Typography variant='h6' className={classes.noPosts}>
                {t('profile.showposts')}
              </Typography>
            )}
          </Grid>

          {posts ? (
            posts.map((post, i) => (
              <Grid container justify='center' key={i} item xs={12} sm={6} md={4}>
                <Grid item align='left'>
                  <Post post={post} />
                </Grid>
              </Grid>
            ))
          ) : (
            <Grid xs={12}>
              <CircularProgress style={{ marginLeft: '45%' }} />
            </Grid>
          )}

          <Grid align='right' item xs={12}>
            <Box px={2} py={2}>
              {showMoreBtn && (
                <Box pr={2} component='span'>
                  <Button
                    onClick={() => setPostsNum(postsNum + 3)}
                    className={classes.button}
                    variant='contained'>
                    {t('profile.showmore')}
                  </Button>
                </Box>
              )}

              <Link to={FORM_ROUTE} className={classes.links}>
                <Button className={classes.button} variant='contained'>
                  {t('profile.addpost')}
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  )
}
