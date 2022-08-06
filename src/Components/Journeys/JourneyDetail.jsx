import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import CarouselContainer from '../Carousel/CarouselContainer';
import { red } from '@mui/material/colors';
import { useLocation, useNavigate } from 'react-router-dom';
import { OrderContext } from '../Context/OrderContextProvider';

function JourneyDetail({trayecto}) {

    const navigate = useNavigate();
    let location = useLocation();

    const { addOrder } = React.useContext(OrderContext);
    const { getOrder } = React.useContext(OrderContext);

    const handleInfoClick = () => {
        navigate(`/journeys/${trayecto.id}`);
    }

    const handleOrderClick = () => {
        addOrder(getOrder(trayecto, location));
        navigate('/checkout');
    }

    return (
        <Container
            sx={{
                minHeight : '90vh',
                display: 'flex',
                flexDirection : 'column',
                flexWrap: 'nowrap',
                justifyContent: 'center',
                alignItems : 'center',
                gap: '20px',
            }}>
            <Container 
                sx={{
                    mb: 10,
                    display:'flex',
                    flexDirection:'column',
                    gap:'20px',
                    borderRadius: '3px',
                    width:{xs:'100%', sm:'80%'},
                    bgcolor:'white',
                    boxShadow:'0px 1px 8px rgba(0,0,0,0.4)'
                }}>
                <CarouselContainer trayecto = {trayecto} />
                <Box 
                    sx={{
                        display:'flex',
                        alignSelf:'flex-end',
                        alignItems:'baseline',
                        gap:'10px',
                        mb: '10px'
                    }}>
                    <Typography>
                        {trayecto.precio}
                    </Typography>
                    <Button variant='contained' onClick={ () => {handleInfoClick()}} >
                        Info
                    </Button>
                    <Button variant='contained' color='success' onClick={ () => {handleOrderClick()}}>
                        Solicitar
                    </Button>
                </Box>
            </Container>
        </Container>
    )
}

export default JourneyDetail