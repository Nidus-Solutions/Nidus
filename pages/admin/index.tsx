import Layout from "@/components/admin/layout/articleAdmin";
import { Box, Button, chakra, Container, SimpleGrid } from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { FaBox } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import StatsCard from "@/components/admin/stats";
import { useState } from "react";

const HomeAdmin = () => {

  const [show, setShow] = useState(false);

  const data = [
    { title: 'Users', stat: 150, icon: <BsPerson size={'3em'} /> },
    { title: 'Itens', stat: 3, icon: <FaBox size={'3em'} /> },
    { title: 'Sales', stat: 10, icon: <GiReceiveMoney size={'3em'} /> },
  ];

  return (
    <Layout title="Dashboard">
      <Container
        pb={{ base: 6, md: 0 }}
        maxW="container.xl"
        color="#2C3E50"
      >
        <Box maxW="7xl" mx={'auto'} px={{ base: 2, sm: 12, md: 17 }}>
          <chakra.h1 textAlign={'left'} fontSize={'4xl'} pb={{ base: 5, md: 10 }} fontWeight={'bold'}>
            Dados gerais sobre a empresa
          </chakra.h1>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
            {data.map((item, index) => (
              <StatsCard title={item.title} stat={item.stat} icon={item.icon} />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Layout>
  )
}

export default HomeAdmin;
