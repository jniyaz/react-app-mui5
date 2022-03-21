import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
  },
  customErrBtn: {
    backgroundColor: "red",
    color: "white",
    border: "1px solid black",
  },
});
