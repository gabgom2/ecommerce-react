import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
    return (
        <main
            className="relative min-h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/images/board-game-bg-coelho.webp')",
        }}
        >
            {/* Capa blanca */}
            <div className="absolute inset-0 bg-white/75" />

            {/* Contenido */}
            <div className="relative z-10 min-h-screen flex flex-col">
                <Header />
                    <div className="flex-1 flex justify-center">
                        <div className="w-full min-h-0 flex flex-1">
                            {children}
                        </div>
                    </div>
                <Footer />
            </div>
        </main>
    );
}
