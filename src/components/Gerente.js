import React, { useContext, useEffect } from 'react'
import { JerarquiaContext } from '../context/jerarquiaContext'

export const Gerente = (props) => {

    const { gerenteA, data } = useContext(JerarquiaContext);
    const { desarrollador, calidad, gerenteB } = props;
    useEffect(() => {
        gerenteA(300)
    }, []);

    return (
        <>
            <div>Gerente $ {data ? data.gerenteA : 0}</div>
            {
                desarrollador
            }
            {
                calidad
            }
            {
                gerenteB
            }
            {/* {
                componente.map( (value, index) => (
                    <div key={index} >
                        { value }
                    </div>
                ))
            } */}
            
            
        </>
        
    )
}
