import { useState } from 'react';
import Header from './Header.jsx';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import { Outlet } from 'react-router';
import { Box } from '@mui/material';
import { menuWidth, HeaderHeight, FooterHeight, HeaderBgColor } from '../theme_params.jsx';

function AppLayout() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{
            display: 'grid',
            minHeight: '100vh',
            gridTemplateRows: `${HeaderHeight}px 1fr ${FooterHeight}px`,
            gridTemplateColumns: {
                xs: '1fr',
                md: `1fr ${menuWidth}px`,
            },
            gridTemplateAreas: {
                xs: `
                    "header"
                    "main"
                    "footer"
                `,
                md: `
                    "header header"
                    "main nav"
                    "footer footer"
                `,
            },
        }}>

            <Box sx={{ gridArea: 'header', height: `${HeaderHeight}px` }}>
                <Header onMenuClick={handleDrawerToggle} />
            </Box>

            <Box sx={{ gridArea: 'nav', display: { xs: 'none', md: 'block' } }}>
                <NavBar mobileOpen={mobileOpen} onClose={handleDrawerToggle} />
            </Box>

            <Box sx={{
                gridArea: 'main',
                overflow: 'auto',
                borderRight: `1px solid ${HeaderBgColor}`,
                borderLeft: `1px solid ${HeaderBgColor}`,
                p: 2,
            }}>
                <Outlet />
            </Box>

            <Box sx={{ gridArea: 'footer', height: `${FooterHeight}px` }}>
                <Footer />
            </Box>

        </Box>
    );
}

export default AppLayout;
