import { useContext } from "react";
import { CartContext } from "../Context/Cart/CartContext";
import Button from "../components/Button/Button";



function Cart() {
    const {cart} = useContext(CartContext)
    return ( <section className="p-8 flex text-center items-center flex-col gap-10">
        <p>Visualizando Carrito...</p>
        { (cart.length > 0) 
            ? <p>El carrito tiene {cart.length} items</p>
            : <p>El carrito está vacío</p>
            
        }
        <Button color="red">Vaciar carrito</Button>
    </section> );
}

export default Cart;