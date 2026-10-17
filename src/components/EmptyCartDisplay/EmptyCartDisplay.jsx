import Button from "../Button/Button";
import { Link } from "react-router-dom";

function EmptyCartDisplay() {
    return ( <main className="py-8 flex text-center justify-center flex-1 items-center flex-col gap-10">
                
                <div>
                    <h2 className="font-bold text-2xl">El carrito de compras se encuentra vacío</h2>
                </div>
                <Link to="/">
                    <Button>Volver al Inicio</Button>
                </Link>
            </main>  );
}

export default EmptyCartDisplay;