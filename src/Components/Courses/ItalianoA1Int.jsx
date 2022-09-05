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

    console.log(textos)

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
                    ¡Empezá HOY a estudiar italiano desde cero!
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
                Nuestro curso es para vos si…
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
                        {textos.cursoParaVos?.map(e => (
                            <Typography variant='p' component='li'>{e}</Typography>
                        ))}
                        {/* <Typography variant='p' component='li'>
                        te gustaría hablar italiano desde el primer día, en un ambiente relajado, dinámico y seguro.
                        </Typography>
                        <Typography variant='p' component='li'>
                        querés aprender italiano de manera rápida, divertida, con material exclusivo y de calidad.
                        </Typography>
                        <Typography variant='p' component='li'>
                        estás en Italia o estás por viajar a Italia y querés aprender para comunicarte con progresiva fluidez y naturalidad. 
                        </Typography>
                        <Typography variant='p' component='li'>
                        necesitás rendir el examen para obtener la ciudadanía italiana por matrimonio y querés empezar a prepararte desde ahora.
                        </Typography>
                        <Typography variant='p' component='li'>
                        querés jugar y construir conocimientos con otros/as, de manera colaborativa y lúdica.
                        </Typography>
                        <Typography variant='p' component='li'>
                        sos un/a apasionado/a de las lenguas y querés aprender la lengua y la cultura italiana de la mano de docentes profesionales con más de 8 años de experiencia.
                        </Typography> */}
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
                        paddingLeft:{xs:'20px !important', sm:'40px'},
                        mb:'20px'
                    }}>
                        {textos.incluye?.map(e => (
                            <Typography variant='p' component='li'>{e}</Typography>
                        ))}
                        {/* <Typography variant='p' component='li'>
                            1 ENCUENTRO EN VIVO a la semana a través de la plataforma Zoom, para practicar conversación, jugar y hablar (mucho) en italiano.
                        </Typography>
                        <Typography variant='p' component='li'>
                            MATERIAL DE ESTUDIO EXCLUSIVO y ACTIVIDADES INTERACTIVAS en el aula virtual para trabajar lectura, escritura, escucha y reflexión gramatical. Trabajamos con juegos, canciones, videos, noticias, memes y ¡mucho más! para que el aprendizaje sea divertido y natural.
                        </Typography>
                        <Typography variant='p' component='li'>
                            Participación gratuita en los TALLERES DE FONÉTICA ITALIANA del Italiano Oggi Club.
                        </Typography>
                        <Typography variant='p' component='li'>
                            Acceso a LIBROS, PELÍCULAS Y RECURSOS EXTRA para que profundices tus conocimientos de italiano.
                        </Typography>
                        <Typography variant='p' component='li'>
                            Participación en el grupo privado de Telegram e ingreso al canal de Discord para seguir practicando italiano. 
                        </Typography> */}
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
                        ¡Accedé al CURSO por  €{elemento.precioEuros} (euros) mensuales!.
                    </Typography>
                    <Typography variant='h6'>
                        Promoción especial para argentinos/as: AR${elemento.precio} por mes!
                    </Typography>
                    <Typography variant='h6'>
                        Promoción especial para brasileros/as: R$ {elemento.precioReales} por mes!.
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
                        {textos.faq?.map(e => (
                        <Typography variant='p' component='li'>{e}</Typography>
                        ))}
                        {/* <Typography variant='p' component='li' sx={{fontWeight: '500'}}>
                            1.	¿Cuáles son los medios y modalidades de pago? 
                        </Typography>
                            Recibimos transferencia bancaria a una cuenta argentina, transferencia a una cuenta bancaria española o pago por PayPal.
                        <Typography variant='p' component='li' sx={{fontWeight: '500'}}>
                            2. ¿Qué significa nivel A1? ¿Para qué sirve? 
                        </Typography>
                            El NIVEL A1 es el primer nivel del Cuadro Común Europeo de Referencia para las Lenguas y es conocido como NIVEL DE CONTACTO. Este primer nivel es fundamental para construir las bases en el estudio del italiano y aprender a comunicarse en contextos de alta frecuencia y de primera necesidad, como por ejemplo: ir al supermercado, al bar o al restaurante en Italia; presentarte, dar y pedir información personal; pedir indicaciones en la ciudad; hablar de tus hábitos y rutina cotidiana, etc. Es ideal para quienes necesiten viajar a Italia con una base de italiano.
                        <Typography variant='p' component='li' sx={{fontWeight: '500'}}>
                            3. ¿Entregan certificado al final del curso?
                        </Typography> 
                            ¡Sí! Entregamos un certificado de finalización del curso.  */}
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