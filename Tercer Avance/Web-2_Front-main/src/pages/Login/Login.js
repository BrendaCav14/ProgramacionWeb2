import "./Login.css";
import { Link , useNavigate } from "react-router-dom";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import useAuth from "../../hooks/useAuth.js";

export default function Login() {
  const [TipoCuenta,setCuenta] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const [alerta,setalerta] = useState({});

  const {auth, setAuth, cargando} = useAuth();

console.log(auth);
console.log(cargando);

  const handleSubmit = async e =>{
    e.preventDefault();

if([TipoCuenta,email,password].includes('') ){

  setalerta({
    msg: 'Todos los campos son obligatorios',
    error:true
  })
  return
  };



      //Crear el usuario en la API
      try {
        const {data} = await axios.post('http://localhost:4000/api/usuarios/login',
        {TipoCuenta,email,password});
        setalerta({});
        console.log({data});
        localStorage.setItem('token',data.token);
        setAuth(data);
        navigate("/Home");
        
 return
      } catch (error) {
        console.log(error.response.data.msg);
        setalerta({
          msg: error.response.data.msg,
          error: true
        })
    
        
      }

};

const {msg} = alerta;
//const {mensaje} = alerta2;

  return (

    <div className="containerLogin">
      <div className="Login">
        <header className="headerLogin">Inicio de Sesion</header>

<div className={`${alerta.error}`}>

{msg && <Alert variant="danger">
  <Alert.Heading>Error</Alert.Heading>
  <p>{alerta.msg}</p>
      </Alert>}
  </div>

<form onSubmit={handleSubmit}> 
<select name="TipoCuenta" id="TipoCuenta" className="inputLarge" 
value={TipoCuenta} onChange={e => setCuenta(e.target.value)}>
  <option value="">Seleccione tipo de cuenta...</option>
  <option value="Administrador" >Administrador</option>
  <option value="Cliente" >Cliente</option>
</select>
        <input name="email" id="email" type="email" placeholder="Ingrese su Email" className="inputLarge"
        value={email} onChange={e => setEmail(e.target.value)}/>
        <input name="password" id="password" type="password" placeholder="Ingrese su Contraseña" className="inputLarge"
        value={password} onChange={e => setPassword(e.target.value)}/>
   
          <input name="ingresar" id="ingresar" type="submit" className="buttonLogin" value="Ingresar"></input>
      
</form>
<br></br>
      
          
          
          <nav className="lg:flex lg:justify-between">        

          <Link className="txtWhite" to="/Registro">
             No tienes una cuenta? Registrate
          </Link>


          <Link className="txtWhite2" to="/Olvide-password" >
            Olvidaste tu Contraseña?
          </Link>
          </nav>


      </div>
    </div>

  );
}
