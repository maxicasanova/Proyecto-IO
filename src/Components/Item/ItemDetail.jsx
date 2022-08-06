import { Box, Button, Container, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import { OrderContext } from '../Context/OrderContextProvider';
import React from 'react';

function ItemDetail({elemento}) {

    const navigate = useNavigate();

    const { addOrder } = React.useContext(OrderContext);
    const { getOrder } = React.useContext(OrderContext);

    let location = useLocation();

    const handleClickOrder = (elemento) => {
        addOrder(getOrder(elemento, location));
        navigate('/mailform')
    }

    return (
        elemento ? (
        <Container 
            sx={{
                margin:'20px', 
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent: 'center'
            }}>
            <Typography variant='h2' sx= {{fontWeight: 400}} gutterBottom>
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
                <Box component='img' src="https://picsum.photos/300" 
                    sx={{
                        boxShadow:'0px 1px 8px rgba(0,0,0,0.4)',
                        borderRadius:'3px'
                    }} />
                <Box sx={{display:'flex', flexDirection:'column', gap:'20px'}}>
                <Typography 
                    sx={{
                        maxWidth:{sm:'30vw'}
                    }}>
                    {elemento.descripcionCorta}
                </Typography>
                <Box 
                    sx={{
                        display:'flex',
                        flexDiection:'row',
                        flexWrap:'no-wrap',
                        gap:'5px'
                }}>
                    {elemento.programa && (<Button variant='contained' component='a' href={elemento.programa || 'https://firebasestorage.googleapis.com/v0/b/italianooggi-b86ca.appspot.com/o/Programas%20de%20estudio%2FA1_Programa%202022.pdf?alt=media&token=8b220684-812d-4478-a3e2-bf3135d3445e'} target="_blank" download>
                        Descargar Programa
                    </Button>)}
                    <Button variant='contained' color='secondary' onClick={() => {handleClickOrder(elemento)}} >Solicitar</Button>
                </Box>
                </Box>
            </Box>
            <Box>
                <Typography>
                    {elemento.descripcion}
                </Typography>
            </Box>
        </Container>
        ) : (
            <Typography>No se encontro el elemento.</Typography>
        )
    )
}

export default ItemDetail