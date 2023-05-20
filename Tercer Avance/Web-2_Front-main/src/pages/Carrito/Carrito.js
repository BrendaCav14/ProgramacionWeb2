import React from 'react'
import "./Carrito.css";

export default function Carrito() {
    return (
        <div className="containerCarrito">
            <div className="container2">
                <h1>Carrito</h1>
                <hr className="separador"></hr>
                <table>
                    <thead>
                        <tr>
                            <th>Película</th>
                            <th>Precio</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ejemplo</td>
                            <td>500</td>
                            <td>Compra</td>
                        </tr>
                        <tr>
                            <td>Ejemplo</td>
                            <td>500</td>
                            <td>Renta</td>
                        </tr>
                    </tbody>
                </table>
                <div className='container3'>
                    <button className="buttonPagar">Pagar</button>
                    <button className="buttonVaciar">Vaciar</button>
                </div>
            </div>
        </div>
    )
}
