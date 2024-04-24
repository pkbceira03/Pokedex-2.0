import Link from 'next/link'
import styles from "./styles.module.css"

export default function Header(){
    return(
        <div className={styles.center}>
            <Link href="/" className={styles.logo}></Link>

            <div className={styles.menuPrincipal}>
                <Link href="/pages/pokedex" className={styles.menu}>Pokedex</Link>
                <Link href="/pages/ataque" className={styles.menu}>Ataque</Link>
                <Link href="/pages/evolucao" className={styles.menu}>linha evoilutiva</Link>
                <Link href="/pages/localizacao" className={styles.menu}>Localização</Link>
            </div>
        </div>
    );

}