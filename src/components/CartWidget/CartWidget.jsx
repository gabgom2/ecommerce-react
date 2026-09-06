import styles from "./index.module.css"
import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
    return (
        <div className={styles.cartWidget}>
            {/* Icono carrito */}
            <FaShoppingCart className={styles.cartIcon}/>
            {/* Badge */}

            <span className="absolute -top-0.5 -right-2.5 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center leading-none">
                0
            </span>

        </div>

    )
}

export default CartWidget;