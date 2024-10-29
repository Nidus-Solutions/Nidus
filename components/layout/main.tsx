import Head from "next/head";
import type { AppProps } from "next/app";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";
import Footer from '../Footer'

interface MainProps {
    children: React.ReactNode,
    router: AppProps["router"],
}

const Main = ({ children, router }: MainProps) => {

    const fix = router.asPath === '/aboutus' ? 'relative' : 'fixed'

    return (
        <Box as="main">
            <Head>
                <title>Nidus</title>
                <meta name="description" content="Site da empresa nidus" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />

                {/* Google Tag Ads */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16751621578"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-16751621578');
                    `,
                }} />

                {/* Google Tag Analytics */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-5LKDGWPGEN"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                
                    gtag('config', 'G-5LKDGWPGEN');
                    `,
                }} />

            </Head>

            <Navbar path={router.asPath} />

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
                minW={'full'}
                zIndex={998}
                position={fix}
            >
                <Footer />
            </Box>

            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-K3277D8Z"
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>
            </noscript>
        </Box>
    )
}

export default Main;