import { Box, Typography } from '@mui/material'

import JourneyDetail from './JourneyDetail';
import React from 'react';
import { amber } from '@mui/material/colors';

// import { trayectos } from '../../utils/elementos';



function JourneyContainer() {
    return (
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'space-evenly',
            bgcolor:amber[300],
            boxShadow:'0px 1px 8px rgba(0,0,0,0.4)'
        }}>
            <Box 
                sx={{
                    bgcolor:amber[300],
                    width:'98.5vw', 
                    minHeight:'40vh',
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'space-evenly'
                }}>
                <Typography component='h2'
                    sx={{
                        textAlign: 'center',
                        fontSize: { xs: '30px', md: '70px' },
                        fontWeight: 700,
                    }}>
                    Trayectos
                </Typography>
                <Typography>
                    Alguna descripcion sobre que son los trayectos o porque se los propone ?.
                </Typography>
            </Box>
            {/* {trayectos.map((t) => (
                <JourneyDetail key= {t.id} trayecto = {t} />
            ))} */}
        </Box>
    )
}

export default JourneyContainer