import React from 'react'
import { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    //const categories=['Pepito', 'Menguito', 'Honguito'];

    const [categories, setCategories] = useState(['Tom And Jerry']);

    // const handleAdd = () =>{
    //     setCategories(['Macarena', ...categories]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>           

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                        // <li key={category}>{ category }</li>
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp
