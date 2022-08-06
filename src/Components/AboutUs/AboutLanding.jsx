import { Box, Container, Typography } from '@mui/material';

import React from 'react';

function AboutLanding() {
    return (
        <Container
            sx={{ 
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center'
            }}>
            <Typography
            variant="h1"
            noWrap
            sx={{
                fontSize: { xs: '35px', md: '70px' },
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                padding:{xs:'20px',sm:'40px'},
                fontFamily: 'Oleo Script'
            }} >
                Somos Italiano Oggi
            </Typography>
            <Box sx={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                gap:'30px',
                flexWrap:'wrap'
            }}>
                <Typography 
                    sx={{
                        maxWidth:'400px',
                        textAlign:'justify'
                    }}>
                Italiano Oggi es nuestra escuela de italiano online, un espacio para aprender, apasionarte y cumplir tus objetivos con el italiano. Nuestro equipo está formado por tres docentes especializadas en la enseñanza del italiano como lengua extranjera y sumamos entre todas más de 20 años de experiencia. Sólo este año han estudiado con nosotras más de 150 estudiantes de diferentes países. ¡Sumate vos también! 
                </Typography>
                <Box component='img' src='https://firebasestorage.googleapis.com/v0/b/italianooggi-b86ca.appspot.com/o/Imagenes%2Flanding.jpg?alt=media&token=0ff22962-70c0-49b4-85ca-681368fc73d7' 
                    sx={{
                        maxWidth:{xs:'300px', sm:'500px'}, 
                        borderRadius:'3px',
                        boxShadow:'0px 1px 8px rgba(0,0,0,0.4)'
                }}/>
            </Box>
        </Container>
    )
}

export default AboutLanding