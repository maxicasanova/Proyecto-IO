import { Box, Button, Container, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import { OrderContext } from '../Context/OrderContextProvider';
import React from 'react';
import { amber } from '@mui/material/colors';

function ItalianoA1Int ({elemento, textos}) {
    const navigate = useNavigate();

    const { addOrder } = React.useContext(OrderContext);
    const { getOrder } = React.useContext(OrderContext);

    let location = useLocation();

    const handleClickOrder = (elemento) => {
        addOrder(getOrder(elemento, location));
        navigate('/mailform')
    }

    React.useEffect (() => {
        window.scrollTo(0, 0);
    },[])

    return (
        elemento ? (
        <Container 
            sx={{
                margin:'20px auto', 
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent: 'center'
            }}>
            <Typography variant='h2' sx= {{fontWeight: 400, fontSize:{xs:'35px', md:'70px'}, textAlign:'center'}} gutterBottom>
                {elemento.nombre}
            </Typography>
            <Box sx={{
                maxWidth:'80%',
                display:'flex',
                gap:'20px',
                flexWrap: {xs:'wrap', sm:'nowrap'},
                flexDirection:{xs:'column', sm:'row'},
                alignItems:'center'
                }}>
                <Box component='img' src={elemento.imagen}
                    sx={{
                        boxShadow:'0px 1px 8px rgba(0,0,0,0.4)',
                        borderRadius:'3px',
                        maxHeight:'300px'
                    }} />
                <Box sx={{display:'flex', flexDirection:'column', gap:'20px'}}>
                    <Typography 
                        sx={{
                            maxWidth:{sm:'30vw'},
                            textAlign:'justify',
                            fontWeight:'700',
                            fontSize:{xs:'16px', md:'25px'}
                        }}>
                        {elemento.descripcionCorta || elemento.descripcion}
                    </Typography>
                    {elemento.opciones?.map(e => (
                        <Typography 
                            sx={{
                                maxWidth:{sm:'30vw'},
                                textAlign:'justify'
                            }}>
                            {e.horario}
                        </Typography>
                        ))}
                <Box 
                    sx={{
                        display:'flex',
                        flexDiection:'row',
                        flexWrap:'no-wrap',
                        gap:'5px'
                }}>
                    {elemento.programa && (<Button variant='contained' component='a' href={elemento.programa || 'https://firebasestorage.googleapis.com/v0/b/italianooggi-b86ca.appspot.com/o/Programas%20de%20estudio%2FA1_Programa%202022.pdf?alt=media&token=8b220684-812d-4478-a3e2-bf3135d3445e'} target="_blank" download sx={{
                        fontSize:{xs:'12px', sm:'20px'}, textAlign:'center'
                    }}>
                        Descargar Programa
                    </Button>)}
                    <Button variant='contained' color='secondary' onClick={() => {handleClickOrder(elemento)}} >¡INSCRIBITE AHORA!</Button>
                </Box>
                </Box>
            </Box>
            <Box sx={{
                maxWidth:'80%',
                mt:'30px'
            }}>
                <Typography variant='h3'>
                Nuestro curso es para vos si…
                </Typography>
                <Box component='ul' 
                    sx={{
                        display:'flex', 
                        flexDirection:'column',
                        gap:'16px',
                        listStyleType: 'circle',
                        fontWeight: '400',
                        paddingLeft:{xs:'20px !important', sm:'40px'}
                    }}>
                        {textos.cursoParaVos?.map(e => (
                            <Typography variant='p' component='li'>{e}</Typography>
                        ))}
                </Box>
            </Box>
            <Box sx={{
                maxWidth:'80%',
                mt:'30px'
            }}>
                <Typography variant='h3'>
                ¿Qué incluye el curso?
                </Typography>
                <Box component='ul' 
                    sx={{
                        display:'flex', 
                        flexDirection:'column',
                        gap:'16px',
                        listStyleType: 'none',
                        fontWeight: '400',
                        paddingLeft:{xs:'20px !important', sm:'40px'},
                        mb:'20px'
                    }}>
                        {textos.incluye?.map(e => (
                            <Typography variant='p' component='li'>- {e}</Typography>
                        ))}
                </Box>
                <Box sx={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent: 'center',
                    padding:'20px',
                    bgcolor:amber[500],
                    boxShadow:'0px 1px 8px rgba(0,0,0,0.4)',
                    mt:'50px'
                }}>
                    <Typography variant='h6'>
                        ¡Accedé al CURSO por  €{elemento.precioEuros} (euros) mensuales!
                    </Typography>
                    <Typography variant='h6'>
                        Promoción especial para argentinos/as: AR${elemento.precio} por mes!
                    </Typography>
                    <Typography variant='h6'>
                        Promoción especial para brasileros/as: R$ {elemento.precioReales} por mes!
                    </Typography>
                </Box>
                <Box sx={{display:'flex',justifyContent:'center', margin:'10px auto'}}>
                    <Button variant='contained' color='secondary' onClick={() => {handleClickOrder(elemento)}}>Quiero Inscribirme</Button>
                </Box>
            </Box>
            <Box sx={{
                maxWidth:'80%',
                mt:'30px'
            }}>
                <Typography variant='h3' sx={{
                        padding:'20px',
                    }}>
                    Preguntas Frecuentes:
                </Typography>
                <Box component='ul' 
                    sx={{
                        display:'flex', 
                        flexDirection:'column',
                        gap:'16px',
                        listStyleType: 'none',
                        paddingLeft:{xs:'20px !important', sm:'40px'}
                    }}>
                        {textos.faq?.map((e, index) => (
                        <Typography variant='p' component='li' sx={index % 2 === 0 ? {fontWeight: '500'} : {fontWeight: '100'}}>{e}</Typography>
                        ))}
                    </Box>
                <Box sx={{display:'flex',justifyContent:'center', margin:'10px auto'}}>
                    <Button variant='contained' color='secondary' onClick={() => {handleClickOrder(elemento)}} >¡INSCRIBITE AHORA!</Button>
                </Box>
                <Box sx={{display:'flex',justifyContent:'center', margin:'10px auto'}}>
                    ¿Tenés otra duda? ¡Escribí por Whatsapp a la secretaría!
                </Box>
            </Box>
        </Container>
        ) : (
            <Typography>No se encontro el elemento.</Typography>
        )
    )
}

export default ItalianoA1Int