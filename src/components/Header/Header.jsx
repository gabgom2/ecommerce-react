import styles from "./index.module.css"
import Navbar from "../Navbar/Navbar.jsx" 
import logo from "../../assets/logo/board-game.png";
import CartWidget from "../CartWidget/CartWidget.jsx";
import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Context/Auth/AuthContext.jsx";



function Header() {

    const { user } = useContext(AuthContext)

    return (
        <header className="flex items-center justify-between bg-emerald-300 px-4 lg:px-10 py-3 shadow-sm">


            <Link to="/" className="hidden md:block">
                <div className={styles.logo}>
                    <img src={logo} alt="Logo del comercio" />
                    <h1 className={` ${styles.headerTitle} text-2xl lg:text-4xl leading-none m-0`}>BoardMania</h1>
                </div>
            </Link>

            <div className={`${styles.headerRight} justify-center md:justify-end gap-4 sm:gap-12`}>
                <Navbar />
                <CartWidget />

                <Link to="/user-access" className="shrink-0" >
                    {( user )
                        ? 
                            <div className="flex gap-2 border-black border-2 rounded-2xl p-2 bg-emerald-400 items-center">
                                <FaCircleUser size={28} className="shrink-0"/>
                                <p>
                                    <span className="sm:hidden">
                                        {(user.displayName || user.email).slice(0, 8)}
                                    </span>

                                    <span className="hidden sm:inline">
                                        {user.displayName || user.email}
                                    </span>
                                </p>
                                
                            </div>
                        :
                        <div className="flex gap-2 border-black border-2 rounded-2xl p-2 bg-emerald-400 items-center hover:bg-emerald-200 cursor-pointer">
                                <FaCircleUser size={28} className="shrink-0"/><p>Acceder</p>
                            </div>
                    }
                </Link>
            </div>

        </header>
    )
}



export default Header;