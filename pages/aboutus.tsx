import Layout from "@/components/layout/article";
import Member from '@/components/member';

import { Box, Button, Container, Heading, Text, Textarea, useColorModeValue } from "@chakra-ui/react";

const Home = () => {
    return (
        <Layout title="Sobre Nós">
            <Container
                display={"flex"}
                flexDirection={"column"}
                fontSize={{ base: "3xl", md: "4xl" }}
                maxW={"container.xdl"}
            >
                <Box
                    borderBottomWidth={2}
                    borderColor="gray.500"
                    pt={4}
                    mx="auto"
                >
                    <Heading as="h1" textAlign="center" color={useColorModeValue("gray.800", "white")}>
                        Sobre Nós
                    </Heading>
                </Box>

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
                    >
                        O Nidus é uma empresa de tecnologia que tem como objetivo ajudar empresas a se tornarem mais eficientes e competitivas através da tecnologia.
                        Nós acreditamos que a tecnologia é uma ferramenta poderosa que pode ser usada para melhorar a vida das pessoas e a eficiência das empresas.
                    </Text>

                    <Text
                        fontSize={{ base: "xl", md: "2xl" }}
                        textAlign={"justify"}
                        lineHeight={1.3}
                        mt={4}
                    >
                        Nossa missão é trasformar ideias em soluções digitais inovadora. Somos apaixonados por tecnologia e acreditamos que ela pode ser usada para resolver os problemas mais complexos.
                    </Text>
                </Container>

                <Container
                    display={"flex"}
                    flexDirection={"column"}
                    fontSize={{ base: "xl", md: "2xl" }}
                    maxW={"container.lg"}
                >
                    <Heading
                        as="h2"
                        textAlign="center"
                        color={useColorModeValue("gray.800", "white")}
                        mt={4}
                    >
                        Nossa Equipe
                    </Heading>

                    <Container
                        display={"flex"}
                        flexDirection={{ base: "column", md: "row" }}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        maxW={"container.lg"}
                        textAlign={"center"}
                        mt={{ base: 4, md: 8 }}
                    >
                        <Member
                            name='João Gustavo Bispo'
                            socialId='@jgbiispo'
                            link='https://www.instagram.com/jgbiispo'
                            id='jgbiispo'
                        />
                        <Member
                            name='Thaigo Viana'
                            socialId='@thiago_v_viana'
                            link='https://www.instagram.com/thiago_v_viana'
                            id='thiago'
                        />
                        <Member
                            name='Gabryella Moronari'
                            socialId='@gaby_moronari'
                            link='https://www.instagram.com/gaby_moronari'
                            id='gaby'
                        />
                    </Container>
                </Container>
            </Container>
        </Layout>
    )
}

export default Home;