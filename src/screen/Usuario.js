import React, { useContext } from 'react'
import { Gerente } from '../components/Gerente'
import { ProbadorCalidad } from '../components/ProbadorCalidad'
import { JerarquiaContext } from '../context/jerarquiaContext'

import '../theme/Usuario.css'

export const Usuario = () => {

    const { jerarquiaValue } = useContext(JerarquiaContext);
    let total = 0;

    for (let key in jerarquiaValue) {
        total += jerarquiaValue[key];
    }

    console.log(total);

    return (
        <div className='jerarquiaUsuario'>
            <Gerente />

            <p>
                Total $ {total}
            </p>
        </div>
    )
}
