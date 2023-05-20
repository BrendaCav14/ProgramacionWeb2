import React, {useState} from 'react'
import "./Reportes.css";

export default function Reportes() {

    const [mostrarContenido, setMostrarContenido] = useState(null);

    const MostrarContenido = (id) => {
        if(mostrarContenido === id){
            setMostrarContenido(null);
        } else {
            setMostrarContenido(id);
        }
    };

    return (
        <div className="containerReportes">
            <div className="container2">
                <h1>Reportes de Ventas</h1>
                <hr className="separador"></hr>

                <button className='ButtonGenerar' onClick={() => MostrarContenido (1)}>Ventas Por Usuario</button>
                <button className='ButtonGenerar' onClick= {() => MostrarContenido(2)}>Ventas Por Película</button>
                <button className='ButtonGenerar' onClick={() => MostrarContenido(3)}>Series Por Capítulo</button>
                <button className='ButtonGenerar' onClick={() => MostrarContenido(4)}>Películas Por Género</button>
                <div>
                    <label>Desde:</label>
                    <input className='fecha' type='date'></input>
                    <label>Hasta:</label>
                    <input className='fecha' type='date'></input>
                </div>
                <div className= {mostrarContenido === 1 ? 'contenido-visble': 'contenido-oculto'} >
                    <table>
                        <thead>
                            <tr>
                                <th>Usuario</th>
                                <th>Películas</th>
                                <th>Series</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ejemplo</td>
                                <td>Ejemplo</td>
                                <td>Ejemplo</td>
                                <td>1200</td>
                            </tr>
                            <tr>
                                <td>Ejemplo</td>
                                <td>Ejemplo</td>
                                <td>Ejemplo</td>
                                <td>1200</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className= {mostrarContenido === 2 ? 'contenido-visble': 'contenido-oculto'} >
                    <table>
                        <thead>
                            <tr>
                                <th>Película</th>
                                <th>Genero</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ejemplo</td>
                                <td>Ejemplo</td>
                                <td>200</td>
                            </tr>
                            <tr>
                                <td>Ejemplo</td>
                                <td>Ejemplo</td>
                                <td>200</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className= {mostrarContenido === 3 ? 'contenido-visble': 'contenido-oculto'} >
                    <table>
                        <thead>
                            <tr>
                                <th>Serie</th>
                                <th>Capítulos</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ejemplo</td>
                                <td>10</td>
                                <td>200</td>
                            </tr>
                            <tr>
                                <td>Ejemplo</td>
                                <td>10</td>
                                <td>400</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className= {mostrarContenido === 4 ? 'contenido-visble': 'contenido-oculto'} >
                    <table>
                        <thead>
                            <tr>
                                <th>Género</th>
                                <th>Película</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ejemplo</td>
                                <td>Ejemplo</td>
                                <td>200</td>
                            </tr>
                            <tr>
                                <td>Ejemplo</td>
                                <td>Ejemplo</td>
                                <td>400</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

