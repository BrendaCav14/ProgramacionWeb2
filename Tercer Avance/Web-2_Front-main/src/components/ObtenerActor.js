import "../pages/Actor/Actor.css";
import {Link} from "react-router-dom";

const ObtenerActores = ({actor}) => {
    const {_id, nombre, apellido} = actor;

    return (
        <div className="divactores">
            <p className="nomActor">
                {nombre}</p>
            <p className="apeActor">
                {apellido}</p>
            <div className="enlacever">
                <Link className="link" to={`${_id}`}>Editar</Link>
            </div>

        </div> 
    )
}

export default ObtenerActores
