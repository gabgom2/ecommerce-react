import { useFetch } from "../../hooks/useFetch";
import { getProducts } from "../../services/asyncMock";
import ItemList from "../ItemList/ItemList";




function ItemsContainer(props) {


    const { loading, error, data } = useFetch(getProducts)
    
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
            <p className="mt-4 text-red-800">Ocurrió un error al obtener productos</p>
        )
    }



    return (
        <>
            <h1 className="mt-8 text-center text-3xl font-bold text-gray-800 md:text-4xl">{props.greeting}</h1>
            
            <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">

                <ItemList listadoProductos={data}/>




            </section>
        </>
    )
}

export default ItemsContainer;