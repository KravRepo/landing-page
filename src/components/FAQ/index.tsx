'use client'
import useBreakpoint from '@/hooks/useBreakpoints'
import { ArrowDownward } from '@mui/icons-material'
import { Box, Card, Typography, styled } from '@mui/material'

const Arrow = (props: any) => {
  return (
    <svg
      {...props}
      width="201"
      height="60"
      viewBox="0 0 201 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M199.799 32.8571C201.377 31.3111 201.403 28.7785 199.857 27.2006L174.662 1.48632C173.116 -0.0916342 170.584 -0.117476 169.006 1.4286C167.428 2.97468 167.402 5.50721 168.948 7.08516L191.343 29.9423L168.486 52.3376C166.908 53.8837 166.883 56.4162 168.429 57.9942C169.975 59.5722 172.507 59.598 174.085 58.0519L199.799 32.8571ZM0.959186 31.9998L196.959 33.9998L197.041 26.0002L1.04081 24.0002L0.959186 31.9998Z"
        fill="#2832F5"
      />
    </svg>
  )
}

const StyledArrow = styled(Arrow)({
  position: 'relative',
  zIndex: 2
})

const content = [
  {
    titleFaq: 'What Are Quanto Perpetuals?',
    contentFaq: `Quanto Perpetual Futures are trading contracts where you can speculate on an asset (like BTC) valued in one currency (USD), using a different currency (an Altcoin) as collateral. All profits and losses are calculated in the collateral currency (Altcoin) based on the asset's price changes (in USD).`,
    titleBenefit: 'Gain Leveraged Expsoure with any Altcoin!',
    contentBenefit: `Trade BTC perpetual futures with any alt coin as collateral! Select your collateral asset, desired leverage (exposure), market direction (long or short), trade type (market or limit) and start trading! . `
  },
  {
    titleFaq: 'How Does Liquidity Work?',
    contentFaq: `Single Token LP facilitate Liquidity of trading markets for each alt coin accepted as collateral. Fees generated from trading volume and liquidations are distributed to LP holders, earning real yield! `,
    titleBenefit: 'Gain Real Yield with ANy Altcoin!',
    contentBenefit: `Users can LP their altcoins into existing pools, or generate new pools in minutes. Start earning yield today!`
  },
  {
    titleFaq: 'How is PnL CalculatED? ',
    contentFaq: `Profit and Loss (PnL) calculation is solely influenced by fluctuations in the price of Bitcoin (BTC) in USD, not the price of the altcoin used as collateral. Settlements in units of altcoin are determined solely by the changes in Bitcoin's USD price—essentially a multiplier. Max PnL is 900 percent. `,
    titleBenefit: 'Clear Outcomes - Reduced Liquidations!',
    contentBenefit: `Lets face it - altcoins are more often than not extremely volatile in price. With Krav's quanto perpetuals, you will never get liquidated based on the price of the Altcoin itself. PnL in altcoins is purely based on BTC price, with payouts and losses in altcoin units proportional to BTC price movements in USD.  `
  }
]

export default function FAQ() {
  const isDownMd = useBreakpoint('md')
  return (
    <Box display={'grid'} gap={'30px'} mb={'120px'}>
      <Box
        gap={'20px'}
        position="relative"
        display={'grid'}
        gridTemplateColumns={{ xs: '1fr', md: '1fr 30px 1fr' }}
        gridTemplateRows={{ xs: '1fr 40px 1fr', md: '1fr' }}
      >
        <Typography
          textAlign={'center'}
          fontSize={{ xs: 48, md: 60 }}
          variant="h5"
        >
          FAQ
        </Typography>
        {isDownMd ? (
          <Typography
            textAlign={'center'}
            fontSize={{ xs: 48, md: 60 }}
            variant="h5"
            component={'div'}
          >
            &
          </Typography>
        ) : (
          <Box />
        )}
        <Typography
          textAlign={'center'}
          fontSize={{ xs: 48, md: 60 }}
          variant="h5"
        >
          BENEFITS
        </Typography>
      </Box>
      {content.map(({ titleFaq, contentFaq, titleBenefit, contentBenefit }) => (
        <Box
          key={titleFaq}
          gap={'20px'}
          position="relative"
          display={'grid'}
          gridTemplateColumns={{ xs: '1fr', md: '1fr 30px 1fr' }}
          gridTemplateRows={{ xs: '1fr 48px 1fr', md: '1fr' }}
          sx={{
            backgroundColor: { xs: '#D9D9D9', md: 'transparent' },
            borderRadius: '10px'
          }}
        >
          <Card
            sx={{
              boxShadow: 'none',
              backgroundColor: '#D9D9D9',
              padding: '30px'
            }}
          >
            <Typography variant="h5" mb={'20px'} fontSize={'36px'}>
              {titleFaq}
            </Typography>
            <Typography fontSize={'20px'} fontFamily={'sans-serif'}>
              {contentFaq}
            </Typography>
          </Card>
          {isDownMd ? (
            <ArrowDownward
              sx={{
                margin: '0 auto',
                fontSize: '48px',
                color: '#2832F5',
                strokeWidth: 3,
                stroke: '#2832F5',
                strokeLinecap: 'round'
              }}
            />
          ) : (
            <StyledArrow
              sx={{
                transform: { xs: 'rotate(90deg)', md: 'rotate(0deg)' },
                width: { xs: '100px', md: 'calc(100% + 80px)' },
                margin: { xs: '-20px auto', md: 'auto -40px' }
              }}
            />
          )}
          <Card
            sx={{
              boxShadow: 'none',
              backgroundColor: '#D9D9D9',
              padding: '30px'
            }}
          >
            <Typography variant="h5" mb={'20px'} fontSize={'36px'}>
              {titleBenefit}
            </Typography>
            <Typography fontSize={'20px'} fontFamily={'sans-serif'}>
              {contentBenefit}
            </Typography>
          </Card>
        </Box>
      ))}
    </Box>
  )
}
