import React from 'react'
import { useRipples } from '@/hooks/useRipples'

/**
 * ButtonBase component.
 *
 * @param props props.
 */
export const ButtonBase: React.VFC<React.ComponentPropsWithoutRef<'button'>> = (
  props
) => {
  const [addRipple, ripples] = useRipples()

  const onMouseDown: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (props.onMouseDown) {
      props.onMouseDown(event)
    }
    addRipple(event)
  }

  return (
    <button {...props} onMouseDown={onMouseDown}>
      {ripples}
      {props.children}
    </button>
  )
}
