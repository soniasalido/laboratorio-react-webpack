import React from 'react';
import { AppRouter } from "./core/router/AppRouter.jsx";
import {AuthProvider} from "./core/auth";
import {AppTheme} from "./theme/";


export const App = () => {
    return(
        <>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </>
    )
}