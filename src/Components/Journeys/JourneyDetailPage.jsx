import React, {useState, useEffect, useContext} from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {Container, Typography, Box, capitalize, Button} from '@mui/material'
import JourneyItem from './JourneyItem';
import { OrderContext } from '../Context/OrderContextProvider';
import { FirebaseContext } from '../Context/FirebaseContextProvider';
import { amber} from '@mui/material/colors';

function JourneyDetailPage() {

    const { journeyId }  = useParams();
    const { trayectos } = useContext(FirebaseContext);
    const { elementos } = useContext(FirebaseContext);

    const [productos , setProductos] = useState([]);
    const [trayecto , setTrayecto] = useState({id:''});

    const navigate = useNavigate();
    let location = useLocation();

    const { addOrder } = React.useContext(OrderContext);
    const { getOrder } = React.useContext(OrderContext);

    const handleOrderClick = () => {
        addOrder(getOrder(trayecto, location));
        navigate('/checkout');
    }

    useEffect(() => {
        let journey = trayectos.find(t => t.id === (journeyId.replace('%',' ')));
        setTrayecto(journey);
        console.log(trayecto, journey)
        setProductos(elementos.filter(e => journey.cursos.includes(e.buscador)));
        console.log(productos)
    },[journeyId])

    return (
        <Container 
            sx ={{
                mb:'10px', 
                mt:'10px', 
                display:'flex', 
                flexDirection:'column', 
                alignItems:'center'
            }} >
            <Typography gutterBottom variant ='h3' 
                sx={{
                    mt:'20px',
                    bgcolor:amber[500],
                    padding:'10px',
                    boxShadow:'0px 1px 8px rgba(0,0,0,0.4)'
                }}>
                {capitalize(trayecto.id)}
            </Typography>
            <Typography gutterBottom variant='body1' sx={{maxWidth:'800px'}}>
                {trayecto.descripcion}
            </Typography>
            <Typography gutterBottom variant='h4'>
                Este trayecto incluye:
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection : 'column',
                flexWrap: 'nowrap',
                gap: '10px',
            }}>
                {productos.map((p => (
                    <JourneyItem key ={p.id} elemento={p}/>
                )))}
            </Box>
            <Button variant='contained' color='secondary' onClick={ () => {handleOrderClick()}}>
                Solicitar
            </Button>
        </Container>
    )
}

export default JourneyDetailPage