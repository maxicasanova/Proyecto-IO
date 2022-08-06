import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import Item from './Item';
import { red } from '@mui/material/colors';

function Sale() {
    const [prodOf, setProdOf] = useState({});
    const [elementos, setElementos] = useState([]);

    useEffect(() => {
        console.log('render')
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
        setProdOf(elementos.find(e => e.destacado === true))
    },[elementos])
    
    return (
        <Box sx={{
                backgroundColor : red[500],
                boxShadow:'0px 1px 8px rgba(0,0,0,0.4)',
                minHeight : {xs:'90vh',sm:'105vh'},
                display: 'flex',
                flexDirection : 'column',
                flexWrap: 'nowrap',
                justifyContent: 'center',
                alignItems : 'center',
                gap:'30px'
            }}>
            <Typography
                variant="h2"
                sx={{
                    textAlign: 'center',
                    fontSize: { xs: '35px', md: '70px' },
                    mt:{xs:'20px', sm:'0'},
                    fontWeight: 700,
                    color: 'white',
                }} >
                El mejor para empezar
            </Typography>
            <Item elemento = {prodOf} />
        </Box>
    )
}

export default Sale