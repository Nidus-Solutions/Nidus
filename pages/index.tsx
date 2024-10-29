import Layout from "@/components/layout/article";
import PopUpCookies from "@/components/PopUpCookies";
import { Button, Container, Heading, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Home = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('cookies')) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, []);

  const setCookie = (name: string, value: string | number | boolean, days: number) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  };

  const handleClose = () => {
    setShow(false);
    localStorage.setItem('cookies', 'true');
    setCookie('cookies', 'accepted', 30); 
  };

  return (
    <>
      <Layout title="Home">
        <Container
          py={{ base: 0, md: 12 }}
          pb={{ base: 6, md: 0 }}
          maxW="container.xl"
          color="#2C3E50"
        >
          <Text
            fontSize={{ base: "16", md: "20" }}
            color="#2C3E50"
            fontWeight={'b'}
          >
            Ei! Somos a
          </Text>
          <Heading as="h1" color="#3498DB" fontSize={{ base: "45px", md: "70px" }}>Nidus</Heading>
          <Heading as="h1" fontSize={{ base: "30px", md: "50px" }}>Desenvolvimento | Web Designer 🥑</Heading>
          <Text
            mt={4}
            maxW="700px"
            fontSize={{ base: "lg", md: "xl" }}
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
              _hover={{ bg: "#2C3E50" }}
            >
              Saiba mais
            </Button>
          </Link>
        </Container>
        <Container
          py={16}
          maxW="container.xl"
        >
          <Text
            fontSize={{ base: "2xl", md: "2xl" }}
            fontWeight={'thin'}
            textAlign={'left'}
            color="#2C3E50"
            maxW="container.lg"
          >
            Conhecemos nossas ferramentas de cabo a rabo.
            Nossa equipe já contribuiu com diversos commits para projetos open-source e já estamos trabalhando com as tecnologias mais recentes do mercado.
          </Text>
        </Container>
      </Layout>
      <PopUpCookies show={show} onClose={handleClose} />
    </>
  );
}

export default Home;
