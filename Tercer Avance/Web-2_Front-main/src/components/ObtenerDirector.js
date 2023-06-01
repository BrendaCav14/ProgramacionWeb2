import "../pages/Director/Director.css";
import {Link} from "react-router-dom";

const ObtenerDirector = ({director}) => {
    const {_id, nombre, apellido} = director;

    return (
        <div className="divdirectores">

            <p className="nomdirector">
                {nombre}
            </p>

            <p className="apedirector">
                {apellido}
            </p>
            <div className="enlacever">
                <Link className="link" to={`${_id}`}>
                    Editar
                </Link>

            </div>
        </div>
    )
}

export default ObtenerDirector
