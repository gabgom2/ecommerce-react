import { useCallback } from "react";
import { useFetch } from "../hooks/useFetch";
import { getProductById } from "../services/getProductById";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail/ItemDetail";







function ItemDetailContainer() {
    
    const { id: productId } = useParams()

    const fetchProduct = useCallback(
    () => getProductById(productId),
    [productId]
);

const { loading, error, data: producto } = useFetch(fetchProduct);



    if ( loading ) {
        return (
            <LoadingSpinner message="Cargando producto..." />
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