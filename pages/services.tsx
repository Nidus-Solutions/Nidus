import Layout from "@/components/layout/article";
import CardServices from "@/components/Card";

import { Box, Button, Container, Heading, Link, SimpleGrid, Text, Textarea, useColorModeValue } from "@chakra-ui/react";

const Services = () => (
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
                mx="auto"
            >
                <Heading as="h1" textAlign="center" color={useColorModeValue("gray.800", "white")}>
                    Nossos Serviços
                </Heading>
            </Box>

            <Container
                maxW={{ base: "container.sm", md: "container.md", lg: "container.md" }}
                mt={{ base: 4, md: 12, lg: 14 }}
            >
                <SimpleGrid spacing={4} columns={1}>
                    <CardServices
                        align="left"
                        title='Desenvolvimento Web'
                        description={`
                        Desenvolvemos websites responsivos e otimizados para SEO. Pensa em ter um site que se adapta a qualquer dispositivo e que seja facilmente encontrado no Google? Nós podemos te ajudar!
                            `}
                    />
                    <CardServices align="right" title='Desenvolvimento Web' description='Desenvolvemos websites responsivos e otimizados para SEO.' />
                    <CardServices align="left" title='Desenvolvimento Web' description='Desenvolvemos websites responsivos e otimizados para SEO.' />
                </SimpleGrid>
            </Container>

        </Container>
    </Layout>
)

export default Services;