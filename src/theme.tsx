import { cyan, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: { primary: pink, secondary: cyan },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
});

export default theme;
