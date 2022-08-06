import { Box, Button, Container, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import { OrderContext } from '../Context/OrderContextProvider';
import React from 'react';
import { amber } from '@mui/material/colors';

function Translations() {

    const navigate = useNavigate();
    
    const { addOrder } = React.useContext(OrderContext);
    const { getOrder } = React.useContext(OrderContext);
    
    let location = useLocation();
    
    const handleClickOrder = () => {
        const elemento = {nombre:'Traducciones'}
        addOrder(getOrder(elemento, location));
        navigate('/mailform')
    }

    return (
        <Container 
            sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent: 'center'
            }}>
            <Typography variant='h2' sx= {{fontWeight: 400, mt:'20px', mb:'20px'}}>
                Traducciones
            </Typography>
            <Box sx={{
                maxWidth:'80%',
                display:'flex',
                gap:'20px',
                flexWrap: {xs:'wrap', sm:'nowrap'},
                flexDirection:{xs:'column', sm:'row'},
                alignItems:'center'
                }}>
                <Box component='img' src="https://firebasestorage.googleapis.com/v0/b/italianooggi-b86ca.appspot.com/o/Imagenes%2Flanding.jpg?alt=media&token=0ff22962-70c0-49b4-85ca-681368fc73d7" 
                    sx={{
                        boxShadow:'0px 1px 8px rgba(0,0,0,0.4)',
                        borderRadius:'3px',
                        maxWidth:{xs:'280px',sm:'430px'}
                    }} />
                <Box sx={{display:'flex', flexDirection:'column', gap:'20px', alignItems:{xs:'center', sm:'flex-start'}}}>
                <Typography 
                    sx={{
                        maxWidth:{sm:'30vw'}
                    }}>
                    Somos traductoras italiano-español matriculadas en el Colegio de Traductores de Tucumán. Trabajamos en equipo para garantizar la fidelidad de la traducción y los tiempos de entrega de los trabajos. 
                </Typography>
                <Typography 
                    sx={{
                        maxWidth:{sm:'30vw'}
                    }}>
                    ¡Traducimos tu carpeta para solicitar la ciudadanía italiana en Argentina o en Italia!
                </Typography>
                <Box 
                    sx={{
                        display:'flex',
                        flexDiection:'row',
                        flexWrap:'no-wrap',
                        gap:'5px'
                }}>
                    <Button variant='contained' color='secondary' onClick={() => {handleClickOrder()}} >Comunicate con nosotras</Button>
                </Box>
                </Box>
            </Box>
            <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-around',
                        alignItems:'center'
                }}>
                <Box sx={{
                        display:'flex',
                        justifyContent:'center',
                        mt:{xs:'20px', sm:'40px'}
                    }}>
                    <Typography variant='h3' component='p' 
                    sx={{
                        bgcolor:amber[500],
                        padding:'20px',
                        boxShadow:'0px 1px 8px rgba(0,0,0,0.4)'
                    }}>Traducimos:</Typography>
                </Box>
                <Box component='ul' 
                    sx={{
                        display:'flex', 
                        flexDirection:'column',
                        gap:'16px',
                        listStyleType: 'none',
                        fontWeight: '500',
                        maxWidth:'70vw',
                        padding:'0px!important'
                    }}>
                    <Typography variant='p' component='li'>
                        1- Partidas, pasaportes, certificados y demás documentos personales.
                    </Typography>
                    <Typography variant='p' component='li'>
                        2- Programas de estudios, certificados analíticos, diplomas y demás documentos relacionados con la educación.
                    </Typography>
                    <Typography variant='p' component='li'>
                        3- Poderes, testamentos, actas y demás documentos notariales y de índole similar.
                    </Typography>
                    <Typography variant='p' component='li'>
                        4- Papeles de comercio, contratos, balances, estatutos, actas de asamblea/directorio y demás documentos societarios; estudios y documentos técnicos y científicos; patentes de invención, sentencias, expedientes judiciales, exhortos, oficios.
                    </Typography>
                </Box>
                <Box sx={{maxWidth:'70vw', mb:'15px'}}>
                    <Typography>
                        Para solicitar tu presupuesto envianos tus documentos escaneados o fotos legibles a agustina.ganami@filo.unt.edu.ar y contanos sobre tu caso. 
                    </Typography>
                    <Typography>
                        No te olvides de especificar:
                        Tipo(s) de documento(s) y trámite(s) a realizar. 
                        Dónde vas a presentar tus documentos (si vas a tramitar tu ciudadanía* en Italia indicanos si vas a optar por asseverazione o doble apostilla).
                        Para cuándo necesitás el trabajo.
                    </Typography>
                    <Typography>
                        ¡Te responderemos en 24 hs. hábiles con un presupuesto hecho a tu medida!
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default Translations