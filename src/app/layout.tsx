import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/theme'
import { Alert, Typography } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KRAV',
  description: 'KRAV'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={inter.className}>
          <Alert sx={{
            backgroundColor: '#000',
            borderRadius: 0,
            display: 'flex',
            justifyContent: 'center',
          }} icon={false} severity="success">
            <Typography color={'#fff'} sx={{fontSize: {xs: 14, sm: 16}}}>
              KRAV token address is {' '}
              <a style={{color:'#fff'}} target='_blank' href='https://basescan.org/token/0xbE3111856e4acA828593274eA6872f27968C8DD6'>
                0xbE31....8DD6
              </a>
              {' '}, follow our{' '}
              <a style={{color:'#fff'}} target='_blank' href='https://twitter.com/kravtrade'>
                Twitter
              </a>
              {' '}and beware of any scam tokens!
            </Typography>
          </Alert>
          <Navbar />
          {children}
        </body>
      </html>
    </ThemeProvider>
  )
}
