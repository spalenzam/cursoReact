//Los hooks son funciones 
//no se usa jsx 

import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs'


export const useFetchGifts = (category) => {
    
    //cuando usemos useFetchGifts va a tener un estado por defecto
    const [state, setstate] = useState({
        data:[],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then( imgs => {
               
                setstate({
                    data:imgs,
                    loading: false
                });               
                
            })
    }, [category]);

    return state; // {data:[], loading: true}
}

