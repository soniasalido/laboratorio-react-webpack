import { useState } from 'react';
import { AddCategory } from './AddCategory.jsx';
import { GifGrid } from './GifGrid.jsx';
import React from 'react';

export const RickMortyPage = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {
        //Verificamos que la categoría no exista. Si existe no la añadimos.
        //Al verificar que no existe, usamos este nombre como key
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }


    return (
        <>

            <h1>Rick & Morty!!!!</h1>

            {/* El padre llama al componente AddCategory mandándole una propiedad onNewCategory*/}
            <AddCategory
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {/*{*/}
            {/*    categories.map( ( category ) => (*/}
            {/*        <GifGrid*/}
            {/*            key={ category }*/}
            {/*            category={ category } />*/}
            {/*    ))*/}
            {/*}*/}


        </>
    )
}
