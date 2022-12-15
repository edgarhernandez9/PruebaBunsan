import React, { createContext, useReducer, useState } from "react";
import { type } from "../Actions";
import { ActionReducer } from "./Reducer";


export const JerarquiaContext = createContext({});

const init = () => {

    return {}
}

export const JerarquiaProvider = (props) => {
    const [state, dispatch] = useReducer(ActionReducer, {}, init);

    let data = {
        gerenteA: 0,
        gerenteB: 0,
        desarrollador: 0,
        calidad: 0
    }

    const desarrollador = (valor) => {
        data = {
            ...data,
            desarrollador: valor
        }
        dispatch({type: type.desarrollador, payload: data })
    }

    const gerenteA = (valor) => {
        data = {
            ...data,
            gerenteA: valor
        }
        dispatch({type: type.gerenteA, payload: data })
    }

    const gerenteB = (valor) => {
        data = {
            ...data,
            gerenteB: valor
        }
        dispatch({type: type.gerenteB, payload: data })
    }

    const qa = (valor) => {
        data = {
            ...data,
            calidad: valor
        }
        dispatch({type: type.qa, payload: data })
    }

    
    return(
        <JerarquiaContext.Provider 
            value={{
                ...state,
                gerenteA, 
                desarrollador,
                gerenteB,
                qa,
            }}
        >
            { props.children }
        </JerarquiaContext.Provider>
    )
}


