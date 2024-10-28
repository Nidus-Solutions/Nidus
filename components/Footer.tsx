import { Box, useColorModeValue, Link, Icon } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      alignItems="center"
      justifyContent={{ base: 'center', md: 'space-between' }}
      opacity={useColorModeValue(0.7, 0.5)}
      fontSize="sm"
      mb={2}
      color="#F1C40F"
    >
      <Box>
       Copyright &copy; {new Date().getFullYear()} by Nidus - All Rights Reserved
      </Box>


    </Box>
  )
}

export default Footer
