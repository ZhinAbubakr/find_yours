import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import ErrorIcon from '@material-ui/icons/Error'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { useStyles } from './Style'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function RecipeReviewCard({ post }) {
  const { t } = useTranslation()
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <div>
        <CardHeader
          avatar={<Avatar src={post.avatar} className={classes.avatar} />}
          title={post.name}
          subheader={
            <>
              <div style={{ textTransform: 'capitalize' }}>
                {post.date}, {post.province}
              </div>
              {post.isLost ? (
                <Chip
                  className={classes.lostTag}
                  color='secondary'
                  size='small'
                  icon={<ErrorIcon className={classes.tagIcon} />}
                  label='Lost'
                />
              ) : (
                <Chip
                  className={classes.foundTag}
                  color='primary'
                  size='small'
                  icon={<CheckCircleIcon className={classes.tagIcon} />}
                  label='Found'
                />
              )}
            </>
          }
        />
        <CardContent className={classes.content}>
          <Typography variant='h6' color='textSecondary' component='p'>
            {post.title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {post.body.map((word, i) => (
              <span key={i}>{word} </span>
            ))}
          </Typography>
        </CardContent>
      </div>
      <div>
        <img src={post.image} height='240' width='350' alt='Post image' />
        <CardActions disableSpacing>
          <Link to={`/post/${post.id}`} className={classes.links}>
            <Button className={classes.button}>{t('post.view')}</Button>
          </Link>
        </CardActions>
      </div>
    </Card>
  )
}
