import FormMovie from "../../components/FormMovie";
import "./Movie.css";
import { Link } from "react-router-dom";
import ObtenerPelicula from "../../components/ObtenerPelicula";
import useDashboard from "../../hooks/useDashboard";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Movie() {

  const params = useParams();
  const {peliculas} = useDashboard();

  useEffect(() => {
    console.log(params);
}, [])


    return (
        <div className="containerMovie">
            <div className="container">
                <div className="Area-Formulario">

                    <div className="container2">
                        <h1>Agregar Película</h1>
                        <hr className="separador"/>
                    </div>

                    <FormMovie/>
                    <button className="buttonB">
                        <Link className="LinkB" to="/Home">Cancelar</Link>
                    </button>

                    <br></br>

                    <div className="PeliculaDiv">
                        {peliculas.length
                            ? peliculas.map(pelicula => (<ObtenerPelicula key={pelicula._id} pelicula={pelicula}/>))

                            : <p className="PeliculaReg2">NO hay Peliculas Registrados</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}
