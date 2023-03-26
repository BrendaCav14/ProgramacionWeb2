import React from 'react'

export const AddCast = () => {
    return (
        <div className='addCast'>
            <div className="contentAddCast">
                <div>
                    <h1>AGREGAR DIRECTOR</h1>
                    <label>Nombre:</label>
                    <input className='inputCast'></input>
                    <div className='flexbtn'>
                        <button className='btnCast'>Confirmar</button>
                    </div>
                    <div className='Genres'>
                        <label>Directores Registrados</label>
                        <div className='listCast'>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>AGREGAR ACTOR</h1>
                    <label>Nombre:</label>
                    <input className='inputCast'></input>
                    <div className='flexbtn'>
                        <button className='btnCast'>Confirmar</button>
                    </div>
                    <label>Actores Registrados</label>
                    <div className='listCast'>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <button className='btnCancelar'>Cancelar</button>
            </div>
        </div>
    )
}
