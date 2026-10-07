import Swal from "sweetalert2";

export async function generateCheckout(navigate, user, cart, totalPrice, totalQuantity) {
    
    

if (user) {
    Swal.fire({
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



    } else {

        try {
                console.log("Clickeando sweetAlert")
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
                    navigate("/user-access/register")
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
