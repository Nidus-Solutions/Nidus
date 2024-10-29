import { Box, useColorModeValue, Link, Icon, IconButton, Flex } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      fontFamily="sans-serif"
      alignItems="center"
      justifyContent={{ base: 'center', md: 'space-between' }}
      opacity={useColorModeValue(0.7, 0.5)}
      fontSize="sm"
      mb={2}
      color="#F1C40F"
    >
      <Box>
        Copyright &copy; {new Date().getFullYear()} by Nidus - All Rights Reserved
        <Flex
          justifyContent="center"
          alignItems="center"
          mt={1}
          gap={2}
        >
          <Box>
            <Link href="https://www.iubenda.com/privacy-policy/11072877" target="_blank">
              Política de Privacidade
            </Link>
          </Box>
          <Box>
            <Link href="https://www.iubenda.com/privacy-policy/11072877/cookie-policy" target="_blank">
              Política de Cookies
            </Link>
          </Box>
        </Flex>
      </Box>


    </Box>
  )
}

export default Footer
