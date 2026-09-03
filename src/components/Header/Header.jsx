import styles from "./index.module.css"
import Navbar from "../Navbar/Navbar.jsx" 
import logo from "../../assets/logo/board-game.png";
import CartWidget from "../CartWidget/CartWidget.jsx";

function Header() {
    return (
        <header className="flex items-center justify-between bg-emerald-300 px-8 py-3 shadow-sm">



            <div className={styles.logo}>
                <img src={logo} alt="Logo del comercio" />
                <h1 className={` ${styles.headerTitle} text-4xl`}>BoardMania</h1>
            </div>

            <div className={styles.headerRight}>
                <Navbar />
                <CartWidget />
            </div>

        </header>
    )
}



export default Header;