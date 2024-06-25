'use client'

import { useState, useEffect } from "react"
import axios from "axios";
import DetalhesPokemon from "@/app/components/detalhesPokemon/detalhesPokemon";

import styles from "./styles.module.css";

export default function Detalhes(){
    const [pokemon, setPokemon] = useState<String>("");
    const [detalhesPokemon, setDetalhesPokemon] = useState<any>(null)

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
            setDetalhesPokemon(response.data);
        } catch (error) {
            console.error("Erro ao buscar os detalhes do Pokémon:", error);
            setDetalhesPokemon(null);
        }
    }

    return(
        <div>
            <p>Pesquisa o pokemon</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Pokemon..."
                    onChange={(e)=>setPokemon(e.target.value)}
                    required
                />
                <button type="submit">Pesquisar</button>
            </form>
            <div className={styles.center}>
                {detalhesPokemon ?
                    <DetalhesPokemon detalhes={detalhesPokemon}/>
                    :(
                        <p>error ou precurar pokemon</p>
                    )
                }
            </div>
        </div>
    );
}