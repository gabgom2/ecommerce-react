import Item from "../Item/Item";

function ItemsContainer() {

    const product = {
        id: 1,
        title: "Catan",
        description:
            "Un clásico juego de estrategia en el que tendrás que comerciar, construir y expandir tus asentamientos.",
        price: 45000,
        stock: 12,
        image: ""
    };

    return (
        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* <h3>{props.greeting}</h3> */}



            <Item product={product}/>
          


        </section>
    )
}

export default ItemsContainer;