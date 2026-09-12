import Item from "../Item/Item"

function ItemList({listadoProductos}) { 
    return (
        listadoProductos.map((product) => (
                        <Item key={product.id} product={product} />
        )
    )

)
}

export default ItemList