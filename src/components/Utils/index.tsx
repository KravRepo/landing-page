import { Box, Button, Typography } from '@mui/material'
import StakeImg from 'src/assets/svg/utils-stake.svg'
import StakeMobileImg from 'src/assets/svg/utils-stake-mobile.svg'
import TradeImg from 'src/assets/svg/utils-trade.svg'
import TradeMobileImg from 'src/assets/svg/utils-trade-mobile.svg'
import LockImg from 'src/assets/svg/utils-lock.svg'
import LockMobileImg from 'src/assets/svg/utils-lock-mobile.svg'
import Img1 from 'src/assets/svg/utils-img1.svg'
import Img2 from 'src/assets/svg/utils-img2.svg'
import { HideOnMobile, ShowOnMobile } from '@/theme'

const styleCenter = {
  position: 'absolute',
  padding: 20,
  borderRadius: '50%',
  background: '#F1F1F1'
}

export default function Utils() {
  return (
    <Box>
      <Box
        mt={100}
        sx={{mb: {xs: 50, sm: 170}}}
        position={'relative'}
        display={'grid'}
        gridTemplateColumns={{ xs: '100%', md: '50% 50%' }}
        borderBottom={'1px solid #000000'}
        borderTop={'1px solid #000000'}
      >
        <Box
          padding={{ xs: '40px 24px 60px', md: '72px 90px 100px' }}
          borderBottom={{ xs: '1px solid #000000', md: 'none' }}
          borderRight={{ xs: undefined, md: '1px solid #000000' }}
          sx={{height: {xs: 312, sm: 720}}}
          display={'grid'}
        >
          <Box
            display={'grid'}
            sx={{justifyItems: {sm: 'center', xs: 'left'}}}
            maxWidth={510}
            >
              <Box>
                <Typography variant="h5" fontSize={{ xs: 32, md: 64 }}>
                  EARN REAL-YIELD BY STAKING ANY ALTCOIN
                </Typography>
                <Button variant='contained' sx={{height: {xs: 32, sm: 52}, width: {xs: 80, sm: 150}, mt: {xs:15, sm: 36}, cursor: 'auto'}}>
                  <Typography variant='h6' fontWeight={900} sx={{fontSize: {xs: 22, sm: 40}}} letterSpacing={'0.8px'}>
                    STAKE
                  </Typography>
                </Button>
              </Box>
          </Box>
          <Box pr={30} justifySelf="right" alignSelf="flex-end" maxWidth={510}>
            <HideOnMobile><StakeImg /></HideOnMobile>
            <ShowOnMobile><StakeMobileImg /></ShowOnMobile>
          </Box>
        </Box>

        <Box
          padding={{ xs: '40px 24px 40px', md: '72px 90px 100px' }}
          borderBottom={{ xs: '1px solid #000000', md: 'none' }}
          borderRight={{ xs: undefined, md: '1px solid #000000' }}
          sx={{height: {xs: 312, sm: 720}}}
          display={'grid'}
        >
          <Box
            display={'grid'}
            sx={{justifyItems: {sm: 'center', xs: 'left'}}}
            maxWidth={510}
            >
              <Box>
                <Typography variant="h5" fontSize={{ xs: 32, md: 64 }}>
                  TRADE BTC USING ANY ALTCOIN AS <br /> COLLATERAL
                </Typography>
                <Button variant='contained' sx={{height: {xs: 32, sm: 52}, width: {xs: 80, sm: 150}, mt: {xs:15, sm: 36}, cursor: 'auto'}}>
                  <Typography variant='h6' fontWeight={900} sx={{fontSize: {xs: 22, md: 40}}} letterSpacing={'0.8px'}>
                    Trade
                  </Typography>
                </Button>
              </Box>
          </Box>
          <Box pr={30} justifySelf="right" alignSelf="flex-end">
            <HideOnMobile><TradeImg /></HideOnMobile>
            <ShowOnMobile><TradeMobileImg /></ShowOnMobile>
          </Box>
        </Box>

        <HideOnMobile>
          <Box sx={{
            left: 'calc(50% - 40px)',
            top: -40,
            ...styleCenter
          }}>
            <Img1 />
          </Box>

          <Box sx={{
            left: 'calc(50% - 122px)',
            bottom: -122,
            ...styleCenter
          }}>
            <Img2 />
          </Box>
        </HideOnMobile>
      </Box>

      <Box maxWidth={1248} sx={{padding: {xs:"0 24px 10px 24px", sm: '0 10px 170px 10px'}}} margin={'auto'}>
        <Box display={'grid'} sx={{gridTemplateColumns: {sm: '1fr 180px', xs: '1fr'}}} gap={68}>
          <Box
            display={'grid'}
            sx={{justifyItems: {sm: 'center', xs: 'left'}}}
            >
              <Box>
                <Typography variant="h5" fontSize={{ xs: 32, md: 64 }}>
                  KRAV IS THE UTILITY AND GOVERNANCE TOKEN. ACCRUES PLATFORM’S GENERATED FEES IF LOCKED FOR VEKRAV
                </Typography>
                <Button variant='contained' sx={{height: {xs: 32, sm: 52}, width: {xs: 80, sm: 150}, mt: {xs:15, sm: 36}, cursor: 'pointer'}}>
                  <Typography variant='h6' fontWeight={900} sx={{fontSize: {xs: 22, md: 40}, cursor: 'auto'}} letterSpacing={'0.8px'}>
                    LOCK
                  </Typography>
                </Button>
              </Box>
          </Box>
          <Box pb={20} pr={30} justifySelf="right" alignSelf="flex-end">
            <HideOnMobile><LockImg /></HideOnMobile>
            <ShowOnMobile><LockMobileImg /></ShowOnMobile>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
