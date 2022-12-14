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
        navigate('/serviceform')
    }

    const handleClickCitizenship = () => {
        const elemento = {nombre:'Ciudadania'}
        addOrder(getOrder(elemento, location));
        navigate('/serviceform')
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
                    Somos traductoras italiano-espa??ol matriculadas en el Colegio de Traductores de Tucum??n. Trabajamos en equipo para garantizar la fidelidad de la traducci??n y los tiempos de entrega de los trabajos. 
                </Typography>
                <Typography 
                    sx={{
                        maxWidth:{sm:'30vw'}
                    }}>
                    ??Traducimos tu carpeta para solicitar la ciudadan??a italiana en Argentina o en Italia!
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
                        justifyContent:'space-around',
                        gap:'16px',
                        listStyleType: 'none',
                        fontWeight: '500',
                        maxWidth:'70vw',
                        minHeight:{xs:'60vh', sm:'40vh'},
                        padding:'0px!important'
                    }}>
                    <Typography variant='p' component='li'>
                        1- Partidas, pasaportes, certificados y dem??s documentos personales.
                    </Typography>
                    <Typography variant='p' component='li'>
                        2- Programas de estudios, certificados anal??ticos, diplomas y dem??s documentos relacionados con la educaci??n.
                    </Typography>
                    <Typography variant='p' component='li'>
                        3- Poderes, testamentos, actas y dem??s documentos notariales y de ??ndole similar.
                    </Typography>
                    <Typography variant='p' component='li'>
                        4- Papeles de comercio, contratos, balances, estatutos, actas de asamblea/directorio y dem??s documentos societarios; estudios y documentos t??cnicos y cient??ficos; patentes de invenci??n, sentencias, expedientes judiciales, exhortos, oficios.
                    </Typography>
                </Box>
                <Box sx={{maxWidth:'70vw', mb:'15px'}}>
                    <Typography sx={{
                        bgcolor:amber[500],
                        padding:'20px',
                        boxShadow:'0px 1px 8px rgba(0,0,0,0.4)'
                    }}>
                        Para solicitar tu presupuesto envianos tus documentos escaneados o fotos legibles a agustina.ganami@filo.unt.edu.ar  
                    </Typography>
                    <Typography sx={{fontWeight:'700', mt:'20px'}}>
                        No te olvides de especificar:
                    </Typography>
                    <Box component='ul' 
                    sx={{
                        display:'flex', 
                        flexDirection:'column',
                        gap:'16px',
                        listStyleType: 'none',
                        maxWidth:'70vw',
                        padding:'0px!important'
                    }}>
                        <Typography variant='p' component='li'>
                        -Tipo(s) de documento(s) y tr??mite(s) a realizar. 
                        </Typography>
                        <Typography variant='p' component='li'>
                        -D??nde vas a presentar tus documentos (si vas a tramitar tu ciudadan??a* en Italia indicanos si vas a optar por asseverazione o doble apostilla).
                        </Typography>
                        <Typography variant='p' component='li'>
                        -Para cu??ndo necesit??s el trabajo.
                        </Typography>
                    </Box>
                    <Typography>
                        ??Te responderemos en 24 hs. h??biles con un presupuesto hecho a tu medida!
                    </Typography>
                    <Box sx={{mt:'20px', mb:'20px'}}>
                        <Typography sx={{mb:'20px'}}>
                        *Si quer??s revisar tu documentaci??n o ten??s alguna consulta sobre la ciudadan??a italiana, ??solicit?? tu consulta gratuita con nuestra oficina de asesor??a sobre ciudadan??a italiana 
                        </Typography>
                        <Button variant='contained' color='secondary' onClick={() => {handleClickCitizenship()}} >Reserva de consulta de ciudadania</Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Translations