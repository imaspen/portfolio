import { ThemeOptions } from "@mui/material";
import { cyan, pink } from "@mui/material/colors";

const theme: ThemeOptions = {
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(", "),
  },
  palette: { mode: "light", primary: pink, secondary: cyan },
  components: {
    MuiButton: {
      defaultProps: {
        // variant: "contained",
      },
    },
  },
};

export default theme;
