
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const navLinkStyles = ({ isActive }) =>
    `block text-lg transition-all duration-300 hover:underline hover:underline-offset-4 hover:decoration-2 ${
        isActive
            ? "font-bold text-gray-900"
            : "font-light text-gray-500 hover:text-gray-700"
    }`;

const categoryButtonStyles =
    "text-2xl cursor-pointer transition-all duration-300 hover:underline hover:underline-offset-4 hover:decoration-2";

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    

    const closeMenus = () => {
        setMobileOpen(false);
        
    };

    const location = useLocation();

    const pageNames = {
        "/": "Inicio",
        "/category/juegos-de-fiesta": "Juegos de fiesta",
        "/category/juegos-de-estrategia": "Estrategia",
        "/category/rompecabezas": "Puzzles",
    };

    const currentPage = pageNames[location.pathname] ?? "Navegación";


    return (
        <nav>
            {/* MOBILE: hasta 767px */}
            <div className="relative m-2 md:hidden">
                <button
                    type="button"
                    onClick={() => setMobileOpen((prev) => !prev)}
                    className="text-xl font-semibold text-gray-900"
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-navigation"
                >
                    {currentPage}
                    <span className="ml-2 text-sm">
                        {mobileOpen ? "▲" : "▼"}
                    </span>
                </button>

                <ul
                    id="mobile-navigation"
                    className={`${
                        mobileOpen ? "block" : "hidden"
                    } mt-2 space-y-3 rounded-md bg-gray-200 p-3 shadow-lg`}
                >
                    <li>
                        <NavLink
                            to="/"
                            onClick={closeMenus}
                            className={navLinkStyles}
                        >
                            Inicio
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/category/juegos-de-fiesta"
                            onClick={closeMenus}
                            className={navLinkStyles}
                        >
                            Juegos de fiesta
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/category/juegos-de-estrategia"
                            onClick={closeMenus}
                            className={navLinkStyles}
                        >
                            Juegos de estrategia
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/category/rompecabezas"
                            onClick={closeMenus}
                            className={navLinkStyles}
                        >
                            Rompecabezas
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* TABLET Y DESKTOP: desde 768px */}
            <div className="hidden md:block">
                <ul className="flex flex-row items-center gap-6 m-2 md:m-4">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "hidden lg:block font-semibold text-gray-900 text-2xl underline underline-offset-4"
                                    : "hidden lg:block text-gray-500 text-2xl hover:underline hover:underline-offset-4 hover:decoration-2"
                            }
                        >
                            Inicio
                        </NavLink>
                    </li>

                    <li className="relative group">
                        <button
                            type="button"
                            className={categoryButtonStyles}
                            aria-haspopup="true"
                        >
                            Categorías 
                            <span className="ml-2 text-sm">
                                ▼
                            </span>
                        </button>

                        <ul className="absolute left-0 top-full z-50 mt-2 hidden w-max whitespace-nowrap bg-gray-200 p-2 shadow-lg group-hover:block group-focus-within:block">
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
            </div>
        </nav>
    );
}

export default Navbar;
