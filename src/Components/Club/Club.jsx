import { Box, Button, Container, Typography } from '@mui/material';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import {useLocation, useNavigate} from 'react-router-dom';

import ClubLanding from './ClubLanding';
import OldClubs from './OldClubs';
import { OrderContext } from '../Context/OrderContextProvider';
import React from 'react';
import { amber } from '@mui/material/colors';

function Club() {

    const[precioClub, setPrecioClub] = React.useState({});

    const { addOrder } = React.useContext(OrderContext);
    const { getOrder } = React.useContext(OrderContext);

    const ubicacion = useLocation().pathname;
    const navigate = useNavigate();

    const handleSubscribe = () => {
        const elemento = {nombre:'Club'}
        addOrder(getOrder(elemento, ubicacion));
        navigate('/mailform');
    }

    React.useEffect(() => {
        window.scrollTo(0, 50);
        const db = getFirestore();
        const pricesCollection = collection(db, 'preciosVarios');
        getDocs(pricesCollection)
        .then((res) => {
            if (res.size === 0) {
                console.log('No Results')
            } else {
                setPrecioClub((res.docs.map(doc => ({id: doc.id, ...doc.data()}))).find(p => p.id === 'club'));
            }
        })
        .catch((err) => console.log(err))
    },[])
    
    return (
        <Container 
            sx ={{
                display:'flex', 
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'space-evenly'
            }}>
            <ClubLanding />
            <Box sx={{
                mt:'20px',
                mb:'20px',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                minHeight: '60vh',
                gap:'20px'
                }}>
                <Typography variant='h3' component='p' 
                    sx={{
                        bgcolor:amber[500],
                        padding:'20px',
                        boxShadow:'0px 1px 8px rgba(0,0,0,0.4)',
                        fontSize:{xs:'36px', sm:'48px'},
                        textAlign:'center'
                    }}>
                    Es ideal para vos si querés:
                    </Typography>
                <Box component='ul' 
                    sx={{
                        display:'flex', 
                        flexDirection:'column',
                        alignItems:'center',
                        gap:'16px',
                        listStyleType: 'none',
                        fontWeight: '500',
                        padding:'10px!important'
                    }}>
                    <Typography variant='p' component='li'>
                        Potenciar tu italiano, mejorando diferentes habilidades: conversación e interacción oral y escrita, fonética, vocabulario, gramática...
                    </Typography>
                    <Typography variant='p' component='li' sx={{bgcolor:'black', color:'white', padding:'6px'}}>
                        Encontrarte con personas que comparten tu pasión por las lenguas para practicar, intercambiar, compartir.
                    </Typography>
                    <Typography variant='p' component='li' >
                        Participar de discusiones sobre cultura italiana desde una perspectiva compleja, crítica y diversa.
                    </Typography>
                    <Typography variant='p' component='li'sx={{bgcolor:'black', color:'white', padding:'6px'}}>
                        Aprender sobre historia, música, cine, literatura, cocina, lenguas ¡y muchos etcéteras! 
                    </Typography>
                    <Typography variant='p' component='li'>
                        Apostar por un aprendizaje creativo, colaborativo y autónomo. Con material auténtico y exclusivo.
                    </Typography>
                    <Typography variant='p' component='li'sx={{bgcolor:'black', color:'white', padding:'6px'}}>
                        Divertirte, descubrir, recorrer caminos desconocidos. Sorprenderte. Apasionarte.
                    </Typography>
                </Box>
                <Button color='primary' variant='contained' sx={{mb:'40px'}} onClick={()=> handleSubscribe()}>Estoy Convencido</Button>
            </Box>
            <Box sx={{bgcolor:amber[500], minHeight:'20vh', display:'flex', alignItems:'center', justifyContent:'center',boxShadow:'0px 1px 8px rgba(0,0,0,0.4)'}}>
                <Typography component='p' variant='h6' 
                    sx={{textAlign:'center', fontWeight:'600', padding:'10px'}}>
                    Escucharemos un podcast en italiano por mes. 
                    Ese podcast funcionará como disparador para discutir, ampliar, investigar, aprender diferentes aspectos de lengua y cultura italiana.
                </Typography>
            </Box>
            <Typography variant='h3' sx={{mt:'20px', mb:'30px'}}>Con tu membresía vas a recibir:</Typography>
            <Box component='ul' 
                sx={{
                    display:'flex', 
                    flexDirection:'column',
                    alignItems:'center',
                    gap:'16px',
                    listStyleType: 'none',
                    fontWeight: '500',
                    padding:'0px!important',
                    maxWidth:'90vw',
                    mb:'20px'
                }}>
                <Typography variant='p' component='li'>
                    <Typography component='span' sx={{bgcolor:'black', color:'white', padding:'4px'}}>
                        2 NEWSLETTERS MENSUALES 
                    </Typography> 
                    con material exclusivo para acompañar la escucha y profundizar sobre diferentes aspectos de lengua y cultura italiana.
                </Typography>
                <Typography variant='p' component='li'>
                    Acceso al 
                    <Typography component='span' sx={{bgcolor:'black', color:'white', padding:'4px'}}>
                        CANAL DE DISCORD 
                    </Typography>
                    con actividades y salas de voz y de texto para encontrarte con otros miembros cuando quieras.
                </Typography>
                <Typography variant='p' component='li'>
                    Participacion a un 
                    <Typography component='span' sx={{bgcolor:'black', color:'white', padding:'4px'}}>
                        LABORATORIO
                    </Typography>
                    mensual de
                    <Typography component='span' sx={{bgcolor:'black', color:'white', padding:'4px'}}>
                        FONETICA ITALIANA
                    </Typography>
                    para mejorar tu pronunciacion.</Typography>
                <Typography variant='p' component='li'>
                    <Typography component='span' sx={{bgcolor:'black', color:'white', padding:'4px'}}>
                        1 ENCUENTRO MENSUAL
                    </Typography>
                    por zoom para cerrar el mes y practicar juntos
                </Typography>
                <Typography variant='p' component='li'>
                    Acceso a un 
                    <Typography component='span' sx={{bgcolor:'black', color:'white', padding:'4px'}}>
                        GRUPO PRIVADO
                    </Typography>
                    de Telegram.</Typography>
                <Typography variant='p' component='li'>
                    Huespedes y eventos exclusivos y 
                    <Typography component='span' sx={{bgcolor:'black', color:'white', padding:'4px'}}>
                        MUCHAS, ¡MUCHAS SORPRESAS!
                    </Typography>
                </Typography>
            </Box>
            <Typography gutterBottom>
                El precio de la subscripcion es de AR${`${precioClub.precio}`}/mes o €{precioClub.precioEuros}/mes.
            </Typography>
            <Button color='primary' variant='contained' sx={{mb:'40px', mt:'20px'}} onClick={()=> handleSubscribe()}>Ahora si, lo quiero</Button>
            <OldClubs />
        </Container>
    )
}

export default Club