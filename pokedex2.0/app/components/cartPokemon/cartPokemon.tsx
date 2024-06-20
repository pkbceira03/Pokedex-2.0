'use client'
import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./styles.module.css"

export default function CartPokemon(props:any){
    const [imagem, setImagem] = useState<any>();
    async function getPokemon(){
        const response = await axios.get(props.urlPokemon);
        setImagem(response.data.sprites.front_default);
    }
    useEffect(()=>{
        getPokemon();
    }, [])

    return(
        <div className={styles.card}>
            <img src={imagem}></img>
            <p>{props.name}</p>
        </div>
    )
}