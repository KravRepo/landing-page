import { Box, Typography } from '@mui/material'
import Img from '../Image/image'
// @ts-ignore
import explainationUrl from '@/assets/svg/explaination1.svg?.url'

export default function Explaination1() {
  return (
    <Box
      display={{ xs: 'grid', md: 'flex' }}
      gap={{ xs: 32, md: 60 }}
      maxHeight={{ xs: 'unset', md: 777 }}
      justifyItems={{ xs: 'center', md: undefined }}
    >
      <Box maxWidth={486}>
        <Typography
          variant="h5"
          fontSize={{ xs: 32, md: 64 }}
          textTransform={'uppercase'}
        >
          NEXT GENERATION DECENTRALIZED QUANTO EXCHANGE
        </Typography>
        <Typography fontSize={{ xs: 14, md: 20 }} mt={{ xs: 24, md: 53 }}>
          A Quanto Contract is a type of futures contract where the underlying
          asset and the settlement currency differ, allowing traders to
          speculate on asset values without direct price exposure. For instance,
          in a Quanto BTC/USDT futures contract, the underlying asset is the
          BTC/USDT exchange rate, but it&apos;s settled in an altcoin like BALD.
          The contract uses a fixed multiplier unaffected by the USDT price of
          BALD, enabling traders to take long or short positions on the BTC/USDT
          exchange rate without handling BTC or USDT directly. Traders provide
          margin in BALD and gain or lose BALD with changes in the BTC/USDT
          exchange rate, thus integrating altcoin market dynamics into trading
          strategies.
        </Typography>
      </Box>
      <Img
        src={explainationUrl}
        alt=""
        sx={{
          maxWidth: '665px',
          width: { xs: '80%', md: '50%' },
          height: { xs: 'auto', md: '100%' }
        }}
      />
    </Box>
  )
}
