import React from 'react'
import { createContext, useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { createThemeFromLight } from '../helpers/createThemeFromLight'
import { NemuiTheme } from '../types/NemuiTheme'

/**
 * NemuiContextData type.
 */
export type NemuiContextData = {
  theme: NemuiTheme
}

/**
 * default NemuiContext data.
 */
export const defaultNemuiContextData: NemuiContextData = {
  theme: createThemeFromLight(),
}

/**
 * NemuitContext.
 */
export const NemuiContext = createContext<NemuiContextData>(
  defaultNemuiContextData
)

/**
 * NemuiProviderProps type.
 */
export type NemuiProviderProps = {
  theme?: NemuiTheme
  children: React.ReactNode
}

/**
 * NemuiProvider.
 */
const NemuiProvider: React.VFC<NemuiProviderProps> = ({
  children,
  ...props
}) => {
  const value = {
    ...props,
    theme: props.theme ?? createThemeFromLight(),
  }

  return (
    <ThemeProvider theme={props.theme ?? createThemeFromLight()}>
      <NemuiContext.Provider value={value} children={children} />
    </ThemeProvider>
  )
}

export { NemuiProvider }

/**
 * NemuiConsumer.
 */
export const NemuiConsumer = NemuiContext.Consumer

/**
 * use NemuiContext.
 */
export const useNemui = (): NemuiContextData => {
  return useContext(NemuiContext)
}

/**
 * returns theme from current nemui context.
 */
export const useTheme = (): NemuiTheme => {
  const { theme } = useContext(NemuiContext)

  return theme
}
