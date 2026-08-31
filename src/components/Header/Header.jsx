import styles from "./index.module.css"
import Navbar from "../Navbar/Navbar.jsx" 
import logo from "../../assets/logo/board-game.png";
import CartWidget from "../CartWidget/CartWidget.jsx";

function Header() {
    return (
        <header className={styles.header}>

            <div className={styles.logo}>
                <img src={logo} alt="Logo del comercio" />
                <h1 className={styles.headerTitle}>BoardMania</h1>
            </div>

            <div className={styles.headerRight}>
                <Navbar />
                <CartWidget />
            </div>

        </header>
    )
}



export default Header;