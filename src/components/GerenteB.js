import React, { useContext, useEffect } from 'react'
import { JerarquiaContext } from '../context/jerarquiaContext';

export const GerenteB = () => {
    const { jerarquiaValue, SetJerarquia } = useContext(JerarquiaContext);

    useEffect(() => {
        SetJerarquia({
            ...jerarquiaValue,
            gerenteB: 300
        })
    }, [])

    return (
        <div>Gerente B $ {jerarquiaValue.gerenteB}</div>
    )
}
