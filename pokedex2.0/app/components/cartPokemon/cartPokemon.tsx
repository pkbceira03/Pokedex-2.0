'use client'
import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./styles.module.css"

export default function CartPokemon(props:any){
    const [imagem, setImagem] = useState<string>();
    const [typePokemon, setTypePokemon] = useState<any[]>([]);
    const [cardColor, setCardColor] = useState<string>("#fff");
    const [secondyColor, setSecondyColor] = useState<string>("#fff");

    const typeColors: { [key: string]: string } = {
        normal: "#A8A878",
        fire: "#F08030",
        water: "#6890F0",
        grass: "#78C850",
        electric: "#F8D030",
        ice: "#98D8D8",
        fighting: "#C03028",
        poison: "#A040A0",
        ground: "#E0C068",
        flying: "#A890F0",
        psychic: "#F85888",
        bug: "#A8B820",
        rock: "#B8A038",
        ghost: "#705898",
        dragon: "#7038F8",
        dark: "#705848",
        steel: "#B8B8D0",
        fairy: "#EE99AC",
    };
    

    async function getPokemon(){
        const response = await axios.get(props.urlPokemon);
        setImagem(response.data.sprites.front_default);
        setTypePokemon(response.data.types);

        if (response.data.types.length > 0) {
            const primaryType = response.data.types[0].type.name;
            setCardColor(typeColors[primaryType] || "#fff");
            const secondyType = response.data.types?.[1]?.type?.name;
            if (secondyType && secondyType !== 'NULL') {
                setSecondyColor(typeColors[secondyType] || "#fff");
            } else {
                setSecondyColor("#fff"); 
            }

        }

    }

    useEffect(()=>{
        getPokemon();
        console.log(typePokemon)
    }, [])

    return(
        <div className={styles.card} style={{ backgroundColor: cardColor }}>
            <img src={imagem}></img>
            <p>{props.name}</p>
            <div className={styles.typePokemon}>
            {typePokemon.map((val:any, index: number)=>{
                let backgroundColor;
                if (typePokemon.length === 1) {
                    backgroundColor = cardColor;
                } else {
                    backgroundColor = index === 0 ? secondyColor : cardColor;
                }
                return <p 
                            style={{ backgroundColor }}
                        >
                            {val.type.name}
                        </p>
            })}
            </div>
        </div>
    )
}