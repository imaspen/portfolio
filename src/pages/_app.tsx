import type { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { Box, createTheme, CssBaseline, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useMemo } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import theme from "../theme";
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
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const muiTheme = useMemo(
    () =>
      createTheme({
        ...theme,
        palette: {
          ...theme.palette,
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={muiTheme}>
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
          <NavTabs />
          <Box component="main" sx={{ flexGrow: 1, alignSelf: "stretch" }}>
            <Component {...pageProps} />
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
