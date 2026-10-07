import { useContext } from "react";
import { CartContext } from "../Context/Cart/CartContext";
import Button from "../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem/CartItem";
import { IoTrashBin } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { generateCheckout } from "../services/generateCheckout";
import { AuthContext } from "../Context/Auth/AuthContext";




function Cart() {
    const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext)
    const { user } = useContext(AuthContext)
    const buttonStyles = "flex justify-center items-center gap-2"
    const navigate = useNavigate();

    if ( totalQuantity === 0) {
        return (<main className="py-8 flex text-center justify-center flex-1 items-center flex-col gap-10">
                
                <div>
                    <h2 className="font-bold text-2xl">El carrito de compras se encuentra vacío</h2>
                </div>
                <Link to="/">
                    <Button>Volver al Inicio</Button>
                </Link>
            </main>)
    }

    return ( <main className="p-16 flex text-center items-center flex-col gap-16 justify-start">
        <h1 className="font-semibold text-4xl">Carro de compras</h1>
        <section className="flex flex-col gap-6 items-center">
            { cart.map((productoCarrito) => <CartItem key={productoCarrito.id} product={productoCarrito} />)}
        </section>

        <section className="bg-green-100 flex flex-col gap-4 p-5 rounded-2xl">
        
            <strong className="text-2xl">Total: ${ totalPrice } </strong>

                
                
            <div className="flex gap-6">
                <Button color="red" onClick={clearCart} className={buttonStyles}>Vaciar carrito<IoTrashBin size={24}/></Button>
                <Button color="blue" onClick={() => generateCheckout(navigate, user, cart, totalPrice, totalQuantity)} className={buttonStyles}>Realizar pago<RiMoneyDollarCircleFill size={24}/></Button>
            </div>
        </section>
    </main> );
}

export default Cart;