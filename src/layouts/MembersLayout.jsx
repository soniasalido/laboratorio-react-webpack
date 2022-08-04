import { Grid } from '@mui/material';
import React from 'react';


export const MembersLayout = ({ children }) => {
    return (
        <Grid
            container
            spacing={2}
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >

            { children }
        </Grid>

    )
}