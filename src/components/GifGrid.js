import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    //const [images, setImages] = useState([]);

    //const state = useFetchGifts();
    //console.log(state)
    //Hago la desestructuración
    // const { data, loading} = useFetchGifts();
    // console.log(data);
    // console.log(loading);
    
    /*
    //Se ejecuta cuando es renderizado por primera vez el componente, eso evita que cada vez que se ejecuta algo nuevo en el componenete
    //esa intrucción se ejecute de nuevo y de nuevo.. 
    //siempre y cuando no nos falta el [] a lo último
    //Más tarde agregamos el category en los [] ya que si la category cambia se vuelve a renderizar
    // useEffect(() => {
    //     getGift(category)
    //         .then(setImages);
    // }, [category]);*/


    //Ahora hacemos la mejora, en vez de usar useEffect vamos a usar este hooks, que adentro va a tener el useEffect
    //data:images es para renombrar la variable
    const {data:images, loading} = useFetchGifts(category);


    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            { loading && <p>Loading</p>}
            <div className="card-grid">
                {
                    
                    // images.map((i)=>(
                    //     <li key={i.id}>{i.title}</li>
                    // ))

                    //Acá podemos desestructurar las propiedades 
                    // images.map( ({ id, title }) => (
                    //     <li key={id}>{title}</li>
                    // ))

                    //Esto lo cambiamos para hacerlo componente
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            //envio las propiedades de la imagen de forma independiente
                            {...img}
                        />
                    ))
                }

            </div>
        </>
    )
}

export default GifGrid
