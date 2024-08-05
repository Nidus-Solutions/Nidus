import { Box, useColorModeValue } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box alignItems="center" opacity={useColorModeValue(0.7, 0.5)} fontSize="sm" color={useColorModeValue("gray.900", "gray.200")}>
      &copy; {new Date().getFullYear()} Nidus Solutions. All Rights Reserved.
    </Box>
  )
}

export default Footer