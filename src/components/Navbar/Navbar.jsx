import styles from "./index.module.css"

function Navbar() {
    return (
        <nav>
            <ul className={styles.navbar__list} >
                <a href="#">
                    <li className={styles.navbar__link}>Juegos de Estrategia</li>
                </a>
                <a href="#">
                    <li className={styles.navbar__link}>Juegos de Fiesta</li>
                </a>
                <a href="#">
                    <li className={styles.navbar__link}>Rompecabezas</li>
                </a>
            </ul>
        </nav>

    )
}

export default Navbar;

