import { NavLink } from "react-router-dom";

const navLinkStyles = ({ isActive }) =>
    `text-xl transition-all duration-300 hover:underline hover:underline-offset-4 hover:decoration-2 ${
        isActive
            ? "font-bold text-gray-900"
            : "font-light text-gray-500 hover:text-gray-700"
    }`;




function Navbar() {
    return (
        <nav>
            <ul className="flex flex-row gap-8 m-8">

                <li>
                    <NavLink to="/category/juegos-de-estrategia" className={navLinkStyles}>
                        Juegos de estrategia
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/category/rompecabezas" className={navLinkStyles}>
                        Rompecabezas
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/category/juegos-de-fiesta" className={navLinkStyles}>
                        Juegos de fiesta
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
