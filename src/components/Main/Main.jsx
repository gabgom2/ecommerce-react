import ItemListContainer from "../ItemListContainer/ItemListContainer";

function Main() {
    return (
        <main className="flex-1 bg-slate-100 p-8 text-center text-xl font-medium">
            <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" />

            <h6 className="my-6"><a href="https://www.flaticon.com/free-icons/puzzle" title="puzzle icons">Favicon: Hilmy Abiyyu A</a> / <a href="https://www.flaticon.com/free-icons/board-game" title="board game icons">Logo: Magnific</a></h6>
        
        </main>
    )
}



export default Main;