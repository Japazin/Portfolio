import { createTheme, responsiveFontSizes } from "@mui/material";


let theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main:"#4f8e3e",
    },
  },
  typography: {
    fontFamily:"Segoe UI" 
  }
});
theme = responsiveFontSizes (theme);
export default theme