import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { PageTitle } from "../vars.jsx";

function Header() {
    return (
        <AppBar position="static" sx={{ gridArea: "header" }}>
            <Toolbar>
                <Typography variant="h6" component="div">
                    {PageTitle}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;