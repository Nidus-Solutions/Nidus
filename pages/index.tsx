import Layout from "@/components/layout/article";

import { Box, Button, Container, Heading, Link, Text, Textarea } from "@chakra-ui/react";

const Home = () => {
  return (
    <Layout title="Home">
      <Container
        py={{ base: 0, md: 12 }}
        pb={{ base: 6, md: 0 }}
        maxW="container.xl"
        color="#2C3E50"
      >
        <Text fontSize={"20px"} color="#2C3E50" fontWeight={'thin'}>Ei! Somos a</Text>
        <Heading as="h1" color="#3498DB" fontSize={{ base: "45px", md: "70px" }}>Nidus</Heading>
        <Heading as="h1" fontSize={{ base: "30px", md: "50px" }}>Desenvolvimento | Web Designer 🥑</Heading>
        <Text
          mt={4}
          maxW="700px"
        >
          Uma empresa de desenvolvimento de software jovem e inovadora. Com foco em qualidade e satisfação do cliente.
          Estamos sempre em busca de novos desafios e soluções. Vamos juntos?
        </Text>
        {/* Btn saiba mais */}
        <Link href="/aboutus">
          <Button
            mt={4}
            bg="#3498DB"
            color="#ffffff"
            size="lg"
          >
            Saiba mais
          </Button>
        </Link>
      </Container>
      <Container
        pb={16}
        maxW="container.xl"
      >
        <Text
          fontSize={{ base: "2xl", md: "2xl" }}
          fontWeight={'thin'}
          textAlign={'left'}
        >
          Conhecemos nossas ferramentas de cabo a rabo.
          Nossa equipe já contribuiu com diversos commits para projetos open-source e já estamos trabalhando com as tecnologias mais recentes do mercado.
        </Text>
      </Container>
    </Layout>
  )
}

export default Home;