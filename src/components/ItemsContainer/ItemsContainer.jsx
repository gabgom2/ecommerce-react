import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { getProductsFilteredByCategory } from "../../services/getProductsFilteredByCategory";
import ItemList from "../ItemList/ItemList";
import BadUrl404 from "../../pages/BadUrl404";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const categoryNames = {
    "juegos-de-fiesta": "Juegos de Fiesta",
    "juegos-de-estrategia": "Juegos de Estrategia",
    "rompecabezas": "Juegos de Rompecabezas",
};

function ItemsContainer() {
    
    const { id: categoryId } = useParams();
    const categoryName = categoryNames[categoryId];

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
        <main className="flex flex-col">
            <h1 className="mt-12 text-center text-2xl sm:text-4xl lg:text-6xl font-bold text-gray-800">
                {categoryName}
            </h1>

            <section className="mx-auto mb-20 grid max-w-7xl grid-cols-1 gap-6 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <ItemList listadoProductos={productos} />
            </section>
        </main>
    );
}

export default ItemsContainer;
