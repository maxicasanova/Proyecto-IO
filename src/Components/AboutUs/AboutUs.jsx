import { Box, Container, Typography } from '@mui/material';

import AboutLanding from './AboutLanding';
import PersonItem from './PersonItem';
import React from 'react';
import { amber } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import miembros from '../../utils/miembros'

function AboutUs() {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <Box sx={{backgroundColor:green[100],
            paddingBottom:'20px'}}>
            <Container
                sx={{ 
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'center',
                }}>
                    <Box sx={{ 
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'center',
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
                        <Box>
                            <Typography 
                                sx={{
                                    textAlign:'justify'
                                }}>
                                Italiano Oggi comenzó a gestarse en 2015 y de a poco fue creciendo hasta que, en 2019 lanzamos oficialmente la escuela en dos sedes en la provincia de Tucumán, Argentina. Durante la pandemia comenzamos a trabajar de manera virtual y descubrimos en los entornos digitales enormes posibilidades para la enseñanza y el aprendizaje y para conectarnos con estudiantes de todo el mundo. 
                            </Typography>
                            <Typography sx={{
                                    textAlign:'justify'
                                }}>
                                Esta escuela es sueño, es pasión, es encuentro, es intercambio, es colaboración, es compromiso con la excelencia. 
                            </Typography>
                            <Typography sx={{
                                    textAlign:'left'
                                }}>
                            Estamos aquí para ayudarte a cumplir tus objetivos con el italiano.¡Estudiá con nosotras!
                            </Typography>
                        </Box>
                    </Box>
                <Typography
                variant="h2"
                noWrap
                sx={{
                    fontSize: { xs: '24px', md: '50px' },
                    fontWeight: 700,
                    color: 'inherit',
                    padding:'20px',
                    bgcolor:amber[500],
                    boxShadow:'0px 1px 8px rgba(0,0,0,0.4)',
                    margin: '40px'
                }} >
                    Conoce a nuestro equipo
                </Typography>
                <Box 
                    sx={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'center',
                    gap:'20px'
                    }}>
                        {miembros.map(m => (
                            <PersonItem persona={m} key={m.nombre}/>
                        ))}
                </Box>
            </Container>
        </Box>
    )
}

export default AboutUs