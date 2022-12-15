import React, { useContext, useEffect } from 'react'
import { JerarquiaContext } from '../context/jerarquiaContext';

export const ProbadorCalidad = () => {
    const { data, qa } = useContext(JerarquiaContext);

    useEffect(() => {
        qa(500)
    }, [])

    return (
        <div>ProbadorCalidad $ {data ? data.calidad : 0}</div>
    )
}
