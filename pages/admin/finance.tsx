import Layout from "@/components/admin/layout/articleAdmin";
import { Container } from "@chakra-ui/react";

const Finance = () => {
    return (
        <Layout title="Financeiro">
            <Container
                py={{ base: 0, md: 12 }}
                pb={{ base: 6, md: 0 }}
                maxW="container.xl"
                color="#2C3E50"
            >
                Financeiro
            </Container>
        </Layout>
    )
}

export default Finance