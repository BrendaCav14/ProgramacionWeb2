import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (

    <div className="containerLogin">
      <div className="Login">
        <header className="headerLogin">Inicio de Sesion</header>

        <input type="text" placeholder="Ingrese su Usuario" className="inputLarge"/>
        <input type="password" placeholder="Ingrese su Contraseña" className="inputLarge"/>
        <Link to="/Home">
          <button className="buttonLogin">Ingresar</button>
        </Link>

        <div>
        <span className="txtWhite">No tienes cuenta?</span>
          <Link to="/Registro">
            <button className="buttonRegister">Registrarse</button>
          </Link>
        </div>

      </div>
    </div>

  );
}
