import "./OlvidePassword.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";


export default function NuevoPassword() {
  const[password,setpassword] = useState('');
  const[tokenValido,setTokenvalido] = useState(false);
  const[alerta,setalerta] = useState({});
  const[correcto,setcorrecto] = useState({});
  const [passwordMod, setpasswordMod] = useState(false);
  const params = useParams();
  const {token} = params;

  useEffect(() =>{

    const comprobarToken = async ()=> {
      try {

        await axios.get(`http://localhost:4000/api/usuarios/restaurar-password/${token}`)
        setTokenvalido(true);
      } catch (error) {
        setalerta({
          msg: error.response.data.msg,
          error: true
        })
      }

    }
    comprobarToken();
  } , [])

 const handleSubmit = async e => {
  e.preventDefault();

  if(password.length < 6){
    setalerta({
      msg: 'La contraseña debe ser minimo de 6 caracteres',
      error: true
    })
    return
  }

  try {

    const url = `http://localhost:4000/api/usuarios/restaurar-password/${token}`;
    const {data} = await axios.post(url, {password});
    setcorrecto({
      mensaje: data.mensaje,
      error: false
    })

    setpasswordMod(true);
    
  } catch (error) {
    setalerta({
      msg: error.response.data.msg,
      error: true
    })
  }

 }


  const {msg} = alerta;
  const {mensaje} = correcto;

    return (
     <div className="containerpassword">
        <div className="password">
          <header className="headerpassword">Restablece tu Contraseña</header>
  {tokenValido && ( 
    
  <form onSubmit={handleSubmit}>
  <input name="password" id="password" type="password" placeholder="Escribe tu Nueva Contraseña" className="inputLarge"
  value={password} onChange={e => setpassword(e.target.value)}/>
  
  <input name="nuevacontra" id="nuevacontra" type="submit" className="buttonRegistrar" value="Guardar Contraseña"></input>

  </form>   
   
    )};

<div className={`${alerta.error}`}>
{msg && <Alert variant="danger">
  <Alert.Heading>Error</Alert.Heading>
  <p>{alerta.msg}</p>
      </Alert>}
  </div>

  <div className={`${correcto.error}`}>
{mensaje && <Alert variant="success">
  <Alert.Heading>{correcto.mensaje}</Alert.Heading>
  </Alert>}


  </div>
  <nav className="lg:flex lg:justify-between">        

  {passwordMod && ( 

<Link to="/" className="linkbutton">Iniciar Sesion</Link>

)}


  </nav>
   </div>

     
      

  
  </div>
    );
  }
  