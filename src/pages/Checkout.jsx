import UserAccessButtons from "../components/UserAccessButtons/UserAccessButtons";
import { AuthContext } from "../Context/Auth/AuthContext";
import { CartContext } from "../Context/Cart/CartContext";
import { useContext } from "react";
import { useState } from "react";

import ButtonEmptyCart from "../components/ButtonEmptyCart/ButtonEmptyCart";

function Checkout() {
    const { user } = useContext(AuthContext) || {};
    const { cart, totalPrice } = useContext(CartContext) || {};
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [error, setError] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!fullName.trim() || !phone.trim() || !address.trim()) {
            setError("Completá todos los campos para continuar.");
            return;
        }
        }

    if (!user) {
        return(
            <>
                <main className="flex flex-col justify-center items-center gap-8">
                    <p>Solo usuarios registrados pueden generar una orden de compra</p>
                    <p>Por favor, regístrese o inicie sesión para acceder a esta función</p>
                    <UserAccessButtons />
                </main>



            </>)
    }
    return ( <>
            <main className="flex flex-col justify-center items-center gap-8 py-4">
                <h1>Previsualizando orden de compra</h1>
                <article className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
    <h2 className="mb-4 text-xl font-bold">
        Resumen de tu compra
    </h2>

       
    {cart.length === 0 ? (
        <p className="text-gray-500">
            Tu carrito está vacío.
        </p>
    ) : ( 
        <div className="flex flex-col gap-3">
           <ul>            
                    { cart.map((producto) => { 
                        return (<li>{producto.title} x {producto.quantity} (Subtotal: ${producto.price * producto.quantity})</li>


                    )
                    
                })
                }
            </ul>
            <strong>Total: ${totalPrice}</strong>
            <ButtonEmptyCart >Cancelar Compra</ButtonEmptyCart >
        </div>
    )}

    </article>

                <form onSubmit={handleSubmit} className="space-y-5 rounded-xl bg-gray-100 p-8 shadow-lg">

                    {/* Nombre y apellido */}
                    <div>
                        <label
                            htmlFor="fullName"
                            className="mb-1 block text-sm font-medium"
                        >
                            Nombre y apellido completo
                        </label>

                        <input
                            id="fullName"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Carlos Pérez"
                            autoComplete="name"
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                    </div>


                    {/* Teléfono */}
                    <div>
                        <label
                            htmlFor="phone"
                            className="mb-1 block text-sm font-medium"
                        >
                            Teléfono
                        </label>

                        <input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Ej. 11 1234-5678"
                            autoComplete="tel"
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                    </div>

                    {/* Dirección de envío */}
                    <div>
                        <label
                            htmlFor="address"
                            className="mb-1 block text-sm font-medium"
                        >
                            Dirección de envío
                        </label>

                        <textarea
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Calle, número, localidad y provincia"
                            autoComplete="street-address"
                            rows={3}
                            required
                            className="w-full resize-y rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        />
                    </div>

                    {/* Error */}
                    {error && (
                        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                            {error}
                        </p>
                    )}

                    {/* Botón */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        Confirmar orden
                    </button>

                </form>
            </main>
    </> );
}

export default Checkout;