'use client'

import axios from "axios";
import { useState, useEffect } from "react";
import CartPokemon from "@/app/components/cartPokemon/cartPokemon";

import styles from "./styles.module.css"


const NEXT_PUBLIC_API_URL= 'https://pokeapi.co/api/v2/pokemon?limit=50'

// const getPokemon = async () =>{
//     const response = await axios.get(NEXT_PUBLIC_API_URL);
//     //setPokemon = response.data;
//     return response.data;
// }

export default function Pokedex(){
    const [pokemon, setPokemon] = useState<any>();
    async function getPokemon(){
        const reponse = await axios.get(NEXT_PUBLIC_API_URL);
        const data = await reponse.data;
        setPokemon(data);
    }
    useEffect(()=>{
        getPokemon();
    }, [])
    
    //sprities.frontdefault
    
    return(
        <div>
           <div className={styles.center}>
                {pokemon ?
                    pokemon.results.map((val:any) => {
                        return(
                            <CartPokemon name={val.name} urlPokemon={val.url}/>
                        )
                    })
                    : (
                        <p>Loading...</p>
                    )
                
                }
           </div>
            {/* {pokemon ? 
                pokemon.results.map((val:any) => { return <p>{val.name}</p> })
             : (
                <p>Loading...</p>
            )} */}
        </div>
    );
}