import "./Actor.css";

export default function Actor() {
  return (
    <div className="containerActor">
      <div className="containerGeneralActor">
        <div className="Area-Formulario">
          <div className="container2">
          <h1>Agregar Actor</h1>
          <hr className="separador" />
          </div>
          
          <input
            type="text"
            placeholder="Nombre Completo"
            className="inputLargeA"
          />
          <button className="buttonA">Confirmar</button>
          <button className="buttonB">Cancelar</button>
          <div>
            <label>Actores Registrados</label>
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
