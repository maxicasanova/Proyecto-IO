import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { green, red } from '@mui/material/colors';

const newTheme = createTheme({
    palette: {
        primary: red,
        secondary: green
    },
    typography: {
        fontFamily: 'Lato'
    }

});

function Theme({children}) {
    return (
        <ThemeProvider theme={newTheme}>
            {children}
        </ThemeProvider>
    )
};

export default Theme;