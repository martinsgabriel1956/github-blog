import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
}

body {
  margin: 0 auto;
  min-width: 320px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.base.background};
  font-family: ${(props) => props.theme.fontFamily.nunito};
}

button {
  cursor: pointer;
}
`;