import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import React from 'react';

import { types } from '../types/types';

// const initialState = {
//     logged: false,
// }

const init = () => {
    // Si user es null, entonces no está logueado. Cualquier otra cosa, está logueado.
    const user = JSON.parse( localStorage.getItem('user') );

    return {
        logged: !!user,
        user: user,
    }
}


export const AuthProvider = ({ children }) => {

    // La funcion useReducer tiene 3 parámetros:
    //  1. El reducer.
    //  2. El estado inicial.
    //  3. Una función de iniciación: Una función que se ejecuta cuando se inicia el componente. Es la función que inicializa el estado
    const [ authState, dispatch ] = useReducer( authReducer, {}, init );

    const login = ( name = '' ) => {

        const user = { id: 'ABC', name }
        const action = { type: types.login, payload: user }

        localStorage.setItem('user', JSON.stringify( user ) );

        dispatch(action);
    }



    const logout = () => {
        localStorage.removeItem('user');
        const action = { type: types.logout };
        dispatch(action);
    }


    return (
        <AuthContext.Provider value={{
            ...authState,

            // Methods
            login,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    );
}