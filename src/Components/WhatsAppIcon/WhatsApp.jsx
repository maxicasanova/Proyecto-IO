import { Box } from '@mui/material';
import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { green } from '@mui/material/colors';
import { useHover } from 'react-haiku';

function WhatsApp() {

    const { hovered, ref } = useHover();

    return (
        <Box component = 'a' href='https://wa.link/ehsx12' target="_blank" ref={ref}
            sx={{
                bgcolor: green[700],
                minWidth: {xs: '50px', md:'70px'},
                minHeight: {xs: '50px', md:'70px'},
                position:'fixed', 
                bottom:{xs:'40px',md:'30px'},
                left:{xs:'85%',md:'30px'},
                borderRadius: '100%',
                display:'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex : '1000',
                border: '1px solid black',
                boxShadow: '1px 1px black',
                '&:hover': {transform: 'scale(1.05)'}
            }}>
            <WhatsAppIcon  
                sx={{  
                    color:'white',
                    fontSize: {xs: '40px', md:'60px'}, 
                    }} />
            {hovered && 
                <Box component='p' 
                    sx={{
                        position:'fixed',
                        bottom:{xs:'5px',md:'30px'},
                        left:{xs:'5px',md:'30px'},
                        zIndex:'1005',
                        bgcolor: 'rgba(0,0,0,0.9)',
                        borderRadius: '5px',
                        color:'antiquewhite',
                        padding:'10px'
                    }}>
                    Escribinos en WhatsApp
                </Box>}
        </Box>
    )
}

export default WhatsApp