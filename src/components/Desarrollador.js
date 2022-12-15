import React, { useContext, useEffect } from 'react'
import { JerarquiaContext } from '../context/jerarquiaContext';

export const Desarrollador = () => {

    const { desarrollador,data } = useContext(JerarquiaContext);

    useEffect(() => {
        desarrollador(1000)
    }, [])

    return (
        <div>Desarrollador $ {data ? data.desarrollador : 0}</div>
    )
}
