import React from 'react'

export const AddMovie = () => {
    return (
        <div className='addMovie'>
            <div className='contentAddMovie'>
                <div className='addMovieh1'>
                    <h1>AGREGAR PELÍCULA</h1>
                </div>
                <div className='MovieName'>
                    <label>Nombre:</label>
                    <input className='inputMovie'></input>
                </div>
                <div className='YearMovie'>
                    <label>Año de Lanzamiento:</label>
                    <input className='inputYearMovie'></input>
                </div>
                <div>
                    <label>Sinopsis</label>
                    <input className='inputSinopsis'></input>
                </div>
                <div>
                    <label>Genero</label>
                    <select className='selectGenero'></select>
                </div>

                <div>
                    <label>Duración</label>
                    <input className='inputDuration'></input>
                    <label>Calificación</label>
                </div>

                <div>
                    <label>Clasificación</label>
                    <select className='selectClasificacion'></select>
                </div>

                <div className='CompraRenta'>
                    <input type="radio"></input>
                    <label>Comprar</label>
                    <input type="radio"></input>
                    <label>Rentar</label>
                    <div>
                        <label>Precio: $</label>
                        <input className='inputPrecio'></input>
                    </div>
                </div>

                <div className='Archivos'>
                    <div className='Poster'>
                        <label>Poster:</label>
                        <div className='divfile'>
                            <label>Elegir Archivo</label>
                            <input type="file" className='inputFile'></input>
                        </div>
                    </div>

                    <div className='Fotos'>
                        <label>Fotos:</label>
                        <div className='divfile'>
                            <label>Elegir Archivo</label>
                            <input type="file" className='inputFile'></input>
                        </div>
                    </div>

                    <div className='Trailer'>
                        <label>Trailer:</label>
                        <div className='divfile'>
                            <label>Elegir Archivo</label>
                            <input type="file" className='inputFile'></input>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='btnConfirmar'>Confirmar</button>
                    <button className='btnCancelar'>Cancelar</button>
                </div>
                <div>
                    <label>Actores</label>
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
        </div>
    )
}
