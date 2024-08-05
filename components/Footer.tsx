import { Box, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      alignItems="center"
      opacity={useColorModeValue(0.7, 0.5)}
      fontSize="sm"
      mb={2}
      color="#F1C40F"
    >
      &copy; {new Date().getFullYear()} Nidus Solutions. All Rights Reserved.
    </Box>
  )
}

export default Footer