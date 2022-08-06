import { Container, Typography } from '@mui/material'

import React from 'react'

function Confirmation() {
    return (
        <Container 
            sx={{
                display: 'flex', 
                flexDirection: 'column', 
                minHeight:'80vh', 
                justifyContent:'center', 
                alignItems:'center',
                gap:'30px'
            }}>
            <Typography variant='h4'>
            Fantastico! :) ¡Hemos recibido tu solicitud de inscripción!
            </Typography>
            <Typography variant='body1'>
            Te enviamos a tu mail toda la información para completar tu compra.
            </Typography>
            <Typography variant='body1'>
            ¡No te olvides de revisar también la carpeta de SPAM o correo no deseado!
            </Typography>
            <Typography>
            Cualquier duda, no dejes de comunicarte con nosotras al mail secretaria.italianooggi@gmail.com 
            GRAZIE MILLE! 
            </Typography>
        </Container>
    )
}

export default Confirmation