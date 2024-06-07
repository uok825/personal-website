"use client";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ChakraProvider } from "@chakra-ui/react";

const App = dynamic(() => import("../components/AppWrapper"), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <App>
        <Component {...pageProps} />
      </App>
    </ChakraProvider>
  );
}

export default MyApp;
