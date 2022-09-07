import { Container } from '@mui/material'
import Item from './Item'
import React from 'react'

function CarouselResponsive({productos}) {
    return (
        <Container sx={{
            overflow:'scroll',
            overflowY: 'hidden',
            width:'80%',
            display:'flex',
            flexDiection:'row',
            flexWrap:'no-wrap',
            gap:'20px'
        }}>
            {productos.map(e => (
                <Item key={e.id} elemento={e} />
            ))}
        </Container>
    )
}

export default CarouselResponsive