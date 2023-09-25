'use client'
import { Box, Typography } from '@mui/material'
import Rec1 from '@/assets/svg/rectangle1.svg'
import Rec2 from '@/assets/svg/rectangle2.svg'
import Rec3 from '@/assets/svg/rectangle3.svg'
import Rec4 from '@/assets/svg/rectangle4.svg'
import Pot from './Pot'
import { useEffect, useState } from 'react'
import { IOverviewData, getOverview, getStaking } from '@/fetch'

function addThousandsSeparator(number: number) {
  return number.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default function Stats() {
  const [data, setData] = useState<IOverviewData>()
  const [staking, setStaking] = useState<string>()

  useEffect(() => {
    const getData = async ()=> {
      const ret = await getOverview()
      if (!ret) return
      setData(ret)
    }
    getData()
  }, [])

  useEffect(() => {
    const getData = async ()=> {
      const ret = await getStaking()
      if (!ret) return
      setStaking((BigInt(ret) / BigInt(1e18)).toLocaleString())
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
            $ {data?.liquiditySupply === undefined ? '--' : addThousandsSeparator(Number(data.liquiditySupply) / 10000)}
          </Typography>
        </Box>
        <Box>
          <Rec2 />
          <Typography variant="h5">Volume</Typography>
          <Typography variant="h6" bottom={{ xs: 8, md: 60, lg: 70 }}>
            $ {data?.tradingVolume === undefined ? '--' : addThousandsSeparator(Number(data.tradingVolume) / 10000)}
          </Typography>
        </Box>
        <Box>
          <Rec3 />
          <Typography variant="h5">Staking</Typography>
          <Typography
            variant="h6"
            textAlign={'right'}
            bottom={{ xs: 18, md: 60, lg: 70 }}
          >
            {staking || '--'} <Typography variant='h6' component={'span'} sx={{ fontSize: {md: 36, xs: 20}, fontWeight: 600 }}>KRAV</Typography>
            {/* $ {data?.fees === undefined ? '--' : addThousandsSeparator(Number(data.fees) / 10000)} */}
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
            7 <span>Assets</span>
          </Typography>
        </Box>
      </Box>
      <Pot />
    </>
  )
}
