import { createGlobalStyle } from 'styled-components'

export const CssBaseline = createGlobalStyle`
  html, body {
    padding: 0px;
    margin: 0px;

    font-size: 16px;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-weight: 400;
  }

  body {
    background: ${(p) => p.theme.background};
    color: ${(p) => p.theme.foreground};
  }

  * {
    box-sizing: border-box;
  }
`
