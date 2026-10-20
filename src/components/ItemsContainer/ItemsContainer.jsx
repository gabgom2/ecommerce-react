import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { getProductsFilteredByCategory } from "../../services/getProductsFilteredByCategory";
import ItemList from "../ItemList/ItemList";
import BadUrl404 from "../../pages/BadUrl404";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function ItemsContainer({ greeting }) {
    const { id: categoryId } = useParams();

    const fetchProducts = useCallback(() => {
        return getProductsFilteredByCategory(categoryId);
    }, [categoryId]);

    const { loading, error, data: productos } = useFetch(fetchProducts);

    if (loading) {
        return (
            <LoadingSpinner message="Cargando productos..." />
        );
    }

    if (error) {
        return (
            <p className="mt-4 text-red-800">
                Ocurrió un error al obtener productos
            </p>
        );
    }

    if (!productos) {
        return <BadUrl404 />;
    }


    return (
        <>
            <h1 className="mt-12 text-center text-6xl font-bold text-gray-800 md:text-4xl">
                {greeting}
            </h1>

            <section className="mx-auto mb-20 grid max-w-7xl grid-cols-1 gap-6 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <ItemList listadoProductos={productos} />
            </section>
        </>
    );
}

export default ItemsContainer;
