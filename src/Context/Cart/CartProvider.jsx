import { CartContext } from "./CartContext";
import { useState } from "react";

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);
  


    
    const addItem = (item, quantity) => {


    const existeProducto = isInCart(item.id);


    if (existeProducto) {
        setCart(
            cart.map((producto) => {
                if (producto.id === item.id) {
                    const nuevaCantidad = producto.quantity + quantity;

                    return {
                        ...producto,
                        quantity: Math.min(nuevaCantidad, item.stock)
                    };
                }

                return producto;
            })
        );
               
    } else {
        setCart([...cart, { ...item, quantity }])
                    
    }
    }

    const removeItem = (id) => {
        setCart(cart.filter((product) => (product.id !== id)))
    };

    const clearCart = () => {
        setCart([])
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };


    const totalQuantity = cart.reduce((acc, product) => {return acc + product.quantity}, 0)

    const totalPrice = cart.reduce((acc, product) => {return acc + ( product.price * product.quantity) }, 0)  

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, totalQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
