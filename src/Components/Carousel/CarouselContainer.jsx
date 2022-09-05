import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import Carousel from './Carousel';
import { capitalize } from '@mui/material';

export default function CarouselContainer() {

    const [cursosFiltrados, setCursosFiltrados] = useState([]);
    const [elementos, setElementos] = React.useState([]);

    const [width, setWidth] = useState(window.innerWidth);
    const [show, setShow] = useState(0);

    function reportWindowSize() {
        setWidth(window.innerWidth);
    }

    window.onresize = reportWindowSize;

    useEffect(() =>{
        if (width < 560) {
            setShow(1);
        // } else if (width < 768){
        //     setShow(2);
        // } else if (width < 1200){
        //     setShow(3);
        } else {
            setShow(2);
        }
    },[width]);

    useEffect (() => {
        const db = getFirestore();
        const elementsCollection = collection(db, 'elementos');
        getDocs(elementsCollection)
        .then((res) =>{
            if (res.size === 0) {
                console.log('No Results')
            } else {
                setElementos(res.docs.map(doc => ({id: doc.id, ...doc.data()})));
            }
        })
        .catch((err) => console.log(err))
    },[])

    useEffect(() => {
        setCursosFiltrados(elementos.filter(e => e.visible === true));
    },[elementos])

    return(
        <>
            <Box>
                {/* <Typography variant='h3' color='primary' 
                    sx={{
                        padding:'15px 0', 
                        textAlign:'center', 
                    }}>
                    {capitalize(trayecto.id)}
                </Typography>
                <Typography variant='body1' sx={{mb:'20px', textAlign:'center'}}>
                    {trayecto.descripcion}
                </Typography> */}
                <Carousel productos={cursosFiltrados} show={show} />
            </Box>
        </>
    )
}
