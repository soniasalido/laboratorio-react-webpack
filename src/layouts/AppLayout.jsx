import { Grid } from '@mui/material';
import React from 'react';


export const AppLayout = ({ children }) => {
    return (
       <Grid
            container
            spacing={2}
            sx={{ minHeight: '100vh', backgroundColor: 'secondary.main', padding: 4 }}
        >

           { children }
        </Grid>
    )
}