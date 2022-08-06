import { Box, Button, Container, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import Imagen1 from '../../images/AsyncCourse.png';
import { OrderContext } from '../Context/OrderContextProvider';
import React from 'react';
import { amber } from '@mui/material/colors';

function AsyncCourse({elemento}) {
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
                        textAlign:'justify'
                    }}>
                    ¡Empezá HOY a estudiar italiano desde cero, a tu ritmo, sin horarios y con acompañamiento docente!
                </Typography>
                <Typography 
                    sx={{
                        maxWidth:{sm:'30vw'},
                        textAlign:'justify'
                    }}>
                    Es ideal para aprender y comunicar en italiano rápido y con contenido de calidad.
                </Typography>
                <Box 
                    sx={{
                        display:'flex',
                        flexDiection:'row',
                        flexWrap:'no-wrap',
                        gap:'5px'
                }}>
                    {elemento.programa && (<Button variant='contained' component='a' href={elemento.programa || 'https://firebasestorage.googleapis.com/v0/b/italianooggi-b86ca.appspot.com/o/Programas%20de%20estudio%2FA1_Programa%202022.pdf?alt=media&token=8b220684-812d-4478-a3e2-bf3135d3445e'} target="_blank" download sx={{
                        fontSize:{xs:'12px', sm:'20px'}
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
                ¿Qué incluye el curso?
                </Typography>
                <Box component='ul' 
                    sx={{
                        display:'flex', 
                        flexDirection:'column',
                        gap:'16px',
                        listStyleType: 'none',
                        fontWeight: '500',
                        paddingLeft:{xs:'20px !important', sm:'40px'}
                    }}>
                        <Typography variant='p' component='li'>
                            16 clases grabadas (+32 horas de video).
                        </Typography>
                        <Typography variant='p' component='li'>
                            +30 actividades interactivas en las que trabajamos todas las habilidades (lectura, escritura, escucha, producción oral y reflexión gramatical), con juegos, canciones, fichas de trabajo interactivas y ¡mucho más!
                        </Typography>
                        <Typography variant='p' component='li'>
                            Libros, películas y recursos para seguir aprendiendo italiano.
                        </Typography>
                        <Typography variant='p' component='li'>
                            Acceso a nuestro grupo privado de Telegram.
                        </Typography>
                        <Typography variant='p' component='li'>
                            Acceso a nuestro canal de Discord para hacer práctica oral con otros compañeros y compañeras. 
                        </Typography>
                        <Box component='img' src={Imagen1} />
                </Box>
                <Box sx={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent: 'center',
                    padding:'20px',
                    bgcolor:amber[500],
                    boxShadow:'0px 1px 8px rgba(0,0,0,0.4)'
                }}>
                    <Typography variant='h5'>
                        ¡Accedé al CURSO COMPLETO por sólo AR${elemento.precio} (pesos argentinos) o €{elemento.precioEuros} (euros)! 
                    </Typography>
                    <Typography variant='h5'>
                        Podés pagarlo en 1, 2 o 4 cuotas.
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
                        // bgcolor:amber[500],
                        padding:'20px',
                        // boxShadow:'0px 1px 8px rgba(0,0,0,0.4)'
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
                        // fontWeight: '500',
                    }}>
                        <Typography variant='p' component='li' sx={{fontWeight: '500'}}>
                            1.	¿Cuáles son los medios y modalidades de pago? 
                        </Typography>
                            Recibimos transferencia bancaria a una cuenta argentina, transferencia a una cuenta bancaria española o pago por PayPal.
                        <Typography variant='p' component='li' sx={{fontWeight: '500'}}>
                            2. ¿Cuál es el tiempo previsto para la finalización del curso? 
                        </Typography>
                            El tiempo previsto de cursado es de 4 meses, pero ¡podés hacerlo a tu ritmo!
                        <Typography variant='p' component='li' sx={{fontWeight: '500'}}>
                            3. ¿Hasta cuándo pueden tener acceso al aula virtual?
                        </Typography>
                            Tenés acceso al aula virtual por seis meses, pero si necesitás más tiempo para terminar ¡sólo tenés que avisarnos!
                        <Typography variant='p' component='li' sx={{fontWeight: '500'}}>
                            4. ¿Hay espacios de consulta y acompañamiento para las tareas?
                        </Typography>
                            ¡Sí! Podés realizar tus consultas a la docente a través del aula virtual o a través del grupo de Telegram del curso. Además, vas a recibir correcciones y comentarios personalizados.
                        <Typography variant='p' component='li' sx={{fontWeight: '500'}}>
                            5. ¿Cómo puedo realizar las actividades de producción oral?
                        </Typography> 
                            Tenemos un canal de Discord para realizar las actividades de producción oral con otros/as compañeros/as del curso. En nuestra sala de estudio están siempre abiertas las salas de voz, con o sin video, para que puedas practicar en el horario que prefieras.
                        <Typography variant='p' component='li' sx={{fontWeight: '500'}}>
                            6. ¿Entregan certificado al final del curso?
                        </Typography> 
                            ¡Sí! Entregamos un certificado de finalización del curso. 
                    </Box>
                <Box sx={{display:'flex',justifyContent:'center', margin:'10px auto'}}>
                    <Button variant='contained' color='secondary' onClick={() => {handleClickOrder(elemento)}} >Quiero Empezar</Button>
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

export default AsyncCourse