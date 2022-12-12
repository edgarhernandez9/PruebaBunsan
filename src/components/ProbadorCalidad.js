import React, { useContext, useEffect } from 'react'
import { JerarquiaContext } from '../context/jerarquiaContext';

export const ProbadorCalidad = () => {
    const { jerarquiaValue, SetJerarquia } = useContext(JerarquiaContext);

    useEffect(() => {
        SetJerarquia({
            ...jerarquiaValue,
            calidad: 500
        })
    }, [])

    return (
        <div>ProbadorCalidad $ {jerarquiaValue.calidad}</div>
    )
}
