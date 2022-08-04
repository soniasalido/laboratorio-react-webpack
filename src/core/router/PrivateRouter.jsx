import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import React from 'react';
import { AuthContext } from "../../core/auth/index.js";



// PrivateRoutes es un componente que se encarga de manejar el acceso a las páginas privadas.
// Recibe children, lo que significa que es un Higher Order Component.
export const PrivateRouter = ({ children }) => {

    // Usamos useContext para saber si el usuario está autenticado.
    const { logged } = useContext( AuthContext );

    // Si el usuario no está autenticado, lo redirigimos a la página de login.
    // Si el usuario está autenticado, se retorna children.
    return (logged)
        ? children
        : <Navigate to="/login" />
}