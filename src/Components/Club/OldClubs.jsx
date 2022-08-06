import { Box, Button, Typography } from '@mui/material';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import {useLocation, useNavigate} from 'react-router-dom';

import { OrderContext } from '../Context/OrderContextProvider';
import React from 'react';
import { amber } from '@mui/material/colors';

function OldClubs() {

    const[precioClub, setPrecioClub] = React.useState({});

    const { addOrder } = React.useContext(OrderContext);
    const { getOrder } = React.useContext(OrderContext);

    const ubicacion = useLocation().pathname;
    const navigate = useNavigate();

    const handleSubscribe = () => {
        const elemento = {nombre:'PROMO 2x1 ITALIANO OGGI CLUB - JUNIO/JULIO', precio:precioClub.precio, precioEuros:precioClub.precioEuros}
        addOrder(getOrder(elemento, ubicacion));
        navigate('/mailform');
    }

    React.useEffect(() => {

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
        <Box 
            sx ={{
                display:'flex', 
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'space-evenly'
        }}>
            <Box 
                sx={{
                    bgcolor:amber[500], 
                    minHeight:'20vh', 
                    display:'flex', 
                    alignItems:'center', 
                    justifyContent:'center', 
                    boxShadow:'0px 1px 8px rgba(0,0,0,0.4)'
            }}>
                <Typography 
                    component='p' 
                    variant='h5' 
                    sx={{textAlign:'center', fontWeight:'600', padding:'10px'}}>
                        No olvides que puedes solicitar el acceso al material de los clubes anteriores!
                </Typography>
            </Box>
            <Box component='ul' 
                sx={{
                    display:'flex', 
                    flexDirection:'column',
                    alignItems:'center',
                    gap:'16px',
                    listStyleType: 'none',
                    fontWeight: '500',
                    padding:'0px!important',
                    maxWidth:'70vw',
                    mb:'20px',
                    mt:'20px',
                    textAlign:'center'
                }}>
                <Typography variant='p' component='li'>
                SI TE PERDISTE LAS EDICIONES DE JUNIO Y JULIO DEL CLUB, ¡podés acceder a ellas en versión on demand!
                </Typography>
                <Typography variant='p' component='li'>
                ¡Vas a recibir todo el material (las newsletters, los encuentros del taller de fonética con todas las actividades para mejorar tu pronunciación, los encuentros finales grabados) por solo AR${precioClub.precio} (pesos argentinos) o €{precioClub.precioEuros} (euros)! 
                </Typography>
                <Typography variant='p' component='li'>
                ¡APROVECHÁ ESTA PROMO AQUÍ!
                </Typography>
                <Typography variant='p' component='li'>
                ¡El Club comienza nuevamente en SEPTIEMBRE! Si querés ser miembro/a del super IO CLUB llená haz click en los botones de arriba!
                </Typography>
                <Button color='success' variant='contained' sx={{mb:'40px', mt:'20px'}} onClick={()=> handleSubscribe()}>
                    Solicitar
                </Button>
            </Box>
        </Box>
    )
}

export default OldClubs