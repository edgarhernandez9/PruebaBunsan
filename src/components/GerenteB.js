import React, { useContext, useEffect } from 'react'
import { JerarquiaContext } from '../context/jerarquiaContext';

export const GerenteB = () => {
    const { data, gerenteB } = useContext(JerarquiaContext);

    useEffect(() => {
        gerenteB(300)
    }, [])

    return (
        <div>Gerente B $ {data ? data.gerenteB : 0}</div>
    )
}
