import { createTheme } from "@mui/material/styles";

const primaryColor = "#1976d2";
const secondaryColor = "#dc004e";
const bgColor = "#f5f5f5";
const headerBgColor = "#1976d2";
const headerTextColor = "#ffffff";
const tableHeadBg = "#1976d2";
const tableHeadText = "#ffffff";

export const HeaderHeight = 64;
export const FooterHeight = 48;
export const menuWidth = 220;
export const HeaderBgColor = headerBgColor;
export const FooterBgColor = headerBgColor;
export const FooterTxtColor = headerTextColor;

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: { main: primaryColor },
    secondary: { main: secondaryColor },
    background: { default: bgColor },
    nav: {
      main: "#ffffff",
      text: "#555555",
      selected: { background: primaryColor, text: "#ffffff" },
      hover: { background: "#e3f2fd", text: primaryColor },
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: headerBgColor,
          color: headerTextColor,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: tableHeadBg,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: tableHeadText,
          fontWeight: "bold",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:nth-of-type(even)": {
            backgroundColor: "#f0f4ff",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
