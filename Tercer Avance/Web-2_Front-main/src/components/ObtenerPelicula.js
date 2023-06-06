import "../pages/Movie/Movie.css";
import {Link} from "react-router-dom";

const ObtenerPelicula = ({pelicula}) => {
    const {_id, titulo, sinopsis} = pelicula;

    console.log(pelicula);

    return (
        <div className="divpeliculas">

            <p className="titulopelicula">
                {titulo}
            </p>

            <span className="sinopsispelicula">
                {sinopsis}
            </span>

            <div className="enlacever">
                <Link className="link" to={`${_id}`}>
                    Editar
                </Link>

            </div>
        </div>
    )
}

export default ObtenerPelicula
