import "@/styles/globals.scss";
import "@/styles/odometer.css";
import "@/styles/odometerM.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import theme from "@/components/theme";
import Icons from "@/components/Icons/Icons";
import Logo from "../../public/Favicon.png";
import { appWithTranslation } from "next-i18next";

const emotionCache = createCache({
  key: "style",
  prepend: true, // ensures styles are prepended to the <head>, instead of appended
});

export function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Builder House</title>
        <link rel="icon" href={Logo.src} />
        <link rel="stylesheet" href="odometer-theme-default.css" />
      </Head>
      <CacheProvider value={emotionCache}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
          <Icons />
        </ChakraProvider>
      </CacheProvider>
    </>
  );
}
export default appWithTranslation(MyApp);
