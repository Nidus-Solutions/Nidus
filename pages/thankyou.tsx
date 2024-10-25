import { Box, Heading, Text, Button } from '@chakra-ui/react'
import Head from 'next/head'

export default function ThankYou() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Head>
        <title>Obrigado! - Nidus</title>
        {/* <!-- Event snippet for Enviar formulário de lead conversion page --> */}
        <script dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {'send_to': 'AW-16751621578/zHPVCKiwleEZEMrr5bM-'});
          `,
        }} />
      </Head>

      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        pb={4}
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text">
        A Nidus agradece o seu contato!
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Entraremos em contato em breve. Nossa equipe irá responder o mais rápido possível.
      </Text>
      <Text color={'gray.500'} mb={6}>
        Prazo de resposta: 24 horas.
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