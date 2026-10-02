import Button from "../components/Button/Button";


function Home() {
    return (
       
<section className="min-h-[70vh] flex flex-col items-center justify-center text-center">
    <h1 className="text-5xl font-bold">
        Boardmania
    </h1>

    <p className="mt-6 text-xl text-gray-600">
        Tu próxima partida empieza acá
    </p>

    <p className="my-6 text-gray-500 max-w-xl">
        Descubrí juegos de tablero para compartir, competir y pasar
        un buen rato.
    </p>

    <Button to="/productos">
        Ver juegos
    </Button>



        </section>
    );
}

export default Home;
