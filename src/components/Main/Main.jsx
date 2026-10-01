import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemsContainer from "../ItemsContainer/ItemsContainer";

function Main() {
    return (
        <main className="flex-1 bg-slate-100 p-8 text-center text-xl font-medium">
            <ItemsContainer greeting="¡Bienvenidos a nuestra tienda!" />

            <ItemDetailContainer title="Vista de detalle de producto" />

        
        </main>
    )
}



export default Main;