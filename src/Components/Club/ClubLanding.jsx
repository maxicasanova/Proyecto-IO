import { Box, Button, Typography } from '@mui/material';
import {amber, red} from '@mui/material/colors';
import { useLocation, useNavigate } from 'react-router-dom';

import { OrderContext } from '../Context/OrderContextProvider';
import React from 'react';

function ClubLanding() {

    const { addOrder } = React.useContext(OrderContext);
    const { getOrder } = React.useContext(OrderContext);

    const ubicacion = useLocation().pathname;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/club');
    }

    const handleSubscribe = () => {
        const elemento = {nombre:'Club'}
        addOrder(getOrder(elemento, ubicacion));
        navigate('/mailform');
    }

    return (
        <Box 
            sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center',
                // gap:'20px',
                minHeight:'90vh',
                margin:{xs:'10px',sm:'0'}
            }}>
            {ubicacion === '/' && <Typography sx={{
                fontSize: { xs: '35px', md: '70px' },
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                padding:{xs:'20px',sm:'40px'},
                fontFamily: 'Oleo Script'
            }}>
                Si te apasiona el italiano...
            </Typography> }
            <Box sx ={{
                display:'flex', 
                flexDirection:{xs:'column',md:'row'},
                flexWrap:'wrap',
                alignItems:'center',
                justifyContent:'space-evenly',
                gap:{xs:'20px', sm:'60px'}
            }}>
                <Typography variant='body1' component='p' 
                    sx={{
                        width:'300px', 
                        textAlign:'center', 
                        fontSize:{xs:'16px',sm:'22px'},
                        textAlign:'justify',
                    }}>
                        Pensado para estudiantes de italiano de nivel intermedio-avanzado que quieran aprender sobre lengua, historia y cultura italiana. 
                </Typography>
                <Box 
                    sx={{
                        height:{sm:'50vh'},
                        display:'flex', 
                        flexDirection:'column',
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                    <Typography variant='h2' gutterBottom
                        sx={{
                            fontWeight:'900', 
                            maxWidth:{xs:'200px',sm:'300px'}, 
                            textAlign:'center',
                            fontSize:{xs:'35px',sm:'60px'}
                        }}>
                            ITALIANO OGGI
                    </Typography>
                    <Typography variant='h2' gutterBottom
                        sx ={{
                            color:'white',
                            backgroundColor:red[500],
                            textShadow:'1px 2px 1px orange',
                            // fontStyle:'italic',
                            maxWidth:{xs:'100px',sm:'200px'},
                            fontWeight:'700',
                            fontFamily: 'Oleo Script',
                            boxShadow:'0px 1px 8px rgba(0,0,0,0.4)',
                            fontSize:{xs:'35px',sm:'60px'}
                        }}>
                        Club
                    </Typography>
                </Box>
                <Typography variant='body1' component='p' 
                    sx={{
                        width:'300px', 
                        textAlign:'center', 
                        fontSize:{xs:'16px',sm:'22px'},
                        textAlign:'justify'
                    }}>
                    Es un espacio de encuentro, de intercambio. Un lugar para conectarse con personas de todo el mundo que comparten una pasión, un deseo, las ganas de aprender. 
                </Typography>
            </Box>
            {ubicacion !== '/' &&
            <Typography variant='body1' component='p' 
                sx={{color:amber[700], fontSize:{xs:'16px',sm:'26px'}, mb:'15px', textAlign:'center'}}
            >
                Un microuniverso para apasionarse, discutir, aprender con otros.
            </Typography>}
            <Box 
                sx ={{
                    display:'flex', 
                    flexDirection:'row',
                    alignItems:'center',
                    gap:'10px',
                    mt:'10px'
                }}>
                {ubicacion === '/' && 
                    <Button color='primary' variant='contained' onClick={()=> handleClick()}>
                        Info
                    </Button>}
                <Button color='success' variant='contained' onClick={()=> handleSubscribe()}>Quiero ser parte</Button>
            </Box>
        </Box>
    )
}

export default ClubLanding