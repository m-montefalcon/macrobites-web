// lib/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#408A71", // tertiary — used for buttons, links
      light: "#B0E4CC",
      dark: "#285A48",
      contrastText: "#091413",
    },
    secondary: {
      main: "#285A48",
      light: "#408A71",
      dark: "#091413",
      contrastText: "#B0E4CC",
    },
    background: {
      default: "#091413", // primary — page background
      paper: "#285A48", // secondary — cards, modals, drawers
    },
    text: {
      primary: "#B0E4CC", // fourth — main readable text
      secondary: "#408A71", // tertiary — muted/secondary text
    },
    divider: "#285A48",
  },
  typography: {
    fontFamily: "'Inter', sans-serif", // swap with your preferred font
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#285A48",
          border: "1px solid #408A71",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#091413",
          borderBottom: "1px solid #285A48",
        },
      },
    },
  },
});

export default theme;
