import React from 'react'
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="container">
    <input type="checkbox" id="check"/>
    <div className="login form">
      <header className='InicioSesion'>Inicio de Sesion</header>
      <form action="#">
        <input type="text" placeholder="Ingrese su Usuario" className='FormLogin'/>
        <input type="password" placeholder="Ingrese su Contraseña" className='FormLogin' />
        <Link to="/Dashboard">
        <button className="button">Ingresar</button>
        </Link>

      </form>
      <span className='whitecolor'>No tienes cuenta?</span>
      <div>
      <Link to="/Registrarse">
      <button className='registroButton'>Registrarse</button>
      </Link>
     
      </div>
    </div>
  </div>
  )
}
