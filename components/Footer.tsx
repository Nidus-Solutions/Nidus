import { Box, useColorModeValue, Link, Icon } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

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
        &copy; {new Date().getFullYear()} Nidus Solutions | 57.581.208/0001-69
        <Link href="https://github.com/Nidus-Solutions/Nidus" isExternal>
          <Icon as={FaGithub} boxSize={5} ml={2} mb={-1} />
        </Link>
      </Box>


    </Box>
  )
}

export default Footer