import styled from 'styled-components'
import { s } from '@/privateHelpers/joinStyles'
import { shadow, styledColor } from '@/helpers/theme'
import { ButtonBase } from './ButtonBase'
import { ButtonProps } from './ButtonProps'

/**
 * Button component.
 */
export const Button = styled(ButtonBase)<ButtonProps>`
  position: relative;
  font-size: 0.875rem;
  font-weight: 500;

  background: none;

  cursor: pointer;

  overflow: hidden;
  position: relative;

  letter-spacing: 0.08em;

  ${(p) =>
    p.block ? s('display: block', 'width: 100%') : s('display: inline')}
  min-width: 64px;
  padding: 8px 24px;
  border: none;

  ${(p) =>
    p.rounded
      ? s('border-radius: calc(8px + 0.875rem)')
      : s('border-radius: 5px')}

  transition: all 120ms ease;

  ${(p) =>
    p.variant === 'default' &&
    s(
      `background: ${styledColor('main', p)}`,
      `color: ${styledColor('text', p)}`
    )}

  ${(p) =>
    p.variant === 'outlined' &&
    s(
      `border: 1px solid ${styledColor('main', p)}`,
      `color: ${styledColor('main', p)}`,
      `background: ${styledColor('text', p)}`,
      'padding: 7px 23px'
    )}

  ${(p) => p.variant === 'text' && s(`color: ${styledColor('main', p)}`)}

  &:before {
    border-radius: inherit;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    pointer-events: none;
    background-color: currentColor;
    opacity: 0;
    content: '';
    transition: opacity 200ms;
  }

  :hover&:before {
    opacity: 0.1;
  }

  :active {
    box-shadow: none;
  }

  ${shadow}
`

Button.defaultProps = {
  color: 'default',
  variant: 'default',
  block: false,
}
