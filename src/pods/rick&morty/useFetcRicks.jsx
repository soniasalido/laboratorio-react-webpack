import { useEffect, useState } from 'react';
import { GetRicks } from './GetRicks';
import React from 'react';

// ESTE CUSTOM HOOK ES PARA HACER UNA PETICIÓN HTTP A LA API DE GIPHY
// OBTENEMOS UN OBJETO QUE SE LLAMA IMAGES QUE CONTIENE title, url, id DE CADA UNO DE LOS GIFS DE UNA CATEGORÍA Y
// UNA VARIABLE isloading que nos indica si estamos cargando o no

export const useFetchRicks = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await GetRicks( category );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, []);


    return {
        images,
        isLoading
    }

}
