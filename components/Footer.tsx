import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box alignItems="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Nidus Solutions. All Rights Reserved.
    </Box>
  )
}

export default Footer