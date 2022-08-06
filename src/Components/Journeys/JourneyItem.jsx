import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function JourneyItem({elemento}) {
    return (
        <Box 
            sx ={{
                display: 'flex',
                justifyContent:'center', 
                alignItems:'center', 
                gap:'10px', 
                flexWrap: 'wrap'
            }}>
            <Box component='img' src="https://picsum.photos/300" 
                sx ={{height:'25vh', borderRadius:'5px',boxShadow:'0px 1px 8px rgba(0,0,0,0.4)'
            }}/>
            <Box sx={{
                position: 'relative',
                right:'50px',
                padding:'15px',
                display:'flex',
                gap: '10px',
                bgcolor:'white',
                borderRadius:'5px',
                boxShadow:'0px 1px 8px rgba(0,0,0,0.4)'
            }}>
                <Box sx={{display:'flex', flexDirection:'column', minWidth:'125px'}}>
                    <Typography gutterBottom variant="h5" component="p">
                    {elemento.nombre}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {elemento.fecha}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="span">
                        ${elemento.precio}
                    </Typography>
                </Box>
                <Box sx ={{width:'300px'}}>
                    {elemento.descripcion}
                </Box>
            </Box>
        </Box>
    )
}

export default JourneyItem