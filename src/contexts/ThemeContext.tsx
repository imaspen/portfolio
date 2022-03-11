import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import {
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { darkTheme, lightTheme } from "../theme";

export type DisplayMode = "System" | "Light" | "Dark";

function isDisplayMode(mode: string): mode is DisplayMode {
  return mode === "System" || mode === "Light" || mode === "Dark";
}

export interface IThemeContext {
  displayMode: DisplayMode;
  setDisplayMode: (newDisplayMode: DisplayMode) => void;
  nextDisplayMode: () => void;
  fontSize: number;
  setFontSize: (newFontSize: number) => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
}

const ThemeContext = createContext<IThemeContext>({
  displayMode: "System",
  setDisplayMode: (_newMode: DisplayMode) => {},
  nextDisplayMode: () => {},
  fontSize: 14,
  setFontSize: (_newFontSize: number) => {},
  increaseFontSize: () => {},
  decreaseFontSize: () => {},
});

interface IProps {
  children?: ReactNode;
}

function ThemeContextProvider({ children }: IProps): ReactElement {
  const [displayMode, setDisplayMode] = useState<DisplayMode>("System");
  const [fontSize, setFontSize] = useState(14);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    const lsContext = localStorage.getItem("ThemeContext");
    if (lsContext === null) return;

    const context = JSON.parse(lsContext);
    if (context === null) return;
    if (typeof context !== "object") return;

    if (
      "displayMode" in context &&
      typeof context.displayMode === "string" &&
      isDisplayMode(context.displayMode)
    ) {
      setDisplayMode(context.displayMode);
    }

    if ("fontSize" in context && typeof context.fontSize === "number") {
      setFontSize(context.fontSize);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "ThemeContext",
      JSON.stringify({
        displayMode,
        fontSize,
      })
    );
  }, [displayMode, fontSize]);

  const nextDisplayMode = useCallback(() => {
    setDisplayMode(
      displayMode === "Dark"
        ? "System"
        : displayMode === "System"
        ? "Light"
        : "Dark"
    );
  }, [displayMode]);

  const increaseFontSize = useCallback(() => {
    setFontSize((curr) => curr + 1);
  }, []);

  const decreaseFontSize = useCallback(() => {
    setFontSize((curr) => curr - 1);
  }, []);

  const isDark = useMemo(
    () =>
      displayMode === "Dark" || (displayMode === "System" && prefersDarkMode),
    [displayMode, prefersDarkMode]
  );

  const muiTheme = useMemo(() => {
    const theme = isDark ? darkTheme : lightTheme;
    return createTheme({
      ...theme,
      typography: {
        ...theme.typography,
        fontSize,
      },
    });
  }, [fontSize, isDark]);

  return (
    <ThemeContext.Provider
      value={{
        displayMode,
        setDisplayMode,
        nextDisplayMode,
        fontSize,
        setFontSize,
        increaseFontSize,
        decreaseFontSize,
      }}
    >
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
export { ThemeContextProvider };
