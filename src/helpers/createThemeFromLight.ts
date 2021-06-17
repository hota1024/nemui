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
    background: '#fefefe',
    foreground: '#202020',
    palettes: {
      default: {
        main: '#101010',
        dark: '#000000',
        light: '#303030',
        text: 'white',
      },
      primary: {
        main: '#005ef5',
        dark: '#003891',
        light: '#428bff',
        text: 'white',
      },
      secondary: {
        main: '#ff0059',
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
        main: '#1f93ff',
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
        main: '#ff1414',
        dark: '#9e2118',
        light: '#e8918b',
        text: 'white',
      },
    },
    spacing: (factor) => `${factor}rem`,
    shadow: (level) => `box-shadow: 0 0 ${level * 8}px rgba(0, 0, 0, 0.3);`,
  }

  return {
    ...partialTheme,
    ...theme,
  }
}
