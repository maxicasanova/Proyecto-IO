import { Container, Typography } from '@mui/material';

import Item from './Item';
import React from 'react';
import { amber } from '@mui/material/colors';

function ItemList({elementos}) {

    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap:'wrap',
            flexDirection:'column',
            gap: '20px'
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
                    boxShadow:'0px 1px 8px rgba(0,0,0,0.4)',
                    fontSize:{xs:'35px', sm:'48px'}
                }} >
                Todos los cursos
            </Typography>
            <Typography variant="body1" gutterBottom>
                Los cursos se encuentran ordenados por nivel, se incluyen sincronicos y asincronicos.
            </Typography>
            <Container 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap:'wrap',
                    gap: '20px',
                    mb:'30px'
                }}>
                {elementos.map((e, index) => (
                <Item key={index} elemento={e}/>
                ))}
            </Container>
        </Container>
    )
}

export default ItemList