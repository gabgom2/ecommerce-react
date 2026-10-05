import { useContext } from "react";
import Button from "../Button/Button";
import { CartContext } from "../../Context/Cart/CartContext";
import { FaTrashAlt } from "react-icons/fa";




function CartItem({product: {id, title, image, price, quantity}}) {

    const { removeItem } = useContext(CartContext)

    return ( <article className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[2fr_3fr] bg-green-100 p-5 rounded-2xl">
        
        <figure className="flex h-40 bg-amber-900">
            <img src={image} alt={`Imagen de ${title}`} className="h-full w-full object-cover" />
        </figure>
        <div className="flex flex-col justify-center gap-3">
            <h3 className="font-bold text-2xl">{title}</h3>
            <p className="font-bold">Subtotal: ${price * quantity}</p>
            <p>Cantidad: {quantity}</p>
            <Button color="red" onClick={() =>removeItem(id)} className="flex justify-center items-center gap-4">Quitar producto<FaTrashAlt size={18} /></Button>
        </div>



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
