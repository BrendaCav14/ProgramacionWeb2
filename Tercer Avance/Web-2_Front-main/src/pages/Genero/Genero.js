import "./Genero.css";

export default function Genero() {
  return (
    <div className="containerGenero">
      <div className="containerGeneralGenero">
        <div className="Area-Formulario">
        <div className="container2">
          <h1 className="tituloMovie">Agregar Genero</h1>
          <hr className="separador" />
</div>
          <input
            type="text"
            placeholder="Genero de Pelicula/Serie"
            className="inputLarge"
          />
          <button className="buttonA">Confirmar</button>
          <button className="buttonB">Cancelar</button>
          <div>
            <label>Generos Registrados</label>
            <div className="listCast">
              <ul>
                <li>Ejemplo1</li>
                <li>Ejemplo2</li>
                <li>Ejemplo3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
