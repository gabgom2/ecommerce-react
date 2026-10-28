import { useContext } from "react";
import Button from "../Button/Button";
import { CartContext } from "../../Context/Cart/CartContext";
import { FaTrashAlt } from "react-icons/fa";




function CartItem({product: {id, title, image, price, quantity}}) {

    const { removeItem } = useContext(CartContext)

    return ( <article className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[2fr_3fr] bg-green-100 p-5 rounded-2xl">
        
        <figure className="flex h-40 bg-white rounded-xl p-2">
            <img src={image} 
            alt={`Imagen de ${title}`} 
            loading="lazy"
            className="h-full w-full object-contain" />
        </figure>
        <div className="flex flex-col justify-center gap-3">
            <h3 className="font-bold text-2xl">{title}</h3>
            <p> Precio unitario: ${price} / Cantidad: {quantity}</p>
            <p className="font-bold">Subtotal: ${price * quantity}</p>
            
            <Button color="red" onClick={() =>removeItem(id)} className="flex justify-center items-center gap-4">Quitar producto<FaTrashAlt size={18} /></Button>
        </div>



    </article> );
}

export default CartItem



