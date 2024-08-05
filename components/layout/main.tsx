import Head from "next/head";
import type { AppProps } from "next/app";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../navbar";
import Footer from '../Footer'

interface MainProps {
    children: React.ReactNode,
    router: AppProps["router"]
}

const Main = ({ children, router }: MainProps) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <title>Nidus</title>
                <meta name="description" content="Site da empresa nidus" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW='container.xl' pt={14}>
                {children}

                <Box 
                    mt={8}
                    borderTopWidth={1}
                    borderColor={useColorModeValue("gray.400", "gray.200")}
                    pt={4}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Footer />
                </Box>

            </Container>
        </Box>
    )
}

export default Main;