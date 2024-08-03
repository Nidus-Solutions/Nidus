import Head from "next/head";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";

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

            <Container>
                {children}
            </Container>
        </Box>
    )
}

export default Main;