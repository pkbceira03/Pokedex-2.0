'use client'

import axios from "axios";
import { useState, useEffect } from "react";
import CartPokemon from "@/app/components/cartPokemon/cartPokemon";
import styles from "./styles.module.css"

const LIMIT = 20; // Definindo quantos Pokémon serão exibidos por página

export default function Pokedex(){
    const [pokemon, setPokemon] = useState<any>([]);
    const [offset, setOffset] = useState(0);
    const [total, setTotal] = useState(0);

    async function getPokemon(offset: number){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`);
        const data = response.data;
        setPokemon(data.results);
        console.log(pokemon)
        setTotal(data.count);
    }

    useEffect(() => {
        getPokemon(offset);
    }, [offset]);

    const handleNextPage = () => {
        setOffset(prevOffset => Math.min(prevOffset + LIMIT, total - LIMIT));
    };

    const handlePrevPage = () => {
        setOffset(prevOffset => Math.max(prevOffset - LIMIT, 0));
    };

    return(
        <div>
            <div className={styles.center}>
                {pokemon.length > 0 ? 
                    pokemon.map((val:any) => (
                        <CartPokemon key={val.name} name={val.name} urlPokemon={val.url}/>
                    ))
                    : (
                        <p>Loading...</p>
                    )
                }
            </div>
            <div className={styles.pagination}>
                <button className={styles.btn} onClick={handlePrevPage} disabled={offset === 0}>
                    Previous
                </button>
                <button className={styles.btn} onClick={handleNextPage} disabled={offset + LIMIT >= total}>
                    Next
                </button>
            </div>
        </div>
    );
}
