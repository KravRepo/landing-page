import React from 'react'
import { MediumIcon } from '@/assets/icons/MediumIcon'
import { TwitterIcon } from '@/assets/icons/TwitterIcon'
import { TelegramIcon } from '@/assets/icons/TelegramIcon'
import { GithubIcon } from '@/assets/icons/GithubIcon'
import { Box, IconButton } from '@mui/material'

const links = [
  // {
  //   title: 'Github',
  //   icon: GithubIcon,
  //   href: ''
  // },
  // {
  //   title: 'Medium',
  //   icon: MediumIcon,
  //   href: ''
  // },
  {
    title: 'Twitter',
    icon: TwitterIcon,
    href: 'https://twitter.com/kravtrade'
  },
  {
    title: 'Telegram',
    icon: TelegramIcon,
    href: 'https://t.me/+tlNZPGwYlu9lOWIx'
  }
]

export default function SocialLinks() {
  return (
    <Box
      component="nav"
      display={'flex'}
      gap={10}
      sx={{
        '& svg': {
          color: '#000000'
        }
      }}
    >
      {links.map(({ title, href, icon: Icon }) => {
        return (
          <IconButton
            key={title}
            component="a"
            href={href}
            role="link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon />
          </IconButton>
        )
      })}
    </Box>
  )
}
