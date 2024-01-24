import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { theme as defaultTheme } from "./styles/theme";
import { AppRoutes } from "./routes";

export function App() {
  return (
    <ThemeProvider
      theme={defaultTheme}
    >
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  )
}
