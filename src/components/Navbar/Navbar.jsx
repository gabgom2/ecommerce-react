import styles from "./index.module.css"

function Navbar() {
    return (
        <nav>
            <ul className={styles.navbar__list} >
                <a href="#">
                    <li className={styles.navbar__link}>Link 1</li>
                </a>
                <a href="#">
                    <li className={styles.navbar__link}>Link 2</li>
                </a>
                <a href="#">
                    <li className={styles.navbar__link}>Link 3</li>
                </a>
            </ul>
        </nav>

    )
}

export default Navbar;

