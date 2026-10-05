import { CartContext } from "./CartContext";
import { useState, useEffect } from "react";

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);
    useEffect(() => {
    console.log(cart)
        }, [cart])


    
    const addItem = (item, quantity) => {
    const existeProducto = cart.some(producto => producto.id === item.id )

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

    const totalQuantity = cart.reduce((acc, product) => {return acc + product.quantity}, 0)

    const totalPrice = cart.reduce((acc, product) => {return acc + ( product.price * product.quantity) }, 0)  

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
