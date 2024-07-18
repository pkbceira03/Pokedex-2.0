'use client'

import { useState, useEffect } from "react";

import styles from "./styles.module.css";

import Ability from "../ability/ability"

export default function DetalhesPokemon(props: any) {
    const [abilities, setAbilities] = useState<any>([]);
    const [cardColor, setCardColor] = useState<string>("#fff");
    const [typePokemon, setTypePokemon] = useState<any[]>([]);
    const [secondaryColor, setSecondaryColor] = useState<string>("#fff");

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

    useEffect(() => {
        if (props.detalhes && props.detalhes.abilities) {
            setAbilities(props.detalhes.abilities);
        }
        console.log("muda de cor")

        if (props.detalhes.types && Array.isArray(props.detalhes.types) && props.detalhes.types.length > 0) {
            const primaryType = props.detalhes.types[0].type.name;
            setCardColor(typeColors[primaryType] || "#fff");

            const secondaryType = props.detalhes.types[1]?.type?.name;
            setSecondaryColor(typeColors[secondaryType] || "#fff");

            setTypePokemon(props.detalhes.types)
        }
    }, [props.detalhes, props.types]);

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.center}>
                    <div className={styles.detalhes} style={{ backgroundColor: cardColor }}>
                        <p>{props.detalhes.name}</p>
                        <img src={props.detalhes.sprites.front_default} alt={`${props.detalhes.name} front`} />
                        <div className={styles.typePokemon}>
                            {typePokemon.map((val:any, index: number)=>{
                                let backgroundColor;
                                if (typePokemon.length === 1) {
                                    backgroundColor = cardColor;
                                } else {
                                    backgroundColor = index === 0 ? secondaryColor : cardColor;
                                }
                                return <p 
                                            style={{ backgroundColor }}
                                        >
                                            {val.type.name}
                                        </p>
                            })}
                        </div>
                    </div>
                    <div className={styles.detalhes} style={{ backgroundColor: cardColor }}>
                        <p>Forma brilhante</p>
                        <img src={props.detalhes.sprites.front_shiny} alt={`${props.detalhes.name} shiny front`} />
                        <div className={styles.typePokemon}>
                            {typePokemon.map((val:any, index: number)=>{
                                let backgroundColor;
                                if (typePokemon.length === 1) {
                                    backgroundColor = cardColor;
                                } else {
                                    backgroundColor = index === 0 ? secondaryColor : cardColor;
                                }
                                return <p 
                                            style={{ backgroundColor }}
                                        >
                                            {val.type.name}
                                        </p>
                            })}
                        </div>
                    </div>
                </div>
                {props.detalhes.sprites.front_female !== null ? (
                    <div>
                        <div className={styles.detalhes} style={{ backgroundColor: cardColor }}>
                            <p>Pokemon feminino</p>
                            <img src={props.detalhes.sprites.front_female} alt={`${props.detalhes.name} female front`} />
                            <div className={styles.typePokemon}>
                                {typePokemon.map((val:any, index: number)=>{
                                    let backgroundColor;
                                    if (typePokemon.length === 1) {
                                        backgroundColor = cardColor;
                                    } else {
                                        backgroundColor = index === 0 ? secondaryColor : cardColor;
                                    }
                                    return <p 
                                                style={{ backgroundColor }}
                                            >
                                                {val.type.name}
                                            </p>
                                })}
                            </div>
                        </div>
                        <div className={styles.detalhes} style={{ backgroundColor: cardColor }}>
                            <p>Pokemon feminino brilhante</p>
                            <img src={props.detalhes.sprites.front_shiny_female} alt={`${props.detalhes.name} shiny female front`} />
                            <div className={styles.typePokemon}>
                                {typePokemon.map((val:any, index: number)=>{
                                    let backgroundColor;
                                    if (typePokemon.length === 1) {
                                        backgroundColor = cardColor;
                                    } else {
                                        backgroundColor = index === 0 ? secondaryColor : cardColor;
                                    }
                                    return <p 
                                                style={{ backgroundColor }}
                                            >
                                                {val.type.name}
                                            </p>
                                })}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p style={{ display: 'none' }}>O masculino e feminino são iguais</p>
                )}
            </div>

            <Ability ability={abilities} move={props.detalhes.moves}/>
            
        </div>
    );
}
