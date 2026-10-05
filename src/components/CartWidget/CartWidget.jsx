import { useContext } from "react";
import { CartContext } from "../../Context/Cart/CartContext";
import styles from "./index.module.css"
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


function CartWidget() {
    const { totalQuantity } = useContext(CartContext)
    
            
    return (
        <Link to="/cart">
        <div className={styles.cartWidget}>
            {/* Icono carrito */}
            <FaShoppingCart className={styles.cartIcon}/>
            {/* Badge */}

            {(totalQuantity > 0) && (

            <span className="absolute -top-0.5 -right-2.5 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center leading-none">
                {totalQuantity}
            </span>
            )}

        </div>
        </Link>

    )
}

export default CartWidget;