' use client '

import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./style.module.css";

export default function Ability(props: any){
    const [descriptionAbility, setDescriptionAbility] = useState<any>([]);

    async function getDescription() {
        if(props.ability && props.ability.length >= 0){
            const descriptions = await Promise.all(
                props.ability.map(async (val: any) => {
                    const response = await axios.get(val.ability.url);
                    return response.data;
                })
            );
            setDescriptionAbility(descriptions);
        }
    }

    useEffect(() => {
        getDescription();
    }, [props.ability]);

    return(
        <div className={styles.container}>
            <div className={styles.abilitys}>
                <p>Habilidades do {props.name}</p>
                {props.ability && props.ability.length > 0 ? (
                    props.ability.map((val: any, index: number) => (
                        <div key={index}>
                            <h3>{val.ability.name}</h3>
                            <p>{descriptionAbility[index]?.effect_entries?.[1]?.effect || 'Descrição não disponível'}</p>
                        </div>
                    ))
                ) : (
                        <p>não tem habilidade</p>
                )}
            </div> 
            {/* <div className={styles.move}>
                <p>Movimentos</p>
                {props.move && props.move.length >=0 ? (
                    props.move.map((val:any, index: number)=>(
                        <div key={index}>
                            <p>{val.move.name}</p>
                        </div>
                    ))
                ):null}
            </div> */}
        </div>
    );
}