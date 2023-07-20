'use client'

import { Box, Typography } from '@mui/material'
import { AnimatedBox } from './AnimatedBox'

export default function MarqueeBlue() {
  return (
    <Box
      sx={{
        position: 'relative',
        background: (theme) => theme.palette.primary.main,
        height: { xs: 96, md: 200 },
        width: '100%',
        // ml: { xs: '-24px', md: '-40px', lg: '-6rem' },
        // width: {
        //   xs: 'calc(100% + 48px)',
        //   md: 'calc(100% + 80px)',
        //   lg: 'calc(100% + 12rem)'
        // },
        overflow: 'hidden'
      }}
    >
      <AnimatedBox sx={{ top: { xs: 6, md: -25 } }}>
        <Typography
          fontSize={{ xs: 64, md: 180 }}
          variant="h5"
          color="#ffffff"
          whiteSpace={'nowrap'}
        >
          Reviving Altcoins, Unleashing Volitility, Reviving Altcoins,
          Unleashing Volitility, Reviving Altcoins, Unleashing Volitility
        </Typography>
      </AnimatedBox>
    </Box>
  )
}
