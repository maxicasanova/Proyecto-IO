import './Landing.css';

import { Box, Button, Typography } from '@mui/material';

import AboutLanding from '../AboutUs/AboutLanding';
import ClubLanding from '../Club/ClubLanding';
import React from 'react';
import Sale from '../Sale/Sale';
import { amber } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

function Landing() {

    const navigate = useNavigate();

    return (
        <>
        <Box className='landing' 
            sx={{
                display:'flex', 
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap:'10px'
            }}>
            <Typography
                variant="h1"
                noWrap
                sx={{
                    fontSize: { xs: '30px', md: '70px' },
                    fontWeight: 700,
                    letterSpacing: '.1rem',
                    color: 'inherit',
                    ml: {xs:'auto', sm:'8%'},
                    bgcolor:amber[500],
                    padding:'20px',
                    boxShadow:'0px 1px 8px rgba(0,0,0,0.4)',
                    fontFamily: 'Oleo Script'
                }} >
                Italiano Oggi
            </Typography>
            <Typography
                variant="subtitle1"
                sx={{
                    textAlign: 'center',
                    // fontFamily: 'monospace',
                    fontWeight: 900,
                    // letterSpacing: '.05rem',
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize:{xs:'24',sm:'30px'},
                    backgroundColor:{xs:'white'},
                    width:{xs:'200px', sm:'400px'},
                    ml: {xs:'auto', sm:'9%'}
                }} >
                Aprende Italiano Hoy
            </Typography>
        </Box>
        <Sale />
        <ClubLanding />
        <Box 
            sx={{
                minHeight:{xs:'70vh',sm:'90vh'},
                backgroundColor:green[100],
                boxShadow:'0px 1px 8px rgba(0,0,0,0.4)',
                paddingBottom:'20px',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                gap:'20px'
            }}>
            <AboutLanding />
            <Button variant='contained' color='primary' onClick={() => navigate('/aboutus')}>¡Conocenos más!</Button>
        </Box>
        </>
    )
}

export default Landing
