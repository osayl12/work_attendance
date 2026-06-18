import { AppBar, Toolbar, Typography, IconButton, useMediaQuery, useTheme, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { HeaderHeight } from '../theme_params.jsx';
import { PageTitle } from '../../vars.js';

function Header({ onMenuClick }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AppBar
            position="static"
            sx={{
                height: `${HeaderHeight}px`,
                '& .MuiToolbar-root': {
                    height: `${HeaderHeight}px`,
                    minHeight: `${HeaderHeight}px`,
                },
            }}
        >
            <Toolbar>
                {isMobile && (
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={onMenuClick}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                )}
                <Typography variant="h6" component="h1" sx={{ pr: 3 }}>
                    {PageTitle}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
            </Toolbar>
        </AppBar>
    );
}

export default Header;
