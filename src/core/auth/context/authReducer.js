import { types } from "../types/types.js";
import React from 'react';



//En caso de que el tipo sea login, lo que hace es que devuelve el estado + otro par, clave, valor:
// clave: user, valor: action.payload.
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                user: action.payload,
                logged: true,
            }
        case types.logout:
            return {
                ...state,
                user: null,
                logged: false,
            }
        default:
            return state
    }
}