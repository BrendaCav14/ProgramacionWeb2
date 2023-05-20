import React, {useState} from 'react';
import "./MisCompras.css";

export default function MisCompras() {

    const [mostrarContenido,
        setMostrarContenido] = useState(null);

    const MostrarContenido = (id) => {
        if (mostrarContenido === id) {
            setMostrarContenido(null);
        } else {
            setMostrarContenido(id);
        }
    };

    return (

        <div className="containerCompras">
            <div className="container2">
                <h1>Mis Compras</h1>
                <hr className="separador"></hr>
                <button className='ButtonPelicula' onClick={() => MostrarContenido(1)}>Películas</button>
                <button className='ButtonSerie' onClick= {() => MostrarContenido(2)}>Series</button>
                <div
                    className=
                    {mostrarContenido === 1 ? 'contenido-visble': 'contenido-oculto'}>
                    <table>
                        <thead>
                            <tr>
                                <th>Película</th>
                                <th>Precio</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ejemplo</td>
                                <td>500</td>
                                <td>16 de Mayo</td>
                            </tr>
                            <tr>
                                <td>Ejemplo</td>
                                <td>500</td>
                                <td>16 de Mayo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div
                    className=
                    {mostrarContenido === 2 ? 'contenido-visble': 'contenido-oculto'}>
                    <table>
                        <thead>
                            <tr>
                                <th>Serie</th>
                                <th>Capitulo</th>
                                <th>Precio</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ejemplo</td>
                                <td>1</td>
                                <td>500</td>
                                <td>16 de Mayo</td>
                            </tr>
                            <tr>
                                <td>Ejemplo</td>
                                <td>2</td>
                                <td>500</td>
                                <td>16 de Mayo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}