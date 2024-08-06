import Layout from "@/components/admin/layout/articleAdmin";
import {Container} from "@chakra-ui/react";

const HomeAdmin = () => {
  return (
    <Layout title="Dashboard">
      <Container
        py={{ base: 0, md: 12 }}
        pb={{ base: 6, md: 0 }}
        maxW="container.xl"
        color="#2C3E50"
      >
        Admin
      </Container>
    </Layout>
  )
}

export default HomeAdmin;