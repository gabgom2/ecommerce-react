import { NavLink } from "react-router-dom";

const navLinkStyles = ({ isActive }) =>
    `text-xl transition-all duration-300 hover:underline hover:underline-offset-4 hover:decoration-2 ${
        isActive
            ? "font-bold text-gray-900"
            : "font-light text-gray-500 hover:text-gray-700"
    }`;

    const categoryButtonStyles =
    "text-2xl cursor-pointer transition-all duration-300 hover:underline hover:underline-offset-4 hover:decoration-2";





function Navbar() {
    return (
        <nav>
            <ul className="flex flex-row m-4">

                <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive 
                                        ? "font-semibold text-gray-900 mr-6 text-2xl underline underline-offset-4 " 
                                        : "text-gray-500 mr-6 text-2xl hover:underline hover:underline-offset-4 hover:decoration-2"
                                }
                            >
                                Inicio
                            </NavLink>
                        </li>

                <li className="relative group">
                    <button className={categoryButtonStyles}>

                        Categorías ▼
                    </button>

                    <ul className="absolute left-0 top-full hidden w-max whitespace-nowrap bg-gray-200 shadow-lg p-2 group-hover:block">

                        <li>
                            <NavLink
                                to="/category/juegos-de-estrategia"
                                className={navLinkStyles}
                            >
                                Juegos de estrategia
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/category/rompecabezas"
                                className={navLinkStyles}
                            >
                                Rompecabezas
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/category/juegos-de-fiesta"
                                className={navLinkStyles}
                            >
                                Juegos de fiesta
                            </NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
