import Swal from "sweetalert2";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export async function generateCheckout(
    navigate,
    user,
    cart,
    totalPrice,
    totalQuantity
) {

    if (user) {
        const result = await Swal.fire({
            title: "Por favor, revise su orden de compra",
            icon: "info",
            html: `
                <ul>
                    ${cart.map((producto) => `
                        <li>
                            ${producto.title} x ${producto.quantity}
                            / Subtotal: $${producto.price * producto.quantity}
                        </li>
                    `).join("")}
                </ul>

                <br>
                Cantidad de Items total: ${totalQuantity}
                <br><br>

                <h2><b>Total: $${totalPrice}</b></h2>
            `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: "Generar Orden",
            confirmButtonAriaLabel: "Generar orden",
            cancelButtonText: "Cancelar",
            cancelButtonAriaLabel: "Cancelar Orden",
            footer: `<b>La orden de pago será enviada al sistema de Firebase</b>`,
            cancelButtonColor: "#d33",
        });

        if (result.isConfirmed) {
            try {
                const orden = {
                    usuarioID: user.uid,
                    productos: cart,
                    total: totalPrice,
                    cantidadTotal: totalQuantity,
                    fecha: new Date(),
                    usuarioNombre: user.displayName,
                    usuarioEmail: user.email,
                };

                const docRef = await addDoc(
                    collection(db, "ordenes"),
                    orden
                );

                console.log("Orden creada con ID:", docRef.id);

                await Swal.fire({
                    title: "¡Orden generada!",
                    text: "Tu orden fue creada correctamente.",
                    icon: "success"
                });

            } catch (error) {
                console.error("Error al crear la orden:", error);

                await Swal.fire({
                    title: "Error",
                    text: "No se pudo generar la orden.",
                    icon: "error"
                });
            }
        }

    } else {
        try {
            console.log("Clickeando sweetAlert");

            const result = await Swal.fire({
                title: "Solo usuarios registrados pueden realizar compras",
                showDenyButton: true,
                showCancelButton: true,
                cancelButtonText: "Cancelar",
                confirmButtonText: "Iniciar sesión",
                denyButtonText: "Registrarse",
                confirmButtonColor: "#3085d6",
                denyButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                icon: "warning",
            });

            if (result.isConfirmed) {
                navigate("/user-access/login");
            } else if (result.isDenied) {
                navigate("/user-access/register");
            }

        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: `Hubo un error ${err}`,
            });
        }
    }
}
