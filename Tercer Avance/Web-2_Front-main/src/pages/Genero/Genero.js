import "./Genero.css";
import FormGenero from "../../components/FormGenero";
import useDashboard from "../../hooks/useDashboard";
import ObtenerGeneros from "../../components/ObtenerGeneros";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Genero() {

  const params = useParams();
  const {obtenerGeneroID, generos, eliminarproyecto} = useDashboard();

  

  useEffect(() => {
console.log(params);
  }, [])




  return (
<>
    <div className="containerGenero">
      <div className="containerGeneralGenero">
        <div className="Area-Formulario">
        <div className="container2">
          <h1 className="tituloMovie">Agregar Genero</h1>
          <hr className="separador" />
</div>



  <FormGenero />
  <div>
<button className="buttonB">
  <Link className="LinkB" to="/Home">Cancelar</Link>
</button>

</div>
<br></br>

  <div className="GenerosDiv">
    {generos.length ?

     generos.map(genero =>(

      <ObtenerGeneros
      key = {genero._id}
      genero = {genero}

      />
      
     ))

     
:      <p className="GenerosReg2">NO hay Generos Registrados</p>}
  </div>


        </div>
      </div>
    </div>
  </>
  );
}
