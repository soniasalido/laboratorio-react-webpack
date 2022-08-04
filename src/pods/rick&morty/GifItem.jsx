import React from 'react';

// ESTE COMPONENTE PINTA UN ITEM DE LA LISTA DE GIFS.
// ESTE COMPONETE RECIBE DE SU PADRE UNAS PROPIEDADES, IMAGE ES UNA PROPIEDAD QUE CONTIENE UN OBJETO CON LOS DATOS DEL GIF
// DEESTRUCTURAMOS EL OBJETO IMAGE (title, url y id) Y LO PASAMOS A LOS PROPIEDADES DEL COMPONENTE
export const GifItem = ({ slug, url, id }) => {

    return (
        <div className="card">
            <img src={ url } alt={ slug } />
            <p>{ id }</p>
        </div>
    )
}
