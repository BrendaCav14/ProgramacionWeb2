import "./OlvidePassword.css";
import axios from "axios";
import {useState} from "react";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";


export default function OlvidePassword() {

const [email,setEmail] = useState('');
const [alerta,setalerta] = useState({});
const [correcto,setcorrecto] = useState({});

const handleSubmit = async e=> {
  e.preventDefault();

if(email === '' || email.length < 6){

  setalerta({
    msg: 'El Email es obligatorio',
    error: true
  });
  return
}

try {
  const {data} = await axios.post('http://localhost:4000/api/usuarios/restaurar-password', {email})

  setcorrecto({
    mensaje: data.mensaje,
    error: false
  })

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
          <header className="headerpassword">Olvide mi Contraseña</header>
  
  <form onSubmit={handleSubmit}>
          <input name="email" id="email" type="email" placeholder="Ingresa tu Correo" className="inputLarge" 
          value={email} onChange={e => setEmail(e.target.value)}/>
  
          <input name="enviar" id="enviar" type="submit" className="buttonRegistrar" value="Enviar Intrucciones"></input>

  </form>  
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

  <Link className="txtWhite" to="/Login">
     ¿Ya tienes una cuenta? INICIAR SESION
  </Link>


  <Link className="txtWhite2" to="/Login">
     ¿No tienes una cuenta?
  </Link>
  </nav>
        </div>
      

  
  </div>
    );
  }
  
