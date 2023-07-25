'use client'
import { Box } from '@mui/material'
import marquee_url from '@/assets/img/marquee2.png'
import marquee_url_m from '@/assets/img/marquee2_mobile.png'
import { AnimatedBox2 } from './AnimatedBox'
import Img from '../Image/image'
import { HideOnMobile, ShowOnMobile } from '@/theme'

export default function Marquee2() {
  return (
    <Box
      sx={{
        border: '1px solid #000000',
        borderRadius: 1.5,
        background: (theme) => theme.palette.background.paper,
        py: { xs: 100, sm: 120, md: 160 },
        width: '94vw',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <ShowOnMobile>
        <AnimatedBox2 sx={{ top: '6px', left: 0, width: '100%' }} duration={18}>
          <Box width="100%">
            {Array.from(Array(4).keys()).map((_, idx) => (
              <Img
                key={idx}
                src={marquee_url_m}
                alt=""
                sx={{ width: '100%', height: 'auto' }}
              />
            ))}
          </Box>
        </AnimatedBox2>
      </ShowOnMobile>
      <HideOnMobile>
        <AnimatedBox2 sx={{ top: '6px', left: 0, width: '100%' }}>
          <Box width="100%">
            <Img
              src={marquee_url}
              alt=""
              sx={{ width: '100%', height: 'auto' }}
            />
          </Box>
        </AnimatedBox2>{' '}
      </HideOnMobile>
    </Box>
  )
}
