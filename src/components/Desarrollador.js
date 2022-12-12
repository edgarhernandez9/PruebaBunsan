import React, { useContext, useEffect } from 'react'
import { JerarquiaContext } from '../context/jerarquiaContext';

export const Desarrollador = () => {

    const { jerarquiaValue, SetJerarquia } = useContext(JerarquiaContext);

    useEffect(() => {
        SetJerarquia({
            ...jerarquiaValue,
            desarrollador: 1000
        })
    }, [])

    return (
        <div>Desarrollador $ {jerarquiaValue.desarrollador}</div>
    )
}
