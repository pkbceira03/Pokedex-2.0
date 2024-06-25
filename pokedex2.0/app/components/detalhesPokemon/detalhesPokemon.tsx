'use client'

import { useState, useEffect } from "react"
import axios from "axios";

import styles from "./styles.module.css"

export default function DetalhesPokemon(props:any) {
    const [abilities, setAbilities] = useState<any>([]);

    useEffect(() => {
        if (props.detalhes && props.detalhes.abilities) {
            setAbilities(props.detalhes.abilities);
        }
    }, [props.detalhes]);

    return (
        <div >
            <div className={styles.container}>
                <div className={styles.center}>
                    <div className={styles.detalhes}>
                        <p>{props.detalhes.name}</p>
                        <img src={props.detalhes.sprites.front_default} />
                    </div>
                    <div className={styles.detalhes}>
                        <p>Forma brilhante</p>
                        <img src={props.detalhes.sprites.front_shiny} />
                    </div>
                </div>
                {props.detalhes.sprites.front_female !== null ?
                    (<div>
                        <div className={styles.detalhes}>
                            <p>pokemon feminino</p>
                            <img src={props.detalhes.sprites.front_female}/>
                        </div>
                        <div className={styles.detalhes}>
                            <p>pokemon feminino brilhante</p>
                            <img src={props.detalhes.sprites.front_shiny_female}/>
                        </div>
                    </div>
                    ):(
                        <p style={{ display: 'none' }}>O masculino e feminino são iguais</p>
                    )
                }
            </div>
            <div className={styles.abilitys}>
                {abilities.length > 0 ?
                    abilities.map((val:any, index: number) =>(
                        <div key={index}>
                            <p>{val.ability.name}</p>
                        </div>
                    ))
                    :(
                        <p>não tem habilidade</p>
                    )
                }
            </div>
        </div>
    );
}