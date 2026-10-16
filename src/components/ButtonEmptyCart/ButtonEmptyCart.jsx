import { useContext } from "react";
import { CartContext } from "../../Context/Cart/CartContext";
import Button from "../Button/Button";
import { IoTrashBin } from "react-icons/io5";

function ButtonEmptyCart( { children }) {
    const buttonStyles = "flex justify-center items-center gap-2"
    const { clearCart } = useContext(CartContext)
    return (             
        <Button color="red" onClick={clearCart} className={buttonStyles}>{ children }<IoTrashBin size={24}/></Button> 

    );
}

export default ButtonEmptyCart;