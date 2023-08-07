import Logo from '@/assets/svg/logo.svg'
import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography
} from '@mui/material'
import MobileMenu from './MobileMenu'
import { HideOnMobile, ShowOnMobile } from '@/theme'
import SocialLinks from '../Footer/SocialLinks'

const pages: [string, string][] = [
  // ['COMMUNITY', ''],
  // ['GOVERNANCE', ''],
  ['DOCS', 'https://docs.krav.trade/welcome-to-krav/introduction'],
  ['Listing Apply', 'https://forms.gle/wiqvg5AES6Lwzgpq9'],
]

export default function Navbar() {
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
            <Logo style={{ width: 90, height: 'auto' }} viewBox="0 0 135 30" />
          </ShowOnMobile>
          <MobileMenu pages={pages} />

          <Box
            sx={{
              marginLeft: 'auto',
              display: { xs: 'none', md: 'flex' },
              gap: 80
            }}
          >
            {pages.map(([page, link]) => (
              <Button
                component="a"
                href={link}
                target="_blank"
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography variant="h5"> {page}</Typography>
              </Button>
            ))}
            <Stack direction={'row'} spacing={20}>
              <SocialLinks />

              <Button variant="contained" sx={{
                backgroundSize: '100% !important',
                backgroundPosition: 'right',
                cursor: 'auto'
              }}
              component="a"
              href={'https://base.krav.trade/'}
              target="_blank"
              >
                <Typography variant="h5" whiteSpace={'nowrap'}>
                  Launch app
                </Typography>
              </Button>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
