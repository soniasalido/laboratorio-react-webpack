
import React from 'react';
import {NavBar} from "../layouts/navBar";
import {AppLayout} from "../layouts/AppLayout.jsx";
import {Typography} from "@mui/material";
import {MailOutline} from "@mui/icons-material";

export const AboutPage = () => {
    return (
        <>
            <NavBar />
            <AppLayout title="About">
                <Typography variant="h1">About</Typography>
            </AppLayout>
        </>

    )
}