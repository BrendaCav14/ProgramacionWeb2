import React from 'react'

export const AddGenre = () => {
    return (
        <div className='addGenre'>
            <div className='contentAddGenre'>
                <h1>AGREGAR GENERO</h1>
                <label>Nombre:</label>
                <input className='inputGenre'></input>

                <div className='flexbtn'>
                    <button className='btnCast'>Confirmar</button>
                </div>
                <label>Generos Registrados</label>
                <div className='listGenre'>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <button className='btnCancelar'>Cancelar</button>
            </div>
        </div>
    )
}
