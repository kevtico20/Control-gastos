import { useState } from "react";
import Mensaje from "./Mensaje";
const NuevoPreosupuesto = ({ presupuesto, setPresupuesto,setIsValidPresupuesto }) => {

const [mensaje,setMensaje]=useState("")
    const handlePresupuesto = e => {
        e.preventDefault();

        if(!presupuesto || presupuesto<0){
            setMensaje("No es un presupuesto valido")
            return
        }

        setMensaje("")
        setIsValidPresupuesto(true);
    }
    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handlePresupuesto} className='formulario' action="">
                <div className='campo'>
                    <label htmlFor="">Definir Presupuesto</label>
                    <input
                        className='nuevo-presupuesto'
                        type="number"
                        placeholder='Añade tu Presupuesto'
                        value={presupuesto}
                        onChange={e => setPresupuesto(Number(e.target.value))}
                    />
                </div>
                <input type="submit" value="Añadir" name="" id="" />


                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPreosupuesto
