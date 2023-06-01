import FormMovie from "../../components/FormMovie";
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

          <FormMovie />

          

          <button className="buttonA">Confirmar</button>
          <button className="buttonB">Cancelar</button>
        </div>
      </div>
    </div>
  );
}
