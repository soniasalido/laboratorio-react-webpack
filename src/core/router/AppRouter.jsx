import { Route, Routes } from 'react-router-dom';

import React from 'react';
import { HomePage } from '../../scenes/homePage.jsx';
import { LoginPage } from '../../pods/login/loginPage';
import {AboutPage} from "../../scenes/aboutPage.jsx";
import {PrivateRoutes} from "./PrivateRoutes.jsx";
import { PrivateRouter} from "./PrivateRouter.jsx";
import { PublicRouter} from "./PublicRouter.jsx";


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="home" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />


                {/* Wrapeamos con PublicRouter para que solo se pueda acceder a la página de login si NO está autenticado  */}
                <Route path="login" element={
                    <PublicRouter>
                        <LoginPage />
                    </PublicRouter>
                } />


                {/* Wrapeamos con PrivateRouter para que solo se pueda acceder a las páginas privadas si está autenticado  */}
                <Route path="/*" element={
                    <PrivateRouter>
                        <PrivateRoutes />
                    </PrivateRouter>
                } />

            </Routes>
        </>
    )
}