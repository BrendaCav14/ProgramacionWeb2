import "./Director.css";
import { Link,useParams} from "react-router-dom";
import useDashboard from "../../hooks/useDashboard.js";
import { useEffect , useState} from "react";
import Alert from "react-bootstrap/Alert";



export default function EditarDirector() {

  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');


  const params = useParams();
  const {obtenerDirectorID, editarDirector,directorID,eliminarproyecto,mostrarAlerta,alerta} = useDashboard();

  useEffect(() => {
    if(params.id)
    {
        console.log('Editando....')
        setId(directorID._id)
        setNombre(directorID.nombre)
        setApellido(directorID.apellido)

    }
    
    else{
        setNombre('')
        setApellido('')
    }
    
     }, [params])
  

  useEffect(() => {
obtenerDirectorID(params.id);
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
      
    editarDirector({nombre,apellido});
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

if(window.confirm('Deseas eliminar este Director/a?')){
eliminarproyecto(params.id);
}else{
console.log('No Eliminado')
}
}

const {msg} = alerta;

  return (
    <>

    <div className="containerDirector">
      <div className="containerGeneralDirector">
        <div className="Area-Formulario">
        <div className="container2">
          <h1 className="tituloMovie">Editar Director/a: {directorID.nombre}</h1>
          <p className="tituloMovie"> {directorID.apellido}</p>
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

<input name="nombre" id="nombre" type="text" placeholder="Nombre del Director/a" className="inputLarge" 
value={nombre} onChange={e => setNombre(e.target.value)}/>

<input name="apellidos" id="apellidos" type="text" placeholder="Apellidos del Director/a" className="inputLarge" 
value={apellido} onChange={e => setApellido(e.target.value)}/>



<input name="registrarse" id="registrarse" type="submit" className="buttonA" value={'Actualizar'}></input>




</form>

  <div>
<button className="buttonB">
  <Link className="LinkB" to="/Home/Director">Cancelar</Link>
</button>

</div>


        </div>
      </div>
    </div>
  </>
  );
}
