import "./Genero.css";
import FormGenero from "../../components/FormGenero.js";
import { Link,useParams } from "react-router-dom";
import useDashboard from "../../hooks/useDashboard.js";
import { useEffect } from "react";



export default function EditarGenero() {

  const params = useParams();
  const {obtenerGeneroID, generoID} = useDashboard();

  

  useEffect(() => {
obtenerGeneroID(params.id);
  }, [])


const {nombre, descripcion } = generoID;

  return (
    <>

    <div className="containerGenero">
      <div className="containerGeneralGenero">
        <div className="Area-Formulario">
        <div className="container2">
          <h1 className="tituloMovie">Editar Genero: {nombre}</h1>
          <p className="tituloMovie"> {descripcion}</p>
          <hr className="separador" />
</div>



  <FormGenero />

  <div>
<button className="buttonB">
  <Link className="LinkB" to="/Home">Cancelar</Link>
</button>

</div>


        </div>
      </div>
    </div>
  </>
  );
}
