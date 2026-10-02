function Footer() {
    return (
        <footer className="min-h-[5dvh] bg-emerald-300 p-8 text-center font-bold">
            
            
            <h6 className="my-3">
                Página web creada con React JS por{" "}
                <a
                    href="https://github.com/gabgom2/"
                    title="board game icons"
                    className="text-indigo-950 hover:text-blue-900"
                >
                    gabgom2
                </a>

            </h6>



            <h6 className="my-3">
                <a
                    href="https://www.flaticon.com/free-icons/puzzle"
                    title="puzzle icons"
                    className="text-indigo-950 hover:text-blue-900"
                >
                    Favicon: Hilmy Abiyyu A
                </a>{" "}/{" "}
                <a
                    href="https://www.flaticon.com/free-icons/board-game"
                    title="board game icons"
                    className="text-indigo-950 hover:text-blue-900"
                >
                    Logo: Magnific
                </a>
                {" "}/{" "}Fondo: Robert Coelho
            </h6>
        </footer>
    )
}



export default Footer;