import { useContext } from "react";
import { CartContext } from "../Context/Cart/CartContext";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem/CartItem";



function Cart() {
    const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext)

    if ( totalQuantity === 0) {
        return (<main className="p-8 flex text-center justify-center flex-1 items-center flex-col gap-10">
                
                <div>
                    <h2 className="font-bold text-2xl">El carrito de compras se encuentra vacío</h2>
                </div>
                <Link to="/">
                    <Button>Volver al Inicio</Button>
                </Link>
            </main>)
    }

    return ( <main className="p-8 flex text-center items-center flex-col gap-10 justify-start">
        <h1 className="font-semibold text-3xl">Carro de compras</h1>
        <section className="flex flex-col gap-6 items-center">
            { cart.map((productoCarrito) => <CartItem key={productoCarrito.id} product={productoCarrito} />)}
        </section>
        
        <strong className="text-2xl">Total: ${ totalPrice } </strong>

            
            
        <div className="flex gap-6">
            <Button color="red" onClick={clearCart}>Vaciar carrito</Button>
            <Button onClick={()=>console.log("Finalizar compra...")}>Realizar pago</Button>
        </div>
    </main> );
}

export default Cart;