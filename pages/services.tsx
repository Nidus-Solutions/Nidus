import { Heading, Container, SimpleGrid, Link, Button } from "@chakra-ui/react";
import CardServices from "@/components/cardServices";
import Layout from "@/components/layout/article";
import { PiGraphBold } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";

const Services = () => (
    <Layout title="Sobre Nós">
        <Container
            display="flex"
            flexDirection="column"
            fontSize={{ base: "3xl", md: "4xl" }}
            maxW="container.xl"
            justifyContent="flex-start"
        >
            <Container pb={{ base: 10, md: 5, lg: 8 }}>
                <Heading as="h1" textAlign="left" color="gray.800">
                    Serviços
                </Heading>
            </Container>

            <Container maxW="container.lg">
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                    <CardServices
                        title="Web"
                        items={["Criação de site", "Manutenção de site", "E-commerce", "Landing Page"]}
                        icons={PiGraphBold}
                    />
                    <CardServices
                        title="Performance"
                        items={["Google Analytics", "SEO", "Google Tag Manager", "Google Ads", "Meta Ads", "Facebook Ads"]}
                        icons={IoRocketOutline}
                    />
                    <CardServices
                        title="Branding"
                        items={["Criação de logo", "Identidade visual", "Manual de marca", "cartões de visita", "envelopes", "timbrados", "pastas"]}
                        icons={FaRegLightbulb}
                    />
                </SimpleGrid>
            </Container>

            <Container display="flex" justifyContent="center" width="100%" mt={10}>
                <Link href="/contact">
                    <Button size="lg" bg="#3498DB" color="white" _hover={{ bg: "#2980B9" }}>
                        Entre em contato
                    </Button>
                </Link>
            </Container>
        </Container>
    </Layout>
);

export default Services;
