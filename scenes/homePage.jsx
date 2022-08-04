import React from 'react';
import {NavBar} from "../layouts/navBar";
import {Typography} from "@mui/material";
import {MailOutline} from "@mui/icons-material";
import {AppLayout} from "../layouts/AppLayout";


export const HomePage = () => {
    return (
        <>
            <NavBar />
            <AppLayout title="Home Page">
                <Typography variant="h1">Home</Typography>
                <MailOutline />
            </AppLayout>

        </>
    )
}