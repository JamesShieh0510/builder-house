// theme.ts
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
const colors = {};
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}
export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "white",
        color: "",
        fontFamily: "",
      },
    }),
  },
  colors,
  config,
  breakpoints
});

export default theme