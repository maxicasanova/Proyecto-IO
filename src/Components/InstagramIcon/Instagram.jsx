import { Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';
import { useHover } from 'react-haiku';

function WhatsApp() {

    const { hovered, ref } = useHover();

    return (
        <Box component = 'a' href='https://www.instagram.com/italianooggi/' target="_blank" ref={ref}
            sx={{
                background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                minWidth: {xs: '50px', md:'70px'},
                minHeight: {xs: '50px', md:'70px'},
                position:'fixed', 
                bottom:{xs:'40px',md:'120px'},
                left:{xs:'5%',md:'30px'},
                borderRadius: '100%',
                display:'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex : '100',
                border: '1px solid',
                boxShadow: '1px 1px black',
                '&:hover': {transform: 'scale(1.05)'}
            }}>
            <InstagramIcon  
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
                    Seguinos en Instagram
                </Box>}
        </Box>
    )
}

export default WhatsApp