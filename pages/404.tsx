import { Box, Heading, Text, Button } from '@chakra-ui/react'
import { useEffect } from 'react'

export default function NotFound() {

    useEffect(() => {
        setTimeout(() => {
            window.location.replace('/')
        }, 2000)
    })

    return (
        <Box textAlign="center" py={10} px={6}>
            <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bgGradient="linear(to-r, teal.400, teal.600)"
                backgroundClip="text">
                404
            </Heading>
            <Text fontSize="18px" mt={3} mb={2}>
                Pagina não encontrada
            </Text>
            <Text color={'gray.500'} mb={6}>
                Essa pagina não existe ou foi removida.
            </Text>

            <Button
                colorScheme="teal"
                bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                color="white"
                variant="solid"
                size="md"
                onClick={() => window.location.replace('/')}
            >
                Volar para a pagina inicial
            </Button>
        </Box>
    )
}