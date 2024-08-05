import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: {
    body: {
      bg: "#EAE0D5"
    }
  }
}

const theme = extendTheme({ styles })
export default theme