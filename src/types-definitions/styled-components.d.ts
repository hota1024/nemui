import 'styled-components'
import { NemuiTheme } from '../types/NemuiTheme'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends NemuiTheme {}
}
