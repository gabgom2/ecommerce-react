import ItemsContainer from "../components/ItemsContainer/ItemsContainer";

function Home() {
    return (
       
<section className="min-h-[70vh] flex flex-col items-center justify-center text-center">
    <h1 className="text-5xl font-bold mt-10">
        Boardmania
    </h1>

    <p className="my-6 text-gray-500 max-w-xl">
        Descubrí juegos de tablero para compartir, competir y pasar
        un buen rato.
    </p>

    <ItemsContainer greeting="Catálogo de productos" />
        </section>
    );
}

export default Home;
