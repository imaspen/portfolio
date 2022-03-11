import type { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import { ThemeContextProvider } from "../contexts/ThemeContext";
import createEmotionCache from "../utilities/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

interface IAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: IAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeContextProvider>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            alignItems: "center",
          }}
        >
          <Header />
          <Box component="main" sx={{ flexGrow: 1, alignSelf: "stretch" }}>
            <Component {...pageProps} />
          </Box>
          <Footer />
        </Box>
      </ThemeContextProvider>
    </CacheProvider>
  );
}

export default MyApp;
