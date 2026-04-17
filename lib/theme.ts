// lib/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#408A71",
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
      default: "#091413",
      paper: "#111E1C",
    },
    text: {
      primary: "#EAF7F3",
      secondary: "#9FC7BA",
    },
    divider: "rgba(255, 255, 255, 0.12)",
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
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
          backgroundColor: "#111E1C",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#091413",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        },
      },
    },
  },
});

export default theme;
