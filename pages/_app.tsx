import type { AppProps } from "next/app";
import Layout from "../components/layout/main";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from '../components/font';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
