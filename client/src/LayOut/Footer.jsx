import { Paper, Typography } from '@mui/material';
import { FooterHeight, FooterTxtColor } from '../theme_params.jsx';
import { PageTitle } from '../../vars.js';

function Footer() {
    return (
        <Paper
            component="footer"
            sx={{
                gridArea: 'footer',
                height: FooterHeight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingX: 2,
                backgroundColor: 'primary.main',
                color: FooterTxtColor,
                borderRadius: 0,
            }}
        >
            <Typography variant="body2">
                &copy; {new Date().getFullYear()} {PageTitle}
            </Typography>
        </Paper>
    );
}

export default Footer;
