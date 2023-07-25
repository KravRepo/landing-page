import { Box, Typography } from '@mui/material'
import Img from '../Image/image'
// @ts-ignore
import explainationUrl from '@/assets/svg/explaination2.svg?.url'
import pole2Url from '@/assets/img/pole2.png'

const content = [
  [
    'Hybrid Liquidity',
    'Krav simplifies the process of becoming a liquidity provider by accepting single-token liquidity provisions. This reduces barriers to entry, making it easier for anyone to participate and earn from trading fees'
  ],
  [
    'Usage of Mature Oracle',
    'Krav relies on mature and established oracle systems to provide the most accurate, real-time price information. Dependable data ensures fair and transparent trading across the platform'
  ],
  [
    'Unlocking Volitility to altcoins',
    'With Krav, low-volume altcoins gain exposure to BTC and ETH volatility. Altcoins are to gain more exposure, bringing new trading opportunities and sparking renewed interest'
  ],
  [
    'Single Token LP',
    'Krav simplifies the process of becoming a liquidity provider by accepting single-token liquidity provisions. Reducing barriers to entry, Krav makes it easier for anyone to participate and earn from trading fees.'
  ],
  [
    'Permissionless',
    'With Krav, anyone can create a leveraged trading pair through LP creation and liquidity provision.'
  ]
]

export default function Explaination2() {
  return (
    <Box
      display={{ xs: 'grid', md: 'flex' }}
      gap={{ xs: 32, md: 60 }}
      width={{ xs: '100vw', md: 'auto' }}
      mb={{ xs: 80, sm: '120px' }}
    >
      <Box display="grid">
        {content.map((content, index) => (
          <Box
            maxWidth={{ xs: 'unset', md: 486 }}
            width="100%"
            key={content[0]}
            padding={{ xs: '30px 24px', md: '40px 0' }}
            sx={{
              borderTop:
                index === 0
                  ? undefined
                  : { xs: '1px solid #000000', md: '1.5px solid #000000' }
            }}
          >
            <Typography
              variant="h5"
              fontSize={{ xs: 32, md: 64 }}
              textTransform={'uppercase'}
            >
              {content[0]}
            </Typography>
            <Typography fontSize={{ xs: 14, md: 20 }} mt={{ xs: 24, md: 32 }}>
              {content[1]}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box display="grid" justifyItems={'center'} gap={66}>
        <Img
          src={explainationUrl}
          alt=""
          sx={{ width: { xs: '90%', md: '100%' }, height: 'auto' }}
        />
        <Img
          src={pole2Url}
          alt=""
          sx={{
            width: { xs: 120, sm: 200, md: 302 },
            height: { xs: 'auto', md: 'auto' }
          }}
        />
      </Box>
    </Box>
  )
}
