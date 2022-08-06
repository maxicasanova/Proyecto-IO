import { Box, Container, Typography } from '@mui/material';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import React from 'react';
import ResourceItem from './ResourceItem';
import { amber } from '@mui/material/colors';

function Resources() {

    const[recursos, setRecursos] = React.useState([]);

    React.useEffect (() => {
        console.log('recursos')
        const db = getFirestore();
        const resourcesCollection = collection(db, 'recursos');
        getDocs(resourcesCollection)
        .then((res) => {
            if (res.size === 0) {
                console.log('No Results')
            } else {
                setRecursos(res.docs.map(doc => ({id: doc.id, ...doc.data()})));
            }
        })
        .catch((err) => console.log(err))
    },[])


    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap:'wrap',
            flexDirection:'column',
            gap: '20px',
            mb: '20px'
        }}>
            <Typography
                variant="h2"
                sx={{
                    margin: '10px',
                    display: { xs: 'flex'},
                    justifyContent: 'center',
                    fontWeight: 700,
                    textDecoration: 'none',
                    bgcolor:amber[500],
                    padding:'20px',
                    boxShadow:'0px 1px 8px rgba(0,0,0,0.4)'
                }} >
                Recursos
            </Typography>
            <Typography variant='h5' textAlign='center'>
                A continuacion les compartimos una serie de recursos gratuitos para aprender Italiano!
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection : 'column',
                flexWrap: 'nowrap',
                gap: '10px',
            }}>
                {recursos.map((r => (
                    <ResourceItem key ={r.id} elemento={r}/>
                )))}
            </Box>
        </Container>
    )
}

export default Resources