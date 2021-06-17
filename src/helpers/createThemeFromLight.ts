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
        main: '#3edea0',
        dark: '#33b583',
        light: '#6dedbc',
        text: 'white',
      },
      warning: {
        main: '#ffbf00',
        dark: '#b58800',
        light: '#ffde7d',
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
