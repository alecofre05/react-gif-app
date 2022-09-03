import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <h4>{ category }</h4>

            {
                // Si isLoading esta en true entonces va a ejecutar el h5, caso contrario no ejecuta nada, es un if logico
                isLoading && (<h5>Cargando...</h5> )
            }

            <div className='card-grid'>
                { images.map( (img) => (
                    <GifItem
                        key={img.id} 
                        {...img}
                    /> 
                ))}
            </div>
        </>
    )
}
