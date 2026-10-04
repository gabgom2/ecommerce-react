import { useCallback } from "react";
import { useFetch } from "../hooks/useFetch";
import { getProductById } from "../services/getProductById";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";







function ItemDetailContainer( { title }) {
    
    const { id: productId } = useParams()

    const fetchProduct = useCallback(
    () => getProductById(Number(productId)),
    [productId]
);

const { loading, error, data: producto } = useFetch(fetchProduct);



    if ( loading ) {
        return (
            <div className="col-span-full flex flex-col items-center justify-center py-10">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
                <p className="mt-4 text-gray-600">Cargando productos...</p>
            </div>
        )

    }

    if ( error ) {
        return(
            <p className="mt-4 text-red-800">Ocurrió un error al obtener el producto</p>
        )
    }


    
    return (
    <> 

        <h2 className="my-10 text-center text-5xl font-bold text-gray-800 md:text-4xl">{title}</h2>
        <section className="mx-auto mt-10 mb-15 flex justify-center">

        <ItemDetail producto={producto} />
        </section> 
    </>);
}

export default ItemDetailContainer;