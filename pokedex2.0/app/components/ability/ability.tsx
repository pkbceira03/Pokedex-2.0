' use client '

import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./style.module.css";

export default function Ability(props: any){

    return(
        <div>
            <div className={styles.abilitys}>
                <p>Habilidades</p>
                {props.ability && props.ability.length > 0 ? (
                    props.ability.map((val: any, index: number) => (
                        <div key={index}>
                            <p>{val.ability.name}</p>
                        </div>
                    ))
                ) : (
                        <p>não tem habilidade</p>
                )}
            </div> 
            <div className={styles.move}>
                <p>movimentos</p>
                {props.move && props.move.length >=0 ? (
                    props.move.map((val:any, index: number)=>(
                        <div key={index}>
                            <p>{val.move.name}</p>
                        </div>
                    ))
                ):null}
            </div>
        </div>
    );
}