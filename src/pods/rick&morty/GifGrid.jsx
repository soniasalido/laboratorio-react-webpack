import { GifItem } from './GifItem';
import { useFetchRicks } from './useFetcRicks.jsx';
import React from 'react';

// COMPONENTE QUE MUESTRA UNA LISTA DE GIFS, PINTA EL CARD-GRID PARA QUE SE INSERTEN LOS GIFS
// USA EL HOOK useFetchGifs PARA OBTENER LOS GIFS
// LLAMA AL COMPONENTE GifItem PARA QUE PINTAR CADA ITEM


//Usamos el operador spread para espacir las properties. En la propiedad image viene el título
//y la url. En vez de poner title={ image.title } y url={ image.url }, podemos ponerlo como aparece abajo.
//Enviamos a hijo GitItem las propiedades que tiene image.

export const GifGrid = ({ category }) => {

    const { data, isLoading } = useFetchRicks( category );
    console.log("xxx", data);

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className="card-grid">

            </div>

        </>
    )
}
