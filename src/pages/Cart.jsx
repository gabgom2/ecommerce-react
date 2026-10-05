import { useContext } from "react";
import { CartContext } from "../Context/Cart/CartContext";
import Button from "../components/Button/Button";



function Cart() {
    const { clearCart, totalQuantity, totalPrice } = useContext(CartContext)
    return ( <section className="p-8 flex text-center items-center flex-col gap-10">
        <p>Visualizando Carrito...</p>
        { (totalQuantity > 0) 
            ? <p>El carrito tiene { totalQuantity} items, precio total del carrito: ${ totalPrice } </p>
            : <p>El carrito está vacío</p>
            
        }
        <Button color="red" onClick={clearCart}>Vaciar carrito</Button>
    </section> );
}

export default Cart;