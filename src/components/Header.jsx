import React from 'react'
import NuevoPreosupuesto from './NuevoPreosupuesto'

import ControlPresupuesto from './ControlPresupuesto'
const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto,gastos,setGastos }) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {isValidPresupuesto ? 
            (
            
                <ControlPresupuesto
                presupuesto={presupuesto}
                gastos={gastos}
                setGastos={setGastos}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
                />) : (
                <NuevoPreosupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                ></NuevoPreosupuesto>

            )}

        </header>
    )
}

export default Header
