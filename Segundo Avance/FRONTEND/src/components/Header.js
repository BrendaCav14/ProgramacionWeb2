import React from 'react';
import {useState} from 'react';
import {FaBars} from "react-icons/fa";
import MyAxolotlVideo from '../img/MyAxolotlVideo.jpg';
import axolotl from '../img/axolotl.png';


export const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header>
            <nav className='Navigation'>
                <div>
                    <button className='Barras' onClick={()=>setOpen(!open)}>
                        <FaBars/>
                    </button>
                    {
                        open && <div className='menus'>
                        <ul type='none'>
                            <li><img className='UserPic' src={axolotl}></img></li>
                            <li><h6>User123</h6></li>
                            <li><h6>Username123@outlook.com</h6></li>
                            <li><h5>Administrador</h5></li>
                            <li><button>Agregar Pelílcula</button></li>
                            <li><button>Agregar Genero</button></li>
                            <li><button>Agregar Cast</button></li>
                            <li><button>Editar Perfil</button></li>
                            <li><button>Cerrar Sesión</button></li>
                        </ul>
                    </div>
                    }
                    
                </div>
                <img className='Axolotl' src={MyAxolotlVideo}></img>
                <input className='SearchInput' placeholder='Búsqueda'></input>
                <button className='Button'>Buscar</button>
            </nav>
        </header>
    )
}
