import Item from "../Item/Item";

function ItemsContainer() {

    const products = [
        {
            id: 1,
            title: "Catan",
            description:
                "Un clásico juego de estrategia en el que tendrás que comerciar, construir y expandir tus asentamientos.",
            price: 45000,
            stock: 12,
            image: ""
        },
        {
            id: 2,
            title: "Carcassonne",
            description:
                "Construye ciudades, caminos y monasterios mientras colocas tus seguidores para conseguir la mayor cantidad de puntos.",
            price: 38000,
            stock: 8,
            image: ""
        }
    ];


    return (
        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* <h3>{props.greeting}</h3> */}
        
            {products.map( product => (
                <Item product={product}/>
            )

            )
            }



          


        </section>
    )
}

export default ItemsContainer;