import Link from 'next/link'
import styles from "./styles.module.css"

export default function Header(){
    return(
        <div className={styles.center}>
            <Link href="/" className={styles.logo}></Link>

            <div className={styles.menuPrincipal}>
                <Link href="/pages/pokedex" className={styles.menu}>Pokedex</Link>
                <Link href="/pages/detalhe" className={styles.menu}>Detalhes do Pokemon</Link>
            </div>
        </div>
    );

}