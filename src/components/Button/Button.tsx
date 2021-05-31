import React from 'react'

/**
 * Button props.
 */
export type ButtonProps = React.ComponentPropsWithoutRef<'button'>

/**
 * Button component.
 */
export const Button: React.VFC<ButtonProps> = (props) => {
  return <button {...props} />
}
