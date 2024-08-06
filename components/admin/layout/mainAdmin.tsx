import Head from "next/head";
import type { AppProps } from "next/app";
import { Box, Container } from "@chakra-ui/react";

import Navbar from "../navbarAdmin";
import Footer from '../../Footer'

interface MainProps {
    children: React.ReactNode,
    router: AppProps["router"],
}

const MainAdmin = ({ children, router }: MainProps) => {
    const user = {
        username: "admin",
        email: "jbispo20@mail.com",
        urlImg: "https://avatars.githubusercontent.com/u/83095574?v=4",
        company: "Nidus",
    };

    return (
        <Box as="main">
            <Head>
                <title>Nidus</title>
                <meta name="description" content="Site da empresa nidus" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar path={router.asPath} user={user} />

            <Container maxW='container.xl' pt={14} >
                {children}
            </Container>

            <Box
                mt={8}
                borderTopWidth={1}
                borderColor="#1ABC9C"
                bg="#2C3E50"
                pt={4}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                bottom={0}
                position={'fixed'}
                minW={'full'}
            >
                <Footer />
            </Box>
        </Box>
    )
}

export default MainAdmin;