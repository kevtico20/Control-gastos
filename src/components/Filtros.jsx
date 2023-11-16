import { useState, useEffect } from "react"
const Filtros = ({ filtro, setFiltro }) => {
    return (
        <div className="filtros sombra contenedor">
            <form action="">

                <div className="campo">
                    <label htmlFor="categoria">Filtrar Gastos</label>
                    <select name="" id="categoria" value={filtro} onChange={e => setFiltro(e.target.value)}>
                        <option value="">--Gastos--</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="salud">Salud</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="gustos">Gustos Aparte</option>
                        <option value="suspcripcion">Gustos Aparte</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtros
