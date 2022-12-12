import React, { useContext, useEffect } from 'react'
import { JerarquiaContext } from '../context/jerarquiaContext'
import { Desarrollador } from './Desarrollador'
import { GerenteB } from './GerenteB'
import { ProbadorCalidad } from './ProbadorCalidad'

export const Gerente = () => {

    const { jerarquiaValue, SetJerarquia } = useContext(JerarquiaContext);

    useEffect(() => {
        SetJerarquia({
            ...jerarquiaValue,
            gerenteA: 300
        })
    }, [])
    return (
        <>
            <div>Gerente $ {jerarquiaValue.gerenteA}</div>

            <ProbadorCalidad />
            <Desarrollador />
            <GerenteB />
            
            
        </>
        
    )
}
