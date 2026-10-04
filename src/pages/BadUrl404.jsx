import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

function BadUrl404() {
    return ( <section className="flex flex-col gap-6 p-8">
    
    
    <h1 className="font-bold text-2xl">Error 404: La URL solicitada no existe</h1> 
        <Link to="/">
            <Button>
                Volver al inicio
            </Button>
        </Link>
    </section>
    )
}

export default BadUrl404;