import { CartContext } from "./CartContext";
import { useState } from "react";

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);

    // TO DO Implementar la función addItem
    const addItem = (item, quantity) => {
    // Usar cart.find() para ver si el item ya existe
    // Si existe, usar cart.map() para actualizar su cantidad de forma inmutable
    // Si no existe, usar setCart([...cart, { ...item, quantity }])
    };

    
    const removeItem = (id) => {
        setCart(cart.filter((product) => (!product.id === id)))
    };

    const clearCart = () => {
        setCart([])
    };

    // TO DO Calcular totales usando .reduce()
    const totalQuantity = 0; // Reemplazar por .reduce
    const totalPrice = 0;  // Reemplazar por .reduce  

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
