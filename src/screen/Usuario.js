import React, { useContext, useEffect, useState } from 'react'
import { Desarrollador } from '../components/Desarrollador'
import { Gerente } from '../components/Gerente'
import { GerenteB } from '../components/GerenteB'
import { ProbadorCalidad } from '../components/ProbadorCalidad'
import { JerarquiaContext } from '../context/jerarquiaContext'

import '../theme/Usuario.css'

export const Usuario = () => {

    const { data } = useContext(JerarquiaContext);

    const [componentes, setComponentes] = useState(<></>)
    let total = 0;

    for (let key in data) {
        total += data[key];
    }

    useEffect(() => {
        setComponentes(<>
            <Gerente 
                desarrollador={<Desarrollador />}
                calidad={<ProbadorCalidad />}
                gerenteB={<GerenteB />}
            />
        </>)
    }, [])
    

    return (
        <div className='jerarquiaUsuario'>
            {
                componentes
            }
            <p>
                Total $ {total}
            </p>
        </div>
    )
}
