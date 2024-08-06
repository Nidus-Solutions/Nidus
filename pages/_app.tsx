import type { AppProps } from "next/app";
import Layout from "../components/layout/main";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";
import Fonts from '../components/font';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </Layout>
    </ChakraProvider>
  )
}
