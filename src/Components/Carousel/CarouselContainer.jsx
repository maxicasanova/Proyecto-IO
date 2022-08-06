import React, { useEffect, useState, useContext } from 'react';
import Carousel from './Carousel';
import { Box, Typography } from '@mui/material';
import { capitalize } from '@mui/material';
import { FirebaseContext } from '../Context/FirebaseContextProvider';

export default function CarouselContainer({trayecto}) {

    const { elementos } = useContext(FirebaseContext);
    const [productos , setProductos] = useState([]);
    console.log(elementos)
    const [width, setWidth] = useState(window.innerWidth);
    const [show, setShow] = useState(0);

    function reportWindowSize() {
        setWidth(window.innerWidth);
    }

    window.onresize = reportWindowSize;

    useEffect(() =>{
        if (width < 560) {
            setShow(1);
        } else if (width < 768){
            setShow(2);
        } else if (width < 1200){
            setShow(3);
        } else {
            setShow(4);
        }
    },[width]);

    useEffect(() => {
        setProductos(elementos.filter(e => trayecto.cursos.includes(e.buscador)));
        console.log(productos)
    },[trayecto, elementos])

    return(
        <>
            <Box>
                <Typography variant='h3' color='primary' 
                    sx={{
                        padding:'15px 0', 
                        textAlign:'center', 
                    }}>
                    {capitalize(trayecto.id)}
                </Typography>
                <Typography variant='body1' sx={{mb:'20px', textAlign:'center'}}>
                    {trayecto.descripcion}
                </Typography>
                <Carousel productos={productos} show={show} />
            </Box>
        </>
    )
}
