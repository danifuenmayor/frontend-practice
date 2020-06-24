import { createMuiTheme } from "@material-ui/core/styles";
export {};
// Material UI
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#90caf9",
      main: "#81d4fa",
      dark: "#1976d2",
      contrastText: "#e1f5fe",
    },
    secondary: {
      light: "##9fa8da",
      main: "#5c6bc0",
      dark: "#303f9f",
      contrastText: "#ede7f6",
    },
  },
  spacing: 8,
  typography: {
    fontFamily: "Open Sans",
  },
});
export default theme;
