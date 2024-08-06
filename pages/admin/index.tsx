import Layout from "@/components/admin/layout/articleAdmin";
import axios from 'axios'
import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const HomeAdmin = () => {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get(
      "http://localhost:3000/api/hello").then(({ data }) => {
        console.log(data)
        setData(data.message)
      })

  }, []);

  return (
    <Layout title="Dashboard">
      <Container
        py={{ base: 0, md: 12 }}
        pb={{ base: 6, md: 0 }}
        maxW="container.xl"
        color="#2C3E50"
      >
        {data}
      </Container>
    </Layout>
  )
}

export default HomeAdmin;
