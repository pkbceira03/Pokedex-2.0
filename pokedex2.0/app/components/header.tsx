import Link from 'next/link'

export default function Header(){
    return(
        <div>
            <Link href="/">Logo</Link>

            <div>
                <Link href="/pages/pokedex">Pokedex</Link>
                <Link href="/pages/ataque">Ataque</Link>
                <Link href="/pages/evolucao">linha evoilutiva</Link>
                <Link href="/pages/localizacao">Localização</Link>
            </div>
        </div>
    );

}