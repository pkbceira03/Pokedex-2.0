'use client'

import { useState, useEffect } from "react"
import axios from "axios";

export default function DetalhesPokemon(props:any) {
    

    return (
        <div>
            <div>
                <p>{props.detalhes.name}</p>
                <img src={props.detalhes.sprites.front_default} />
            </div>
        </div>
    );
}