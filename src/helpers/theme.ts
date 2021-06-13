import { NemuiColor, NemuiPalette, NemuiTheme } from '@/types/NemuiTheme'

/**
 * StyledColorContext type.
 */
export type StyledColorContext = {
  theme?: NemuiTheme
  color?: NemuiColor
}

/**
 * StyledColorGetFn type.
 */
export type StyledColorGetFn = (
  context: StyledColorContext
) => string | undefined

/**
 * returns the color string by given color type and given color context.
 *
 * @param type color type.
 * @param context styled color context.
 */
export function styledColor(
  type: keyof NemuiPalette,
  context: StyledColorContext
): string

/**
 * returns a function that returns theme palette color by given palette type and given color of component props.
 *
 * @param type color type.
 */
export function styledColor(type: keyof NemuiPalette): StyledColorGetFn

export function styledColor(
  type: keyof NemuiPalette,
  context?: StyledColorContext
): string | StyledColorGetFn {
  if (context) {
    const color =
      context.theme?.palettes[context.color ?? 'default'][type] ?? ''
    return color
  }

  return ({ theme, color }: StyledColorContext): string | undefined => {
    return theme?.palettes[color ?? 'default'][type ?? 'main']
  }
}
