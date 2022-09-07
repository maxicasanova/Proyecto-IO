import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import { Box } from '@mui/material';
import Carousel from './Carousel';
import CarouselResponsive from './CarouselResponsive';
import { useMediaQuery } from 'react-responsive';

export default function CarouselContainer() {

    const [cursosFiltrados, setCursosFiltrados] = useState([]);
    const [elementos, setElementos] = React.useState([]);

    const isMobile = useMediaQuery({ query: '(max-width: 560px)' })

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
        setCursosFiltrados(elementos.filter(e => e.visible === true).sort(function (a, b) {
            if (a.orden > b.orden) {
                return 1;
            }
            if (a.orden < b.orden) {
                return -1;
            }})
        )
    },[elementos])

    return(
        <>
            <Box sx={{width:'100%'}}>
                { isMobile 
                    ? 
                    <CarouselResponsive productos={cursosFiltrados} />
                    :
                    <Carousel productos={cursosFiltrados} />
                }
            </Box>
        </>
    )
}
