import { useContext } from "react";
import Button from "../Button/Button";
import { CartContext } from "../../Context/Cart/CartContext";




function CartItem({product: {id, title, image, price, quantity}}) {

    const { removeItem } = useContext(CartContext)

    return ( <article className="flex w-[80%] shrink-0">
        
        <figure className="flex w-[30%] h-[30%] bg-amber-900">
            <img src={image} alt={`Imagen de ${title}`} className="h-full w-full object-cover" />
        </figure>
        <p>{title}</p>
        <p>Subtotal: {price * quantity}</p>
        <p>Cantidad: {quantity}</p>
        <Button color="red" onClick={() =>removeItem(id)}>Quitar producto</Button>



    </article> );
}

export default CartItem


// category
// description
// id
// image
// price
// quantity
// stock
// title
