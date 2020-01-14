import { createMuiTheme } from "@material-ui/core/styles";

export const COLORS = {
  primary: "#9E1830",
  secondary: "#F6552A",
  accent: "#F8B237"
};

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#9E1830",
    },
    secondary: {
      main: "#F6552A"
    },
    background: {
      default: "#9E1830"
    }
  },
  typography: {
    fontFamily: 'SentyWen',
    fontSize: 24,
    h1: {
      fontSize: 40,
    }
  }
});
export default theme;
