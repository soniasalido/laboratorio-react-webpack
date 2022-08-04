import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import React from 'react';

import { AuthContext } from "../../core/auth/index.js";



// PublicRoutes es un componente que se encarga de manejar el acceso a las páginas públicas.
// Lo necesitamos para que cuando un usuario esté autenticado, no pueda acceder a la página de login
export const PublicRouter = ({ children }) => {

    // Usamos useContext para saber si el usuario está autenticado.
    const { logged } = useContext( AuthContext );

    // Si el usuario no está autenticado, se retorna children.
    // Si el usuario está autenticado, se le obliga a ir a la página de members.
    return (!logged)
        ? children
        : <Navigate to="/members" />
}