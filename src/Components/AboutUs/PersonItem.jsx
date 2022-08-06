import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';

function PersonItem({persona}) {
    return (
        <Box 
        sx ={{
            display: 'flex',
            flexDirection:{xs:'column', sm:'row'},
            flexWrap:'no-wrap',
            justifyContent:'center', 
            alignItems:'center', 
            gap:'10px', 
        }}>
            <Box component='img' src={persona.imagen} alt={persona.nombre} 
                sx ={{
                    maxHeight:'300px', 
                    maxWidth:'400px',
                    width:{xs:'300px', sm:'300px'},
                    objectFit:'cover',
                    borderRadius:'5px',
                    boxShadow:'0px 1px 8px rgba(0,0,0,0.4)'
            }}/>
            <Box sx={{
                position: 'relative',
                right:{sm:'50px'},
                padding:'15px',
                display:'flex',
                flexDirection:'column',
                gap: '10px',
                bgcolor:'white',
                borderRadius:'5px',
                boxShadow:'0px 1px 8px rgba(0,0,0,0.4)'
            }}>
                <Typography gutterBottom variant="h5" component="p">
                    {persona.nombre}
                </Typography>
                <Box sx ={{width:{xs:'280px', sm:'500px', whiteSpace:'pre-line'}}}>
                    {persona.descripcion}
                </Box>
            </Box>
        </Box>
    )
}

export default PersonItem;