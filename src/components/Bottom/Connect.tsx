'use client'

import { Box, Typography, styled, useTheme } from '@mui/material'
import Wallet from '@/assets/svg/wallet.svg'
import { HideOnMobile, ShowOnMobile } from '@/theme'

const StyledWallet = styled(Wallet)({})

export default function Connect() {
  const theme = useTheme()
  return (
    <Box
      sx={{ background: theme.palette.primary.main }}
      display={{ xs: 'grid', md: 'flex' }}
      padding={{ xs: '40px 24px', md: '120px' }}
      gap={{ xs: 20, md: 71 }}
      justifyContent={'center'}
    >
      <HideOnMobile>
        <Typography
          variant="h5"
          fontSize={110}
          color="#ffffff"
          letterSpacing={'2.4'}
        >
          connect wallet
          <br /> to earn $krav
        </Typography>
      </HideOnMobile>
      <ShowOnMobile>
        <Typography
          variant="h5"
          fontSize={{ xs: 52, sm: 80 }}
          color="#ffffff"
          letterSpacing={2.4}
        >
          connect
          <br /> wallet to earn
          <br /> $krav
        </Typography>
      </ShowOnMobile>
      <StyledWallet
        sx={{
          width: {
            xs: '312px',
            sm: '300px',
            md: '418px',
            '& path': {
              transition: '.1s ease-in'
            },
            '&:hover path:nth-of-type(3n)': {
              transform: 'translateX(20px)'
            }
          }
        }}
      />
    </Box>
  )
}
