import "./Registro.css";
import { Link } from "react-router-dom";

export default function Registro() {
  return (
    <div className="containerRegistro">
      <div className="Registro">
        <header className="headerRegistro">Registrarse</header>

        <input
          type="text"
          placeholder="Ingrese su Usuario"
          className="inputLarge"
        />
        <input type="text" placeholder="Nombre's" className="inputLarge" />
        <input
          type="text"
          placeholder="Apellido Paterno"
          className="inputLarge"
        />
        <input
          type="text"
          placeholder="Apellido Materno"
          className="inputLarge"
        />
        <input
          type="date"
          placeholder="Fecha de Nacimiento"
          className="inputLarge"
        />
        <input type="text" placeholder="Correo" className="inputLarge" />
        <input
          type="password"
          placeholder="Ingrese su Contraseña"
          className="inputLarge"
        />
        <input
          type="file"
          placeholder="Seleccione Foto"
          className="inputLarge"
        />

        <button className="buttonRegistrar">Registrarse</button>

        <div>
          <span className="txtWhite">Ya tienes Cuenta?</span>

          <Link to="/">
            <button className="buttonLoginBack">Iniciar Sesion</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
