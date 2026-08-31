import styles from "./index.module.css"
import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
    return (
        <div className={styles.cartWidget}>
            <FaShoppingCart className={styles.cartIcon}/>
            <p>(0)</p>
        </div>

    )
}

export default CartWidget;