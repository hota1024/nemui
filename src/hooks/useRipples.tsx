import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

/**
 * document
 */
export type HasCurrentTarget = {
  currentTarget: Element
}

/**
 * AddRipple function type.
 */
export type AddRippleFn = (target: React.MouseEvent) => void

type RippleState = {
  key: number
  style: React.HTMLAttributes<HTMLSpanElement>['style']
}

const rippleAnimation = keyframes`
	to {
		transform: scale(15);
		opacity: 0;
	}
`

const Ripple = styled.span`
  display: block;
  position: absolute;
  background: currentColor;
  opacity: 0.1;
  border-radius: 50%;
  pointer-events: none;
  animation: ${rippleAnimation} 2000ms cubic-bezier(0.5, 1, 0.5, 1);
`

/**
 * use ripple effects.
 */
export const useRipples = (): [AddRippleFn, React.ReactNodeArray] => {
  const [ripples, setRipples] = useState<RippleState[]>([])

  const addRipple: AddRippleFn = (event) => {
    const { currentTarget } = event
    const { left, top } = currentTarget.getBoundingClientRect()
    const x = event.clientX - left
    const y = event.clientY - top

    const size = Math.min(
      currentTarget.clientHeight,
      currentTarget.clientWidth,
      100
    )
    const radius = size / 2

    const ripple: RippleState = {
      key: event.timeStamp,
      style: {
        width: size,
        height: size,
        left: x - radius,
        top: y - radius,
      },
    }

    setRipples((r) => [...r, ripple])
  }

  const ripplesArray = ripples.map((ripple) => {
    const onAnimationEnd = () => {
      setRipples((ripples) => ripples.filter((r) => r.key !== ripple.key))
    }

    return (
      <Ripple
        key={ripple.key}
        style={ripple.style}
        onAnimationEnd={onAnimationEnd}
      />
    )
  })

  return [addRipple, ripplesArray]
}
