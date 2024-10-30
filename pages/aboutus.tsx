import Layout from "@/components/layout/article";

import {
  Button,
  Container,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Aboutus = () => {
  return (
    <Layout title="Sobre Nós">
      <Container
        display={"flex"}
        flexDirection={"column"}
        fontSize={{ base: "3xl", md: "4xl" }}
        maxW={"container.xdl"}
        justifyContent="left"
        zIndex={-1}
      >
        <Container pb={{ md: 5, lg: 8 }}>
          <Heading as="h1" textAlign="left" color="gray.800">
            Sobre Nós
          </Heading>
        </Container>

        <Container
          display={"flex"}
          flexDirection={"column"}
          fontSize={{ base: "xl", md: "2xl" }}
          maxW={"container.lg"}
        >
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            textAlign={"justify"}
            mt={4}
            lineHeight={1.3}
            color="#2C3E50"
          >
            O Nidus é uma empresa de tecnologia que tem como objetivo ajudar
            pequenas empresas a se tornarem mais eficientes e competitivas
            através da tecnologia. Nós acreditamos que a tecnologia é uma
            ferramenta poderosa que pode ser usada para melhorar a vida das
            pessoas e a eficiência das empresas.
          </Text>

          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            textAlign={"justify"}
            lineHeight={1.3}
            mt={4}
            color="#2C3E50"
          >
            Nossa missão é trasformar ideias em realidade, e faremos tudo que
            estiver ao nosso alcance para ajudar nossos clientes a alcançarem
            seus objetivos. De pagamenos facilitados ao suporte técnico, estamos
            aqui para ajudar.
          </Text>
        </Container>

        <Container
          display={"flex"}
          flexDirection={"column"}
          fontSize={{ base: "xl", md: "2xl" }}
          maxW={"container.lg"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link href="/services">
            <Button
              mt={{ base: 4, md: 12, lg: 14 }}
              bg="#3498DB"
              fontSize={{ base: "18", md: "22" }}
              color="#ffffff"
              size="lg"
              letterSpacing={"0.1em"}
              _hover={{ bg: "#2C3E50" }}
            >
              Conheça Nossos Serviços
            </Button>
          </Link>
        </Container>
      </Container>
    </Layout>
  );
};

export default Aboutus;
