import "./Genero.css";
import FormGenero from "../../components/FormGenero.js";
import { Link,useParams} from "react-router-dom";
import useDashboard from "../../hooks/useDashboard.js";
import { useEffect , useState} from "react";
import Alert from "react-bootstrap/Alert";



export default function EditarGenero() {

  const [id, setId] = useState(null);
  const [nombre, setNombre] = useState('');
  const [descripcion, setdescripcion] = useState('');


  const params = useParams();
  const {obtenerGeneroID, editarGenero,generoID,eliminarproyecto,mostrarAlerta,alerta} = useDashboard();

  useEffect(() => {
    if(params.id)
    {
        console.log('Editando....')
        setId(generoID._id)
        setNombre(generoID.nombre)
        setdescripcion(generoID.descripcion)

    }
    
    else{
        setNombre('')
        setdescripcion('')
    }
    
     }, [params])
  

  useEffect(() => {
obtenerGeneroID(params.id);
  }, [])


// const {nombre, descripcion } = generoID;
 


    
const handleSubmit = async e => {
  e.preventDefault();

  if([nombre,descripcion].includes('') ){
    mostrarAlerta({
      msg: 'Todos los campos son obligatorios.',
      error: true
    })

return

  }
  else{
      
    editarGenero({nombre,descripcion});
      mostrarAlerta({
          msg: 'Cambios Realizados',
          error: false
        })

      setNombre('');
      setdescripcion('');
  }

// Pasar los datos hacia el provider




};




const HandleClick = () =>{

if(window.confirm('Deseas eliminar este genero?')){
eliminarproyecto(params.id);
}else{
console.log('No Eliminado')
}
}

const {msg} = alerta;

  return (
    <>

    <div className="containerGenero">
      <div className="containerGeneralGenero">
        <div className="Area-Formulario">
        <div className="container2">
          <h1 className="tituloMovie">Editar Genero: {generoID.nombre}</h1>
          <p className="tituloMovie"> {generoID.descripcion}</p>
          <div> <button className="elimina" onClick={HandleClick}> Eliminar </button></div>

          <hr className="separador" />
          <div>

  </div>
</div>



<form onSubmit={handleSubmit}>
 <br>
 </br>
<div>
{msg && <Alert variant={`${alerta.error ? 'danger' : 'success'}`}>
  <Alert.Heading>{alerta.msg}</Alert.Heading>
      </Alert>}
  </div>

<input name="nombre" id="nombre" type="text" placeholder="Genero de Pelicula/Serie" className="inputLarge" 
value={nombre} onChange={e => setNombre(e.target.value)}/>

<textarea name="descripcion" id="descripcion" type="text" placeholder="Breve Descripcion" className="inputLarge2" 
value={descripcion} onChange={e => setdescripcion(e.target.value)}/>



<input name="registrarse" id="registrarse" type="submit" className="buttonA" value={'Actualizar'}></input>




</form>

  <div>
<button className="buttonB">
  <Link className="LinkB" to="/Home/Genero">Cancelar</Link>
</button>

</div>


        </div>
      </div>
    </div>
  </>
  );
}
