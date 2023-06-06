import "./Actor.css";
import { Link,useParams} from "react-router-dom";
import useDashboard from "../../hooks/useDashboard.js";
import { useEffect , useState} from "react";
import Alert from "react-bootstrap/Alert";



export default function EditarActor() {

  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');


  const params = useParams();
  const {obtenerActorID, editarActor,actorID,eliminarActor,mostrarAlerta,alerta} = useDashboard();

  useEffect(() => {
    if(params.id)
    {
        setId(actorID._id)
        setNombre(actorID.nombre)
        setApellido(actorID.apellido)

    }
    
    else{
        setNombre('')
        setApellido('')
    }
    
     }, [params])
  

     useEffect(() => {
      obtenerActorID(params.id);
        }, [])


    
const handleSubmit = async e => {
  e.preventDefault();

  if([nombre,apellido].includes('') ){
    mostrarAlerta({
      msg: 'Todos los campos son obligatorios.',
      error: true
    })

return

  }
  else{
      
    editarActor({nombre,apellido});
      mostrarAlerta({
          msg: 'Cambios Realizados',
          error: false
        })

      setNombre('');
      setApellido('');
  }

// Pasar los datos hacia el provider




};




const HandleClick = () =>{

if(window.confirm('Deseas eliminar este actor/actriz?')){
eliminarActor(params.id);
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
          <h1 className="tituloMovie">Editar Actor/Actriz: {actorID.nombre}</h1>
          <p className="tituloMovie"> {actorID.apellido}</p>
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

<input name="nombre" id="nombre" type="text" placeholder="Nombre del Actor/Actriz" className="inputLarge" 
value={nombre} onChange={e => setNombre(e.target.value)}/>

<input name="apellidos" id="apellidos" type="text" placeholder="Apellidos del Actor/Actriz" className="inputLarge" 
value={apellido} onChange={e => setApellido(e.target.value)}/>



<input name="registrarse" id="registrarse" type="submit" className="buttonA" value={'Actualizar'}></input>




</form>

  <div>
<button className="buttonB">
  <Link className="LinkB" to="/Home/Actor">Cancelar</Link>
</button>

</div>


        </div>
      </div>
    </div>
  </>
  );
}
