import * as React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { OrderContext } from '../Context/OrderContextProvider';
import Typography from '@mui/material/Typography';
import fondo from '../../images/fondo-asincronico.png';
import { green } from '@mui/material/colors';

export default function Item({elemento}) {

  const navigate = useNavigate();

  const { addOrder } = React.useContext(OrderContext);
  const { getOrder } = React.useContext(OrderContext);

  let location = useLocation();

  const handleClickOrder = (elemento) => {
    addOrder(getOrder(elemento, location));
    navigate('/mailform');
  }

  const handleClickInfo = (id) => {
    navigate(`/courses/${id}`);
  }

  return (
    elemento &&
    <Box sx ={{height: {sm:'400px'}, maxWidth:{xs:'280px',sm:'500px'}}}>
      <Box component = 'img' src={fondo}
        sx = {{
          display:{xs:'none', sm:'block'},
          height: {xs:'200px', sm:'300px'},
          maxWidth:{xs:'260px',sm:'460px'},
          objectFit:{xs:'cover'},
          borderRadius:'3px',
          boxShadow:'0px 1px 8px rgba(0,0,0,0.4)'
        }}/>
      <Box 
        sx={{
          backgroundColor:'white',
          backgroundSize:'cover',
          position:'relative', 
          top: {sm:'-210px'}, 
          right:{sm:'-100px'},
          borderRadius:'3px', 
          padding:{xs:'20px', sm:'20px'},
          minWidth:'260px',
          maxWidth:{xs:'260px',sm:'500px'},
          boxShadow:'0px 1px 8px rgba(0,0,0,0.4)',
          mb:'20px'
        }}>
        <Typography gutterBottom variant="h5" component="p">
            {elemento.nombre}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
            {elemento.fecha}
        </Typography>
        <Box sx={{display: 'flex', gap:'5px', justifyContent: 'flex-end', alignItems: 'baseline', margin:'10px'}}>
          {elemento.oferta && <Typography gutterBottom variant="body1" component="span">
              ${elemento.precioOferta}
          </Typography> }
          {elemento.oferta && 
            <Typography 
                gutterBottom 
                variant="body1" 
                component="span" 
                sx={{
                  backgroundColor: green[700], 
                  borderRadius : '3px',
                  padding:'2px'}}>
              {elemento.ahorro}
            </Typography> }
        </Box>
        <Typography
            variant="body2" 
            color="text.secondary" 
            textAlign='justify'>
            {elemento.descripLanding}
        </Typography>
        <Box sx={{display:'flex', flexDirection:'row', gap:'5px', justifyContent:'flex-end'}}>
          <Typography gutterBottom variant="body1" component="span">
              AR${elemento.precio}
          </Typography>
          <Typography gutterBottom variant="body1" component="span">
            o
          </Typography>
          <Typography gutterBottom variant="body1" component="span">
              €{elemento.precioEuros}
          </Typography>
        </Box>
        <Box sx={{display:'flex', justifyContent:'flex-end'}}>
          <Typography variant="body1" component="p">
              Podes pagar en 1, 2, 4 cuotas
          </Typography>
        </Box>
        <Box 
          sx={{
            display:'flex',
            justifyContent: 'center',
            marginTop: '20px',
            gap:'10px'
          }}>
        <Button variant='contained' size="small" onClick={() => handleClickInfo(elemento.id)}>
          Info
        </Button>
        <Button variant='contained' size="small" color='success' onClick={() => handleClickOrder(elemento)}>
          ¡INSCRIBITE AHORA!
        </Button>
      </Box>
      </Box>
    </Box>
  );
}
