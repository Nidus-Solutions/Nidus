import type { AppProps } from "next/app";
import Layout from "../components/layout/main";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";
import Fonts from '../components/font';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
