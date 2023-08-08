/* eslint-disable no-unused-vars */
'use client'
// @ts-ignore
import buttonBg from '@/assets/svg/button_bg.svg?url'
// @ts-ignore
import buttonBgWhite from '@/assets/svg/button_bg_white.svg?url'
import { CssBaseline } from '@mui/material'

import {
  createTheme,
  styled,
  ThemeProvider as MuiThemeProvider
} from '@mui/material/styles'

export type PaletteMode = 'light' | 'dark'

interface Height {
  header: string
  mobileHeader: string
  footer: string
}
interface Width {
  sidebar: string
  maxContent: string
  minContent: string
}

declare module '@mui/material/styles' {
  interface Theme {
    height: Height
    width: Width
  }
}

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    height: Height
    width: Width
  }
  interface Theme {
    height: Height
    width: Width
  }
}

const themeConstants = {
  height: {
    header: '80px',
    mobileHeader: '67px',
    footer: '60px'
  },
  width: {
    sidebar: '250px',
    maxContent: '1110px',
    minContent: '350px'
  },
  shape: {
    border: '1px solid',
    borderRadius: 10
  },
  spacing: (factor: number) => `${1 * factor}px`
}

export const themeColors = {
  primary: {
    main: '#2832F5',
    contrastText: '#000000'
  },
  background: {
    default: '#F1F1F1',
    paper: '#FFFFFF',
    secondary: '#484D50'
  },
  text: {
    primary: '#000000',
    secondary: '#ffffff',
    disabled: '#DADADA'
  },
  action: {
    disabledOpacity: 0.6,
    disabledBackground: '#DADADA'
  }
}

export const override: (palette: any) => any & {
  MuiButton: {
    defaultProps: {
      variant: 'text'
    }
  }
} = (palette: any) => ({
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        width: '100%',
        background: palette.background.default,
        fontSize: 16
      },
      'html, input, textarea, button, body': {
        fontFamily: FONTS.content,
        fontDisplay: 'fallback'
      },
      '@supports (font-variation-settings: normal)': {
        'html, input, textarea, button, body': {
          fontFamily: FONTS.content,
          fontDisplay: 'fallback'
        }
      }
    }
  },
  MuiButton: {
    defaultProps: {
      variant: 'text',
      disableRipple: true
    },
    styleOverrides: {
      root: {
        borderRadius: 0,
        transition: '.3s',
        textTransform: 'none' as const,
        color: palette.text.primary
      },
      text: {
        color: palette.text.primary + '!important',
        fontWeight: 700,
        '&:hover, :active': {
          color: '#757575!important',
          background: 'transparent'
        }
      },
      contained: {
        background: `url(${buttonBg.src})  no-repeat`,
        // backgroundSize: '100% 100%',
        backgroundColor: 'transparent',
        fontWeight: 700,
        color: palette.text.secondary,
        backgroundSize: '100% !important',
        backgroundPosition: 'right',
        boxShadow: 'unset',
        '&:hover, :active': {
          boxShadow: 'unset',
          backgroundColor: 'transparent',
          background: `url(${buttonBgWhite.src})  no-repeat`,
          color: palette.text.primary,
          backgroundSize: '100% 100%'
        },
        '&:disabled': {
          boxShadow: 'unset',
          color: palette.text.disabled
        }
      }
    }
  },
  MuiTypography: {
    styleOverrides: {
      root: {
        lineHeight: 1.2
      },
      body1: {
        fontSize: 20
      },
      body2: {
        fontSize: 12
      },
      h1: {
        fontSize: 45,
        fontWeight: 700,
        fontFamily: FONTS.title
      },
      h5: {
        fontSize: 28,
        fontWeight: 500,
        fontFamily: FONTS.title,
        textTransform: 'uppercase',
        lineHeight: '100%'
      },
      h6: {
        fontSize: 22,
        fontWeight: 500,
        fontFamily: FONTS.title
      }
    }
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: 'transparent',
        boxShadow: 'none'
      }
    }
  }
})

export const FONTS = {
  title: 'Flexa, Monument Extended, Helvetica, sans-serif',
  content: 'Inter, Lato, Helvetica, sans-serif'
}

export const HideOnMobile = styled('div', {
  shouldForwardProp: () => true
})<{ breakpoint?: 'sm' | 'md' }>(({ theme, breakpoint }) => ({
  [theme.breakpoints.down(breakpoint ?? 'md')]: {
    display: 'none'
  }
}))

export const ShowOnMobile = styled('div', {
  shouldForwardProp: () => true
})<{ breakpoint?: 'sm' | 'md' }>(({ theme, breakpoint }) => ({
  display: 'none',
  [theme.breakpoints.down(breakpoint ?? 'md')]: {
    display: 'block'
  }
}))

export const theme = createTheme({
  palette: { mode: 'light', ...themeColors },
  ...themeConstants,
  components: {
    ...override(themeColors)
  },
  typography: {
    allVariants: {
      fontFamily: FONTS.content
    }
  }
})

export function ThemeProvider({ children }: any) {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
      <CssBaseline />
    </MuiThemeProvider>
  )
}
