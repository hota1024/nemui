import { HasColorProp } from '@/types/HasColorProp'
import { NemuiPalette } from '@/types/NemuiTheme'
import { HasThemeProp } from '@/types/HasThemeProp'
import { HasShadowProp } from '@/types/HasShadowProp'

/**
 * StyledColorContext type.
 */
export type StyledColorContext = HasColorProp & HasThemeProp

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

/**
 * attach shadow.
 *
 * @param p props.
 */
export const shadow = (p: HasThemeProp & HasShadowProp): string => {
  if (typeof p.shadow === 'undefined') {
    return ''
  }

  if (typeof p.shadow === 'boolean') {
    return p.shadow ? p.theme.shadow(1) : ''
  }

  return p.theme.shadow(p.shadow)
}
