import { NemuiTheme } from '../types/NemuiTheme'

/**
 * create theme from light theme.
 *
 * @param partialTheme partial theme.
 */
export const createThemeFromLight = (
  partialTheme: Partial<NemuiTheme> = {}
): NemuiTheme => {
  const theme: NemuiTheme = {
    type: 'light',
    background: '#f0f0f0',
    foreground: '#202020',
    palettes: {
      default: {
        main: '#101010',
        dark: '#000000',
        light: '#303030',
        text: 'white',
      },
      primary: {
        main: '#487fb0',
        dark: '#1c5180',
        light: '#92cafc',
        text: 'white',
      },
      secondary: {
        main: '#40b8ae',
        dark: '#11857b',
        light: '#8aded7',
        text: 'white',
      },
      success: {
        main: '#5ecc62',
        dark: '#2f9632',
        light: '#85ed89',
        text: 'white',
      },
      info: {
        main: '#71afde',
        dark: '#3b75a1',
        light: '#96cbf2',
        text: 'white',
      },
      warning: {
        main: '#f7bf45',
        dark: '#c99116',
        light: '#ffdd94',
        text: 'white',
      },
      error: {
        main: '#f75145',
        dark: '#9e2118',
        light: '#e8918b',
        text: 'white',
      },
    },
    spacing: (factor) => `${factor}rem`,
  }

  return {
    ...partialTheme,
    ...theme,
  }
}
