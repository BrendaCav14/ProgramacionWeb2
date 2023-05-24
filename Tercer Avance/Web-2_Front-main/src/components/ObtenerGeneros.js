import "../pages/Genero/Genero.css";
import { Link} from "react-router-dom";


const ObtenerGeneros = ({genero}) => {
    const {_id,nombre,descripcion} = genero;




  return (
    <div className="divgeneros">

        <p className="nomgenero"> {nombre} </p>

        <span className="descgenero"> {descripcion} </span>
        <div className="enlacever">
<Link className="link" to={`${_id}`}> Editar </Link>


     </div>
    </div>
  )
}

export default ObtenerGeneros
