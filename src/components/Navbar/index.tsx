'use client';
import Logo from '@/assets/svg/logo.svg';
import {
  AppBar,
  Box,
  Button,
  ClickAwayListener,
  Container,
  Stack,
  Toolbar,
  Typography
} from '@mui/material';
import MobileMenu from './MobileMenu';
import { HideOnMobile, ShowOnMobile } from '@/theme';
import SocialLinks from '../Footer/SocialLinks';
import SushiImg from 'src/assets/svg/sushi.svg';
import Arrow from 'src/assets/svg/arrow.svg';
import { useState } from 'react';
import Link from 'next/link';
import zIndex from '@mui/material/styles/zIndex';

const pages: [string, string][] = [
  // ['COMMUNITY', ''],
  [
    'TRADE KRAV',
    'https://www.sushi.com/swap?chainId=8453&token0=NATIVE&token1=0xbE3111856e4acA828593274eA6872f27968C8DD6'
  ],
  ['DOCS', 'https://docs.krav.trade/welcome-to-krav/introduction'],
  // ['Listing', 'https://forms.gle/wiqvg5AES6Lwzgpq9']
];

export default function Navbar() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isMoveOnButton, setIsMoveOnButton] = useState(false);
  const menuItems = [
    { label: 'Base', href: 'https://base.krav.trade' },
    { label: 'Ethereum', href: 'https://eth.krav.trade' },
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
  };
  return (
    <AppBar
      position="static"
      sx={{
        padding: { xs: '12px 24px', md: '20px 40px' }
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HideOnMobile>
            <Logo />
          </HideOnMobile>
          <ShowOnMobile>
            <Logo
              style={{ width: 90, height: 'auto' }}
              viewBox="0 0 135 30"
            />
          </ShowOnMobile>
          <MobileMenu pages={pages} />

          <Box
            sx={{
              marginLeft: 'auto',
              display: { xs: 'none', md: 'flex' },
              gap: 80
            }}
          >
            {pages.map(([page, link], idx) => (
              <Button
                component="a"
                href={link}
                target="_blank"
                key={page}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'flex',
                  gap: 5,
                  position: 'relative'
                }}
              >
                {idx === 0 && (
                  <Box
                    sx={{
                      position: 'absolute',
                      right: -6,
                      top: -6
                    }}
                  >
                    <SushiImg />
                  </Box>
                )}
                <Typography variant="h5"> {page}</Typography>
              </Button>
            ))}
            <Stack direction={'row'} spacing={20}>
              <SocialLinks />

              <ClickAwayListener onClickAway={() => setIsShowMenu(false)}>
                <Box>
                  <Button
                    onClick={() => window.open('https://app.krav.trade')}
                    variant="contained"
                    sx={{
                      backgroundSize: '100% !important',
                      backgroundPosition: 'right',
                      cursor: 'pointer'
                    }}
                  // onMouseEnter={() => {
                  //   setIsMoveOnButton(true);
                  // }}
                  // onMouseLeave={() => {
                  //   setIsMoveOnButton(false);
                  // }}
                  // onClick={() => {
                  //   setIsShowMenu(!isShowMenu);
                  // }}
                  >
                    <Typography variant="h5" whiteSpace={'nowrap'}>
                      Launch app
                    </Typography>
                    {/* <Box
                      ml={10}
                      className="arrow"
                      sx={{
                        transform: `${isShowMenu ? 'rotate(60deg)' : ''
                          }`
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
                            fill={
                              isMoveOnButton
                                ? '#000'
                                : '#fff'
                            }
                          />
                        </g>
                      </svg>
                    </Box> */}
                  </Button>
                  {isShowMenu && (
                    <Box
                      width={236}
                      px={8}
                      display={'flex'}
                      sx={{
                        position: 'absolute',
                        top: '64px',
                        right: 0,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '8px',
                        border: '1px solid var(--light-grey-02, #DADADA)',
                        background: '#FFF',
                        boxShadow:
                          '0px 3px 24px 0px rgba(0, 0, 0, 0.06)',
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
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
