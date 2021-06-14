/**
 * NemuiThemeType type.
 */
export type NemuiThemeType = 'light' | 'dark'

/**
 * NemuiPalette type.
 */
export type NemuiPalette = {
  /**
   * main color.
   */
  main: string

  /**
   * dark color.
   */
  dark: string

  /**
   * light color.
   */
  light: string

  /**
   * text color.
   */
  text: string
}

/**
 * NemuiSpacingFn type.
 */
export type NemuiSpacingFn = (factor: number) => string

/**
 * NemuiShadowFn type.
 */
export type NemuiShadowFn = (level: number) => string

/**
 * NemuiColor type.
 */
export type NemuiColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'

/**
 * NemuiTheme type.
 */
export type NemuiTheme = {
  /**
   * theme type(`light` or `dark`).
   */
  type: NemuiThemeType

  /**
   * background color.
   */
  background: string

  /**
   * foreground color.
   */
  foreground: string

  /**
   * palettes.
   */
  palettes: {
    [K in NemuiColor]: NemuiPalette
  }

  /**
   * spacing function.
   */
  spacing: NemuiSpacingFn

  /**
   * shadow function.
   */
  shadow: NemuiShadowFn
}
