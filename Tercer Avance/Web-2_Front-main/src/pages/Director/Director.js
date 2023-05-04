import "./Director.css";

export default function Director() {
  return (
    <div className="containerDirector">
      <div className="containerGeneralDirector">
        <div className="Area-Formulario">
          <div className="container2">
          <h1 className="tituloMovie">Agregar Director</h1>
          <hr className="separador" />
          </div>


          <input
            type="text"
            placeholder="Nombre Completo"
            className="inputLarge"
          />
          <button className="buttonA">Confirmar</button>
          <button className="buttonB">Cancelar</button>
          <div>
            <label>Directores Registrados</label>
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
