import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  MenuItem,
  MenuList,
  ListItemIcon,
  Divider,
} from '@material-ui/core'
import { useStyles } from './styles.js'
import { FiMenu } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import '../../i18n'
import React, { useState, useContext } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import LanguageIcon from '@material-ui/icons/Language'
import { Dashboard, Home, Info, Message, Lock } from '@material-ui/icons'
import Login from '../googleauth/Login'
import Logout from '../googleauth/Logout'
import { ProfileContext } from '../../profileContext'
import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { PROFILE_ROUTE } from '../../containers/routes'

export default function Header() {
  const options = ['عربي', 'English', 'كوردى']
  const ITEM_HEIGHT = 48
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const { t, i18n } = useTranslation()
  const headersData = [
    {
      label: `${t('navbar.home')}`,
      href: '/',
      icon: <Home style={{ color: 'white' }} />,
    },
    {
      label: `${t('navbar.dash')}`,
      href: '/dashboard',
      icon: <Dashboard style={{ color: 'white' }} />,
    },
    {
      label: `${t('navbar.privacypolicy')}`,
      href: '/PrivacyPolicy',
      icon: <Lock style={{ color: 'white' }} />,
    },
    {
      label: `${t('navbar.about')}`,
      href: '/about',
      icon: <Info style={{ color: 'white' }} />,
    },
    {
      label: `${t('navbar.contact')}`,
      href: '/contactUs',
      icon: <Message style={{ color: 'white' }} />,
    },
  ]

  const [profile] = useContext(ProfileContext)

  const profileHandler = (data) => {
    if (data.length == 0) {
      return <Login />
    } else {
      return (
        <div>
          <CardHeader
            className={navheader}
            avatar={
              <RouterLink to={PROFILE_ROUTE}>
                <Avatar src={data.imageUrl} className={avatar} />
              </RouterLink>
            }
            title={<Logout />}
          />
        </div>
      )
    }
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    switch (e.target.value) {
      case 0:
        i18n.changeLanguage('ar')
        break
      case 1:
        i18n.changeLanguage('en')
        break
      case 2:
        i18n.changeLanguage('kr')
        break
    }
  }
  const {
    header,
    logo,
    menuButton,
    toolbar,
    drawerContainer,
    toolbar2,
    languageicon,
    toolbar3,
    toolbar4,
    avatar,
    navheader,
    paper,
    navlink,
    sidelink,
  } = useStyles()

  const [state, setState] = useState({
    drawerOpen: false,
  })

  const { drawerOpen } = state

  const mobileView = useMediaQuery('(max-width: 1028px)')

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>{getMenuButtons()}</div>
        <div className={toolbar2}>
          <IconButton
            aria-label='more'
            aria-controls='long-menu'
            aria-haspopup='true'
            onClick={handleClick}>
            <LanguageIcon className={languageicon} />
          </IconButton>
          <Menu
            id='long-menu'
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}>
            {options.map((option, i) => (
              <MenuItem key={option} value={i} selected={option === 'Pyxis'} onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
          {profileHandler(profile)}
        </div>
      </Toolbar>
    )
  }

  const displayMobile = () => {
    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }))
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }))

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen,
          }}>
          <FiMenu />
        </IconButton>

        <Drawer
          classes={{ paper: paper }}
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
            onClick: handleDrawerClose,
          }}>
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <div className={toolbar3}>
          {femmecubatorLogo}
          <div className={toolbar4}>
            <IconButton
              aria-label='more'
              aria-controls='long-menu'
              aria-haspopup='true'
              onClick={handleClick}>
              <LanguageIcon className={languageicon} />
            </IconButton>
            <Menu
              id='long-menu'
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
                },
              }}>
              {options.map((option, i) => (
                <MenuItem
                  key={option}
                  value={i}
                  selected={option === 'Pyxis'}
                  onClick={handleClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
            {profileHandler(profile)}
          </div>
        </div>
      </Toolbar>
    )
  }

  const getDrawerChoices = () => {
    return headersData.map(({ label, href, icon }) => {
      return (
        <RouterLink
          key={href}
          exact
          {...{
            className: sidelink,
            to: href,
            color: 'inherit',
            key: label,
          }}>
          <MenuList>
            <MenuItem>
              <ListItemIcon>{icon}</ListItemIcon>
              {label}
            </MenuItem>
            <Divider />
          </MenuList>
        </RouterLink>
      )
    })
  }

  const femmecubatorLogo = (
    <Typography variant='h6' component='h1' className={logo}>
      FindYours
    </Typography>
  )

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <RouterLink key={href} to={href} className={navlink} exact>
          <Button
            {...{
              key: label,
              color: 'inherit',
              className: menuButton,
            }}>
            {label}
          </Button>
        </RouterLink>
      )
    })
  }

  return (
    <header>
      <AppBar className={header}>{mobileView ? displayMobile() : displayDesktop()}</AppBar>
    </header>
  )
}
