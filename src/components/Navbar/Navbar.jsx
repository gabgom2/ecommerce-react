function Navbar() {
    return (
        <nav>
            <ul className="flex flex-row gap-8 m-8">
                <a href="#">
                    <li className="font-semibold text-xl text-gray-900 transition-colors hover:text-slate-800">Juegos de Estrategia</li>
                </a>
                <a href="#">
                    <li className="font-semibold text-xl text-gray-900 transition-colors hover:text-slate-800">Juegos de Fiesta</li>
                </a>
                <a href="#">
                    <li className="font-semibold text-xl text-gray-900 transition-colors hover:text-slate-800">Rompecabezas</li>
                </a>
            </ul>
        </nav>

    )
}

export default Navbar;

