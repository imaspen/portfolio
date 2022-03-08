import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <CssBaseline />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
