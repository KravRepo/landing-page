'use client'

import {
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Button,
  SwipeableDrawer
} from '@mui/material'
import { useState } from 'react'
import buttonBgUrl from '@/assets/svg/button_long_bg.svg?url'
import SocialLinks from '../Footer/SocialLinks'

export default function MobileMenu({ pages }: { pages: [string, string][] }) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
    const body = document.getElementsByTagName('body')[0]
    body.style.height = '100vh'
    body.style.overflowY = 'hidden'
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
    const body = document.getElementsByTagName('body')[0]
    body.style.height = 'auto'
    body.style.overflowY = 'auto'
  }

  return (
    <Box
      sx={{
        flexGrow: 0,
        display: { xs: 'flex', md: 'none' },
        marginLeft: 'auto'
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={anchorElNav ? handleCloseNavMenu : handleOpenNavMenu}
        color="inherit"
      >
        {!anchorElNav ? (
          <svg width="32" height="32" viewBox="0 0 32 32">
            <line y1="11.5" x2="32" y2="11.5" stroke="black" />
            <line y1="17.5" x2="32" y2="17.5" stroke="black" />
            <line y1="23.5" x2="32" y2="23.5" stroke="black" />
          </svg>
        ) : (
          <svg width="32" height="32" viewBox="0 0 32 32">
            <line
              x1="5.35355"
              y1="4.64645"
              x2="27.981"
              y2="27.2739"
              stroke="black"
            />
            <line
              x1="4.64645"
              y1="27.6464"
              x2="27.2739"
              y2="5.01903"
              stroke="black"
            />
          </svg>
        )}
      </IconButton>
      <SwipeableDrawer
        anchor={'top'}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        onOpen={handleOpenNavMenu}
        hideBackdrop
        sx={{
          top: 68,
          bottom: 0
        }}
        PaperProps={{
          sx: {
            boxShadow: 'none',
            width: '100vw',
            background: (theme) => theme.palette.background.default,
            height: 'calc(100vh - 68px)',
            maxHeight: 'unset',
            padding: '40px 24px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }
        }}
      >
        <Box component={'ul'} display={'grid'} gap={20}>
          {pages.map(([page, link]) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography
                textAlign="center"
                variant="h5"
                component={'a'}
                href={link}
                target="_blank"
                sx={{
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                {page}
              </Typography>
            </MenuItem>
          ))}
        </Box>
        <Box display={'grid'} justifyItems={'center'} gap={20}>
          <SocialLinks />
          <Button variant="contained" sx={{
              backgroundSize: '100% !important',
              backgroundPosition: 'right',
              cursor: 'auto'
            }}>
              <Typography variant="h5" whiteSpace={'nowrap'}>
                Launch app (coming soon)
              </Typography>
            </Button>
        </Box>
      </SwipeableDrawer>
      {/* <Menu
        // disableScrollLock
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        // keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        slot="div"
        slotProps={{
          paper: {
            sx: {
              boxShadow: 'none',
              width: '100vw',
              background: (theme) => theme.palette.background.default,
              height: 'calc(100vh - 68px)',
              top: '68px!important',
              maxHeight: 'unset',
              padding: '40px 0px',
              position: 'relative',
              '& ul': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }
            }
          }
        }}
        sx={{
          display: { xs: 'block', md: 'none' }
        }}
      ></Menu> */}
    </Box>
  )
}
