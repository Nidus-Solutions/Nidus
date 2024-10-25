import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import Head from "next/head";
import dotenv from "dotenv";
dotenv.config();
import type { AppProps } from "next/app";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";
import Footer from '../Footer'
import Script from 'next/script';

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

                {/* Google Tag Manager Script */}
                <Script
                    id="google-tag-manager"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id=' + '${process.env.NEXT_PUBLIC_GTM_ID}';
                        f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer');
                    `,
                    }}
                />
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
                position={fix}
            >
                <Footer />
            </Box>

            {/* Google Tag Manager NoScript */}
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>
            </noscript>
        </Box>
    )
}

export default Main;
