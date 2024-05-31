'use client'

import {
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Button,
  SwipeableDrawer,
  ClickAwayListener
} from '@mui/material'
import { useState } from 'react'
import buttonBgUrl from '@/assets/svg/button_long_bg.svg?url'
import SocialLinks from '../Footer/SocialLinks'
import SushiImg from 'src/assets/svg/sushi.svg'
import Arrow from 'src/assets/svg/arrow.svg'

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

  const menuItems = [
    { label: 'Base', href: 'https://base.krav.trade' },
    { label: 'Ethereum', href: 'https://eth.krav.trade' }
  ]
  const menuItemsStyle = {
    display: 'flex',
    textDecoration: 'none',
    color: '#000',
    fontFamily: 'Flexa,Monument Extended,Helvetica,sans-serif',
    fontSize: '28px',
    fontStyle: 'normal',
    fontWeight: '900',
    lineHeight: '110%',
    letterSpacing: '0.56px',
    padding: '16px 24px',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all .5s',
    width: '236px',
    '&:hover, :active': {
      background: '#F6F6F6!important'
    }
  }
  const [isShowMenu, setIsShowMenu] = useState(false)

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
        sx={{ position: 'relative', zIndex: 9999 }}
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
            background: theme => theme.palette.background.default,
            height: 'calc(100vh - 16px)',
            maxHeight: 'unset',
            padding: '40px 24px 200px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }
        }}
      >
        <Box component={'ul'} display={'grid'} gap={20}>
          {pages.map(([page, link], idx) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography
                textAlign="center"
                variant="h5"
                component={'a'}
                href={link}
                target="_blank"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                {idx === 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 990 916"
                  >
                    <path
                      fill="url(#paint0_linear_12919_18033)"
                      fillRule="evenodd"
                      d="M969.311 593.493l-193.11 269.99c-28.12 39.37-82.96 56.71-152.8 51.09-97.03-8.44-225.93-60-349.2-148.58a975.047 975.047 0 01-113.6-94.36c-65.32-63.44-113.33-129.44-139.04-188.29-28.12-64.68-29.05-121.86-.93-161.23L214.2 52.123c28.13-39.37 82.5-56.71 152.81-51.09 97.03 7.97 225.46 60 349.19 148.12 123.28 88.59 213.75 194.05 252.18 283.11 3.32 7.64 6.26 15.17 8.82 22.59 19.11 55.35 16.91 103.92-7.89 138.64z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M938.381 445.383c-37.03-84.84-123.75-184.68-241.86-269.05-117.65-84.37-239.98-134.52-332.32-142.02-56.25-4.69-100.78 5.63-123.27 37.03l-.95 1.87c-21.09 31.41-16.4 75.94 5.63 126.56 37.03 85.31 123.74 185.14 241.4 269.51 117.64 84.371 239.98 134.53 332.31 142.03 55.31 4.21 98.91-5.629 121.87-35.159l1.41-2.341c22.5-30.94 17.81-76.87-4.22-128.43zm-172.96 1.88c-10.31 14.52-31.4 18.75-57.18 16.4-46.41-3.75-107.34-29.06-166.4-71.24-59.06-42.19-102.65-91.88-120.93-134.53-10.31-23.9-13.12-44.99-2.81-59.53 10.32-14.53 31.41-18.75 57.65-16.87 45.93 4.22 107.34 29.06 165.93 71.25 59.06 42.18 102.65 92.33 120.93 134.99 10.78 23.9 13.59 44.99 2.81 59.53z"
                      clipRule="evenodd"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_12919_18033"
                        x1="336.076"
                        x2="653.893"
                        y1="-11.067"
                        y2="926.765"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#27B0E6"></stop>
                        <stop offset="0.107" stopColor="#49A1DB"></stop>
                        <stop offset="0.288" stopColor="#7D8ACA"></stop>
                        <stop offset="0.445" stopColor="#A279BD"></stop>
                        <stop offset="0.572" stopColor="#BA6FB6"></stop>
                        <stop offset="0.651" stopColor="#C26BB3"></stop>
                        <stop offset="0.678" stopColor="#D563AD"></stop>
                        <stop offset="0.715" stopColor="#E65BA7"></stop>
                        <stop offset="0.76" stopColor="#F156A3"></stop>
                        <stop offset="0.824" stopColor="#F853A1"></stop>
                        <stop offset="1" stopColor="#FA52A0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                )}
                {page}
              </Typography>
            </MenuItem>
          ))}
        </Box>
        <Box
          sx={{
            position: 'relative'
          }}
          display={'grid'}
          justifyItems={'center'}
          gap={20}
        >
          <SocialLinks />
          <ClickAwayListener onClickAway={() => setIsShowMenu(false)}>
            <Box display={'flex'}>
              <Box
                sx={{
                  display: 'flex',
                  width: '304px',
                  padding: '4px 8px 4px 10px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundSize: '100% !important',
                  backgroundPosition: 'right',
                  cursor: 'pointer',
                  background: '#2832F5',
                  color: '#fff'
                }}
                onClick={e => {
                  e.stopPropagation()
                  setIsShowMenu(!isShowMenu)
                }}
              >
                <Typography variant="h5" whiteSpace={'nowrap'}>
                  Launch app
                </Typography>
                <Box
                  ml={10}
                  sx={{
                    transform: `${isShowMenu ? 'rotate(60deg)' : ''}`
                  }}
                >
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Frame 1000005658">
                      <path
                        id="Polygon 11"
                        d="M6 10L0.803849 0.999999L11.1962 1L6 10Z"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </Box>
              </Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="34"
                viewBox="0 0 8 34"
                fill="none"
              >
                <path
                  d="M0 0H8V22L4.20904 28L0.418076 34H0V0Z"
                  fill="#2832F5"
                />
              </svg>
              {isShowMenu && (
                <Box
                  width={236}
                  px={8}
                  display={'flex'}
                  sx={{
                    position: 'absolute',
                    bottom: '50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '8px',
                    border: '1px solid var(--light-grey-02, #DADADA)',
                    background: '#FFF',
                    boxShadow: '0px 3px 24px 0px rgba(0, 0, 0, 0.06)',
                    zIndex: 99
                  }}
                >
                  {menuItems.map(item => (
                    <Box
                      component={'a'}
                      sx={menuItemsStyle}
                      key={item.label}
                      href={item.href}
                    >
                      {item.label}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </ClickAwayListener>
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
