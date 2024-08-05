import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: {
    body: {
      bg: "#EAE0D5"
    }
  }
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({ config, styles })
export default theme