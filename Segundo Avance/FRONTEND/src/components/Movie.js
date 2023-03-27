import React from 'react';
import Poster from '../img/Shrek.jpg';
import Foto1 from '../img/Shrek.png';

export const Movie = () => {
    return (
        <div className='movie'>
            <div className='contentMovie'>
                <div>
                    <img className='Poster' src={Poster}></img>
                </div>
                <div>
                    <img className='Foto1' src={Foto1}></img>
                </div>
                <div className='infoMovie'>
                    <h3>CALIFICACIÓN: 100/100</h3>
                    <h3>GENERO: Comedia/Aventura</h3>
                    <h3>DURACIÓN: 92 min</h3>
                    <h3>CLASIFICACIÓN: PG</h3>
                    <h3>DIRECCIÓN: Andrew Adamson/Vicky Jenson</h3>
                </div>

                <div className='sinopsisMovie'>
                    <div>
                        <h1>Shrek(2001)</h1>
                        <h2>VER AHORA</h2>
                        <button className='btnRent'>Rentar</button>
                        <button className='btnBuy'>Comprar</button>
                    </div>
                    <div>
                        <h1>SINOPSIS</h1>
                        <p>Un malvado señor exilia a las criaturas de los cuentos de hadas al pantano de
                            un ogro gruñón, que debe emprender una búsqueda y rescatar a una princesa para
                            el señor con el fin de recuperar sus tierras.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
