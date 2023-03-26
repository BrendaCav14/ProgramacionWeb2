import React from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import {Link, Outlet} from 'react-router-dom';
import MyAxolotlVideo from '../img/MyAxolotlVideo.jpg';

export const Header = () => {
    return (
        <header>
            <nav className='Navigation'>
                <img className='Axolotl' src={MyAxolotlVideo}></img>
                <input className='SearchInput' placeholder='Búsqueda'></input>
                <button className='Button'>Buscar</button>
                <button className='Barras'>
                    <FaBars/>
                </button>
            </nav>
        </header>
    )
}
