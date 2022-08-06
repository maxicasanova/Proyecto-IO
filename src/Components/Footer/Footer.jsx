import { Box, colors, Typography } from '@mui/material'
import React from 'react';
import {red} from '@mui/material/colors';

function Footer() {
    return (
        <Box 
            sx ={{
                height:'10vh', 
                bgcolor: red[500], 
                zIndex: '2000', 
                textAlign:'center', 
                padding:'20px', 
                boxShadow:'0px 1px 8px rgba(0,0,0,0.4)'
            }}>
            <Typography color='white'>
                Italiano Oggi todos los derechos reservados.
            </Typography>
        </Box>
    )
}

export default Footer