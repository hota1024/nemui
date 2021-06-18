import { HasColorProp } from '@/types/HasColorProp'
import { HasShadowProp } from '@/types/HasShadowProp'

/**
 * ButtonVariant type.
 */
export type ButtonVariant = 'default' | 'outlined' | 'text'

/**
 * Button props.
 */
export type ButtonProps = HasColorProp &
  HasShadowProp & {
    /**
     * variant.
     */
    variant?: ButtonVariant

    /**
     * block.
     */
    block?: boolean

    /**
     * rounded.
     */
    rounded?: boolean
  }
