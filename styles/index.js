const { createTheme } = require("@mui/material");

const theme = createTheme({
  typography: {
    fontFamily: "'Encode Sans', sans-serif",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#0057fc",
      dark: "#0057fc",
    },
    contrastThreshold: 1,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: ["none"],
          borderRadius: 1,
          "&:hover": {
            backgroundColor: "#0036ff",
          },
          transition: "0.4s ease",
        },
      },
    },
  },
});

export default theme;
