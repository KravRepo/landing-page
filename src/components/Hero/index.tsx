import { Box, Typography } from '@mui/material'
import poleUrl from '@/assets/img/pole.png'
// @ts-ignore
import eyeUrl from '@/assets/svg/eye.svg?url'
// @ts-ignore
import headUrl from '@/assets/svg/head.svg?url'
import Img from '../Image/image'
import { HideOnMobile, ShowOnMobile } from '@/theme'

const title = 'Trade BTC with \nleverage using any \naltcoin as \ncollateral'
const subtitle =
  'Krav is a next generation decentralized quanto \nperpetual exchange.'

export default function Hero() {
  return (
    <>
      <ShowOnMobile>
        <Typography
          component="div"
          fontSize={{ xs: 62, sm: 90 }}
          width="100%"
          whiteSpace={{ xs: 'normal', sm: 'pre' }}
          variant="h5"
          position="relative"
        >
          {title}
          <Img
            src={eyeUrl}
            alt=""
            sx={{
              width: { xs: 60, sm: 80 },
              position: 'absolute',
              right: 0,
              bottom: { xs: -50, sm: 0 }
            }}
          />
        </Typography>
      </ShowOnMobile>
      <Box
        maxWidth={1200}
        // overflow={'hidden'}
        maxHeight={'90vh'}
        display={{ xs: 'grid', md: 'flex' }}
        width={'100%'}
        justifyItems={{ xs: 'center', md: undefined }}
        gridTemplateColumns={'auto 1fr auto'}
        justifyContent={'space-between'}
        alignItems={'stretch'}
        gap={{ xs: 0, md: 23 }}
      >
        <Box height={{ xs: '180px', md: '100%' }} sx={{}}>
          <Img
            src={poleUrl}
            alt=""
            sx={{
              height: { xs: '150px', md: 'auto' },
              width: { xs: 'auto', md: '180px' },
              margin: 'auto 0'
            }}
          />
        </Box>
        <HideOnMobile sx={{ flexGrow: 1 }}>
          <Box
            position={'relative'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
            height={'100%'}
          >
            <Typography
              fontSize={{ md: 95, xl: 120 }}
              maxWidth={790}
              whiteSpace={'pre'}
              variant="h5"
              lineHeight={'100%'}
              letterSpacing={2.4}
            >
              {title}
            </Typography>

            <Typography whiteSpace={'pre'} mb={{ xs: 0, md: 80 }}>
              {subtitle}
            </Typography>
            {/* <HideOnMobile> */}
            <Box
              display="flex"
              height="100%"
              flexDirection={'column'}
              justifyContent={'space-between'}
              alignItems={'center'}
              position={'absolute'}
              top={0}
              right={0}
            >
              <Img
                src={eyeUrl}
                alt=""
                sx={{ width: { xs: 80, md: 100, lg: 'auto' } }}
              />

              <Img
                src={headUrl}
                alt=""
                sx={{ height: { md: 100, lg: 'auto' } }}
              />
            </Box>
            {/* </HideOnMobile> */}
          </Box>
        </HideOnMobile>
        <ShowOnMobile>
          <Box
            display="flex"
            flexDirection={'column'}
            justifyContent={'space-between'}
            height={'100%'}
            alignItems={'center'}
          >
            <Typography
              whiteSpace={'break-spaces'}
              fontSize={14}
              fontWeight={500}
              textAlign={'center'}
            >
              {subtitle}
            </Typography>
            <Img src={headUrl} alt="" sx={{ height: { xs: 80, sm: 120 } }} />
          </Box>
        </ShowOnMobile>
        <Box height={{ xs: '180px', md: '100%' }} sx={{}}>
          <Img
            src={poleUrl}
            alt=""
            sx={{
              height: { xs: '150px', md: 'auto' },
              width: { xs: 'auto', md: '180px' },
              margin: 'auto 0'
            }}
          />
        </Box>
      </Box>
    </>
  )
}
