import CerrarBtn from '../img/cerrar.svg'
import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar }) => {

    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [seleccionar, setSeleccionar] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')


    useEffect(() => {
        if (Object.keys(gastoEditar).length) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setSeleccionar(gastoEditar.seleccionar)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        if ([nombre, cantidad, seleccionar].includes('')) {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 2000);
            return;
        }


        guardarGasto({ nombre, cantidad, seleccionar, id, fecha })
    }

    const ocultarModal = () => {
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {
            setModal(false)
        }, 500);
    }
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CerrarBtn} alt="Cerrar Modal" onClick={ocultarModal} />
            </div>

            <form onSubmit={handleSubmit} action="" className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
                <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
                {
                    mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>
                }
                <div className='campo'>


                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input id='nombre' type="text" placeholder='Añade el nombre del Gasto' value={nombre} onChange={e => setNombre(e.target.value)} />
                </div>

                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input id='cantidad' type="number" placeholder='Añade la cantidad del gasto' value={cantidad} onChange={e => setCantidad(Number(e.target.value))} />
                </div>

                <div className='campo'>
                    <label htmlFor="categoria">Categoria</label>
                    <select name="" id="categoria" value={seleccionar} onChange={e => setSeleccionar(e.target.value)}>

                        <option value="">--seleccione--</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="salud">Salud</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="gustos">Gustos Aparte</option>
                        <option value="suspcripcion">Supcripciones</option>
                    </select>
                </div>

                <input type="submit" value={gastoEditar.nombre ? 'Guardar cambios' : 'Añadir gasto'} />
            </form>
        </div>
    )
}

export default Modal
