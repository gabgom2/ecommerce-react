import { useContext } from "react";
import { CartContext } from "../Context/Cart/CartContext";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem/CartItem";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import ButtonEmptyCart from "../components/ButtonEmptyCart/ButtonEmptyCart";
import EmptyCartDisplay from "../components/EmptyCartDisplay/EmptyCartDisplay";




function Cart() {
    const { cart, totalQuantity, totalPrice } = useContext(CartContext)
    const buttonStyles = "flex justify-center items-center gap-2"
    const navigate = useNavigate();

    if ( totalQuantity === 0) {
        return (<EmptyCartDisplay/>)
    }

    return ( <main className="p-4 md:p-8 lg:p-16 flex text-center items-center flex-col gap-16 justify-start">
        <h1 className="font-semibold text-4xl">Carro de compras</h1>
        <section className="flex flex-col gap-6 items-center">
            { cart.map((productoCarrito) => <CartItem key={productoCarrito.id} product={productoCarrito} />)}
        </section>

        <section className="bg-green-100 flex flex-col gap-4 p-5 rounded-2xl">
        
            <strong className="text-2xl">Total: ${ totalPrice } </strong>

                
                
            <div className="flex gap-6">
                <ButtonEmptyCart>Vaciar Carrito</ButtonEmptyCart>

                <Button color="blue" onClick={() => navigate('/checkout')} className={buttonStyles}>Generar Orden<RiMoneyDollarCircleFill size={24}/></Button>
            </div>
        </section>
    </main> );
}

export default Cart;