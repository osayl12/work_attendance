import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FooterHeight } from "../theme_params.jsx";
import { PageTitle } from "../vars.jsx";

function Footer() {
    return (
        <Box sx={{
            gridArea:        "footer",
            height:          FooterHeight,
            backgroundColor: "primary.main",
            color:           "white",
            display:         "flex",
            alignItems:      "center",
            justifyContent:  "center",
        }}>
            <Typography variant="body2">
                © 2026 {PageTitle}
            </Typography>
        </Box>
    );
}

export default Footer;