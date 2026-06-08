import Box from "@mui/material/Box";
import { Outlet } from "react-router";
import Header from "./Header.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import { HeaderHeight, FooterHeight, menuWidth } from "../theme_params.jsx";

function AppLayout() {
  return (
    <Box
      sx={{
        display: "grid",
        minHeight: "100vh",
        gridTemplateRows: `${HeaderHeight}px 1fr ${FooterHeight}px`,
        gridTemplateColumns: { xs: "1fr", md: `1fr ${menuWidth}px` },
        gridTemplateAreas: {
          xs: `"header" "main" "footer"`,
          md: `"header header" "main nav" "footer footer"`,
        },
      }}
    >
      <Header />
      <NavBar />
      <Box
        sx={{ gridArea: "main", p: 3, backgroundColor: "background.default" }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default AppLayout;
