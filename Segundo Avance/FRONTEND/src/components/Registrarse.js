import React from 'react'
import { Link } from 'react-router-dom';

export const Registrarse = () => {
  return (
    <div className="container">
    <input type="checkbox" id="check"/>
    <div className="login form">
      <header className='InicioSesion'>Registro</header>
      <form action="#">

        <input type="text" placeholder="Ingrese su Usuario" className='InputRegister'/>
        <input type="text" placeholder="Nombre's" className='InputRegister' />
        <input type="text" placeholder="Apellido Paterno" className='InputRegister'/>
        <input type="text" placeholder="Apellido Materno" className='InputRegister'/>
        <input type="date" placeholder="Fecha de Nacimiento" className='InputRegister'/>
        <input type="text" placeholder="Correo" className='InputRegister'/>
        <input type="password" placeholder="Ingrese su Contraseña" className='InputRegister'/>
        <input type="file" placeholder="Seleccione Foto" className='InputRegisterFile'/>      
 


        <button className="button">Registrarse</button>
      </form>
      <div>
      <span className='whitecolor'>Ya tienes Cuenta?</span>

        <Link to="/"><button className='registroButton'>Iniciar Sesion</button></Link>
      </div>
    </div>
  </div>
  )
}
