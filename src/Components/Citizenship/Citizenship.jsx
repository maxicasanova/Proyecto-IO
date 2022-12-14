import { Box, Button, Container, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import { OrderContext } from '../Context/OrderContextProvider';
import React from 'react';
import { amber } from '@mui/material/colors';

function Citizenship() {

    const navigate = useNavigate();

    const { addOrder } = React.useContext(OrderContext);
    const { getOrder } = React.useContext(OrderContext);

    let location = useLocation();

    const handleClickOrder = () => {
        const elemento = {nombre:'Ciudadania'}
        addOrder(getOrder(elemento, location));
        navigate('/serviceform')
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <Container 
            sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent: 'center'
            }}>
            <Typography variant='h2' sx= {{fontWeight: 400, mt:'20px', mb:'20px'}}>
                Ciudadania
            </Typography>
            <Box sx={{
                display:'flex',
                gap:'20px',
                flexWrap: {xs:'wrap', sm:'nowrap'},
                flexDirection:{xs:'column', sm:'row'},
                alignItems:'center'
                }}>
                <Box component='img' src="https://firebasestorage.googleapis.com/v0/b/italianooggi-b86ca.appspot.com/o/Imagenes%2Fciudadania-2.jpg?alt=media&token=c006db4c-9468-43ff-abe2-2c049c934081" 
                    sx={{
                        boxShadow:'0px 1px 8px rgba(0,0,0,0.4)',
                        borderRadius:'3px',
                        maxWidth: {xs:'280px',sm:'450px'}
                    }} />
                <Box sx={{display:'flex', flexDirection:'column', gap:'20px', alignItems:{xs:'center', sm:'flex-start'}}}>
                    <Typography 
                        sx={{
                            maxWidth:{sm:'30vw'},
                            fontSize:{xs:'16px',sm:'20px'}
                        }}>
                        ??Empecemos hoy a armar tu carpeta para la ciudadan??a italiana!
                    </Typography>
                    <Box 
                        sx={{
                            display:'flex',
                            flexDiection:'row',
                            flexWrap:'no-wrap',
                            gap:'5px'
                    }}>
                        <Button variant='contained' color='secondary' onClick={() => {handleClickOrder()}} >Reserv?? tu consulta gratuita</Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                mt:'30px',
                maxWidth:'80%',
                display:'flex',
                gap:'20px',
                flexWrap: {xs:'wrap', sm:'nowrap'},
                flexDirection:'column',
                alignItems:'center'
            }}>
                <Typography>
                Cada vez son m??s las personas que por diferentes motivos buscan tramitar su ciudadan??a italiana. Desde Italiano Oggi queremos estar presentes en cada paso y decidimos formarnos para poder acompa??arte en este proceso.
                </Typography>
                <Typography>
                Guadalupe Sosa es la persona encargada de nuestra oficina de asesoramiento. Su objetivo es buscar y encontrar la informaci??n  precisa y necesaria para el armado de tu carpeta y acompa??arte en el proceso de reconstrucci??n de la documentaci??n. 
                </Typography>
                <Typography component='h2' variant='h3' sx={{
                        bgcolor:amber[500],
                        padding:'20px',
                        boxShadow:'0px 1px 8px rgba(0,0,0,0.4)',
                        fontSize:{xs:'36px', sm:'48px'}
                    }}>
                    Nuestros servicios: 
                </Typography>
                <Box component='ul' 
                    sx={{
                        display:'flex', 
                        flexDirection:'column',
                        gap:'16px',
                        listStyleType: 'none',
                        fontWeight: '500',
                        padding:'0px!important'
                    }}>
                    <Typography variant='p' component='li'>
                        + Genealog??a familiar: Armamos tu ??rbol geneal??gico.
                    </Typography>
                    <Typography variant='p' component='li'>
                        + Verificaci??n de elegibilidad: ??Pod??s obtener ciudadan??a Italiana? Lo averiguamos.
                    </Typography>
                    <Typography variant='p' component='li'>
                        + B??squeda de actas.
                    </Typography>
                    <Typography variant='p' component='li'>
                        + Revisi??n de documentaci??n. 
                    </Typography>
                    <Typography variant='p' component='li'>
                        + Traducciones  LINK A SECCI??N TRADUCCIONES
                    </Typography>
                </Box>
                <Typography sx={{fontWeight:700, mb:'20px', textAlign:'center', fontSize:'20px'}}>
                    * IMPORTANTE: La solicitud del turno para tramitar la ciudadan??a italiana en los consulados de Argentina es un tr??mite personal y debe realizarlo necesariamente la persona interesada. 
                </Typography>
            </Box>
        </Container>
    )
}

export default Citizenship