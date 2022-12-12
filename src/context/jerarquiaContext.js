import { createContext, useState } from "react";


export const JerarquiaContext = createContext();


export const JerarquiaProvider = (props) => {
    const [jerarquiaValue, SetJerarquia] = useState({
        gerenteA: 0,
        gerenteB: 0,
        desarrollador: 0,
        calidad: 0
    })

    
    return(
        <JerarquiaContext.Provider value={{SetJerarquia, jerarquiaValue}}>
            { props.children }
        </JerarquiaContext.Provider>
    )
}


