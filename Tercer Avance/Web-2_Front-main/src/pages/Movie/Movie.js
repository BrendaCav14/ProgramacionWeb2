import "./Movie.css";

export default function Movie() {
  return (
    <div className="containerMovie">
      <div className="container">
        <div className="Area-Formulario">

          <div className="container2">
            <h1>Agregar Pelicula</h1>
            <hr className="separador" />
          </div>

          <input
            type="text"
            placeholder="Titulo/Nombre"
            className="inputLarge"
          />
          <textarea
            type="text"
            placeholder="Sinopsis"
            className="inputLarge"
            style={{ height: "80px" }}
          />
          <input
            type="text"
            placeholder="Duracion"
            className="inputLarge"
            style={{ width: "44%" }}
          />
          <input
            type="number"
            placeholder="Precio $"
            className="inputLarge"
            style={{ width: "44%", marginLeft: "10px" }}
          />
          <input
            type="number"
            placeholder="Año de Lanzamiento"
            className="inputLarge"
          />
          <hr className="separador" />

          <select className="inputLarge" defaultValue="placeholder">
            <option value="placeholder" disabled>
              Categoria
            </option>
          </select>
          <select className="inputLarge" defaultValue="placeholder">
            <option value="placeholder" disabled>
              Clasificacion
            </option>
          </select>
          <select className="inputLarge" defaultValue="placeholder">
            <option value="placeholder" disabled>
              Actor
            </option>
          </select>
          <select className="inputLarge" defaultValue="placeholder">
            <option value="placeholder" disabled>
              Director
            </option>
          </select>

          <hr className="separador" />

          <div>
          <label>Poster:</label>
          <input type="file" className="inputLarge" />
		
          <label>Foto:</label>
          <input type="file" className="inputLarge" />

          <label>Trailer:</label>
          <input type="file" className="inputLarge" />
          </div>

          <hr className="separador" />

          <button className="buttonA">Confirmar</button>
          <button className="buttonB">Cancelar</button>
        </div>
      </div>
    </div>
  );
}
