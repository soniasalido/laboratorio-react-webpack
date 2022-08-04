import React from 'react';
import { MembersLayout} from "../layouts/MembersLayout.jsx";
import {MembersList} from "../pods/members/membersList";
import { useForm } from '../core/customHooks/useForm.jsx';
import { useNavigate, useLocation } from "react-router-dom";
// Para facilitar el manejo de los query parameters, usamos una librería llamada query-string.
// La instalamos con npm install query-string. Una vez instalado, lo importamos
import queryString from 'query-string';

export const SearchPage = () => {

    // Usamos el custom Hook useNavigate obtener navegación
    const navigate = useNavigate();
    // Usamos el custom Hook useLocation obtener información de la ubicación o localización de donde nos encontramos
    const location = useLocation();
    // Obtenemos los query parameters de la url, que cambiarán cada vez que se busque una organización
    const { q = '' } = queryString.parse( location.search );



    // Usamos el custom Hook useForm para crear un formulario.
    // Asignamos searchOrganization con el valor del query parameter (q), así, si cambiamos el query parameter desde la url,
    // se actualiza el valor de placeholder del input de búsqueda.
    const { searchOrganization, onInputChange } = useForm({
        searchOrganization: q,
    });


    const onSearchSubmit = (e) => {
        e.preventDefault();
        // Acepta el submit cuando tiene más de 1 carácter
        if (searchOrganization.trim().length <=1 )return;

        // Usamos el hook useNavigate para crear un query parameters
        navigate(`?q=${ searchOrganization.toLowerCase() }`);

    }

    return (
        <>
            <MembersLayout title="Members">
                <div className="container mt-5">
                    <h1>Search Page</h1>

                    <div className="row">
                        <div className="col-5">
                            <h4>Buscar</h4>
                            <form onSubmit={ onSearchSubmit }>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="lemoncode"
                                    name="searchOrganization"
                                    autoComplete="off"
                                    value={searchOrganization}
                                    onChange={onInputChange}
                                />

                                <button className="btn btn-warning mt-1">Buscar</button>
                            </form>
                        </div>
                    </div>

                    <hr />

                    <div className="row">
                        <div className="col-7">
                            <h4>Resultados</h4>
                        </div>

                        <MembersList organization={ q } />
                    </div>


                </div>
            </MembersLayout>
        </>
    )
}