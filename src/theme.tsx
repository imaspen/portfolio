import { alpha, darken, ThemeOptions } from "@mui/material";
import { cyan, pink, teal } from "@mui/material/colors";

const baseTheme: ThemeOptions = {
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(", "),
  },
  palette: { mode: "light", primary: pink, secondary: teal },
  components: {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          hyphens: "auto",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          flexGrow: 1,
        },
      },
    },
  },
};

const lightTheme: ThemeOptions = {
  ...baseTheme,
};

const darkTheme: ThemeOptions = {
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    mode: "dark",
    background: {
      ...baseTheme.palette?.background,
      paper: darken(teal[900], 0.8),
      default: darken(teal[900], 0.85),
    },
  },
};

export default baseTheme;
export { lightTheme, darkTheme };
