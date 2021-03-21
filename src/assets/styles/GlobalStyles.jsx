import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
html {
box-sizing: border-box;
}

html * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
    background: ${props => props.theme.BgColor};
    font-family: Roboto, sans-serif;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
p{
    font-size: 1rem;
    line-height: 1.75rem;
    color: ${props => props.theme.SubtitleColor};
}
.container-fluid{
  padding: 0;
}
.row{
  margin-left: auto;
  margin-right: auto;
}
`

export default GlobalStyle;