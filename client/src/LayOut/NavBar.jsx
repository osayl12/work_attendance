import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { useNavigate, useLocation } from "react-router";
import { navItems } from "../Routers/main_R.jsx";
import { menuWidth } from "../theme_params.jsx";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        gridArea: "nav",
        width: menuWidth,
        backgroundColor: "white",
        borderLeft: "1px solid #e0e0e0",
        display: { xs: "none", md: "block" },
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default NavBar;
