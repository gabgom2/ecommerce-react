import { useCallback } from "react";
import { useFetch } from "../hooks/useFetch";
import { getProductById } from "../services/getProductById";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";







function ItemDetailContainer() {
    
    const { id: productId } = useParams()

    const fetchProduct = useCallback(
    () => getProductById(productId),
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


        <ItemDetail producto={producto} />
        
    </>);
}

export default ItemDetailContainer;