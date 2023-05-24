
import ObtenerGeneros from "../components/ObtenerGeneros.js";
import useDashboard from "../hooks/useDashboard";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";



const FormGenero = () => {
  const [id, setId] = useState(null);
  const [nombre, setNombre] = useState('');
  const [descripcion, setdescripcion] = useState('');

  const navigate = useNavigate();
  

    const  { mostrarAlerta,alerta, nuevoGenero, generos, generoID, setgeneroID,general} = useDashboard();


    const params = useParams(); 




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
        
         nuevoGenero({nombre,descripcion});
        mostrarAlerta({
            msg: 'Cambios Realizados',
            error: false
          })

        setNombre('');
        setdescripcion('');
    }
  
  // Pasar los datos hacia el provider
  
  

  
  };

const {msg} = alerta;
  return (


    
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



<input name="registrarse" id="registrarse" type="submit" className="buttonA" value={id ? 'Actualizar' : 'Agregar'}></input>




</form>


  )
}

export default FormGenero
