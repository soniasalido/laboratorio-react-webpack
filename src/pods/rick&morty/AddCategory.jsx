import { useState } from 'react';
import React from 'react';

// De las props que recibe el componente AddCategory desestruramos onNewCategory
export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        //Para evitar que podamos meter una categoría vacía --> Tiene que al menos tener una letra para aceptar la categoría
        if( inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories ]);

        //Ponemos el inputValue en blanco para que se pueda volver a escribir
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar ricks"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
