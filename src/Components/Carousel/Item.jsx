import * as React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { OrderContext } from '../Context/OrderContextProvider';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';

export default function Item({elemento}) {

  const navigate = useNavigate();

  const { addOrder } = React.useContext(OrderContext);
  const { getOrder } = React.useContext(OrderContext);

  let location = useLocation();

  const handleClickOrder = (elemento) => {
    addOrder(getOrder(elemento, location));
    navigate('/checkout');
  }

  const handleClickInfo = (id) => {
    navigate(`/courses/${id}`);
  }

  return (
    <Card sx={{ maxWidth: 300, borderRadius:'20px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="100"
        image={elemento.imagen}
      />
      <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-around', height:'75%'}}>
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
            {elemento.nombre}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
            {elemento.fecha}
        </Typography>
        <Typography
            variant="body2" 
            color="text.secondary" 
            textAlign='justify'>
            {elemento.descripcion}
        </Typography>
      </CardContent>
      <CardActions sx={{
        display:'flex',
        justifyContent: 'center'
      }}>
        <Button variant='text' size="small" onClick={() => handleClickInfo(elemento.id)}>Info</Button>
        <Button variant='text' size="small" color='success' onClick={() => handleClickOrder(elemento)}>¡INSCRIBITE AHORA!</Button>
      </CardActions>
      </Box>
    </Card>
  );
}
