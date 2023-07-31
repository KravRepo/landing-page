'use client'
import { Box, Typography } from '@mui/material'
import Rec1 from '@/assets/svg/rectangle1.svg'
import Rec2 from '@/assets/svg/rectangle2.svg'
import Rec3 from '@/assets/svg/rectangle3.svg'
import Rec4 from '@/assets/svg/rectangle4.svg'
import Pot from './Pot'
import { useEffect, useState } from 'react'
import { IOverviewData, getOverview } from '@/fetch'

export default function Stats() {
  const [data, setData] = useState<IOverviewData>()

  useEffect(() => {
    const getData = async ()=> {
      const ret = await getOverview()
      if (!ret) return
      setData(ret)
    }
    getData()
  }, [])

  return (
    <>
      <Box
        display="grid"
        width="100%"
        gridTemplateColumns={'1fr 1fr'}
        gridTemplateRows={'auto auto'}
        height={{ xs: 248, md: '700px' }}
        gap={{ xs: 16, md: '20px' }}
        sx={{
          '&>div': {
            backgroundSize: '100% 100%!important',
            backgroundPosition: 'center center',
            padding: { xs: 16, md: '40px', lg: '60px' },
            position: 'relative'
          },
          '& svg': {
            width: '100%',
            height: '100%',
            position: 'absolute',
            zIndex: -1,
            top: 0,
            left: 0,
            objectFit: 'cover'
          },
          '& h5': {
            textTransform: 'uppercase',
            fontSize: { xs: 14, md: 28 }
          },
          '& h6': {
            position: 'absolute',
            right: { xs: 16, md: 60, lg: 70 },
            fontSize: { xs: 20, sm: 24, md: 95 },
            lineHeight: 0.8
          }
        }}
      >
        <Box>
          <Rec1 />
          <Typography variant="h5">liquidity</Typography>
          <Typography
            variant="h6"
            textAlign={'right'}
            bottom={{ xs: 12, md: 60, lg: 70 }}
          >
            ${data?.liquiditySupply === undefined ? '--' : (Number(data.liquiditySupply) / 100 ).toFixed(2)}
          </Typography>
        </Box>
        <Box>
          <Rec2 />
          <Typography variant="h5">Volume</Typography>
          <Typography variant="h6" bottom={{ xs: 8, md: 60, lg: 70 }}>
            ${data?.tradingVolume === undefined ? '--' : (Number(data.tradingVolume) / 100 ).toFixed(2)}
          </Typography>
        </Box>
        <Box>
          <Rec3 />
          <Typography variant="h5">USER</Typography>
          <Typography
            variant="h6"
            textAlign={'right'}
            bottom={{ xs: 18, md: 60, lg: 70 }}
          >
            {data?.userCount === undefined ? '--' : data.userCount} <span>users</span>
          </Typography>
        </Box>
        <Box
        // sx={{
        //   background: `url(${rec4Url.src}) no-repeat`
        // }}
        >
          <Rec4 />
          <Typography variant="h5">$ AS Collateral</Typography>
          <Typography variant="h6" bottom={{ xs: 18, md: 60, lg: 70 }}>
            1 <span>Assets</span>
          </Typography>
        </Box>
      </Box>
      <Pot />
    </>
  )
}
