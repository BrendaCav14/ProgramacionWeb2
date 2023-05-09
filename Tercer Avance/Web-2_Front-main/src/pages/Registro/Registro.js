import "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import "./Registro.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default function Registro() {
  const [TipoCuenta,setcuenta] = useState('');
  const [usuario,setUsuario] = useState('');
  const [nombre,setNombre] = useState('');
  const [nombre2,setNombre2] = useState('');
  const [ApPat,setApPat] = useState('');
  const [ApMat,setApMat] = useState('');
  const [FechaNac,setFechaNac] = useState('');
  const [email,setEmail] = useState('');
  const [password,setcontraseña] = useState('');
  const [contraseña2,setcontraseña2] = useState('');
  const [foto,setfoto] = useState('');

  const [alerta,setalerta] = useState({});
  const [correcto,setcorrecto] = useState({});

  const handleSubmit = async e =>{
    e.preventDefault();

if([TipoCuenta,usuario,nombre,nombre2,ApPat,ApMat,FechaNac,email,password,contraseña2,foto].includes('') ){

  setalerta({
    msg: 'Todos los campos son obligatorios',
    error:true
  })
  return
  };

  if(password !== contraseña2){

     setalerta({
       msg: 'Las contraseñas no son iguales.',
       error:true
     })
     return
     };

     if(password.length < 6){

      setalerta({
        msg: 'La contraseña es muy corta,agregar minimo 6 caracteres.',
        error:true
      })
      return
      };

      setalerta({});

      //Crear el usuario en la API
      try {
        const {data} = await axios.post('http://localhost:4000/api/usuarios',
        {TipoCuenta,usuario,nombre,nombre2,ApPat,ApMat,FechaNac,email,password,foto});
        
        setcorrecto({
          msg2: data.msg,
          error:false
        })
       
        
        setcuenta('');
        setUsuario('');
        setNombre('');
        setNombre2('');
        setApPat('');
        setApMat('');
        setFechaNac('');
        setEmail('');
        setcontraseña('');
        setcontraseña2('');
        setfoto('');
 return
      } catch (error) {
        setalerta({
          msg: error.response.data.mensaje,
          error: true
        })
        return
        
      }



};


const{msg} = alerta;
const{msg2} = correcto;

  return (



    <div className="containerRegistro">
      <div className="Registro">
        <header className="headerRegistro">Registrarse</header>





<form onSubmit={handleSubmit}>

<select name="TipoCuenta" id="TipoCuenta" className="inputLarge" 
value={TipoCuenta} onChange={e => setcuenta(e.target.value)}>
  <option value="#">Seleccione un tipo de cuenta...</option>
  <option value="Administrador" >Administrador</option>
  <option value="Cliente" >Cliente</option>
</select>
        <input name="usuario" id="usuario" type="text" placeholder="Ingrese su Usuario" className="inputLarge"
        value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <input name="nombre" id="nombre" type="text" placeholder="Nombre" className="inputLarge"
        value={nombre} onChange={e => setNombre(e.target.value)}/>
        <input name="nombre2" id="nombre2" type="text" placeholder="Segundo Nombre" className="inputLarge"
        value={nombre2} onChange={e => setNombre2(e.target.value)}/>
        <input name="ApPat" id="ApPat" type="text" placeholder="Apellido Paterno" className="inputLarge"
        value={ApPat} onChange={e => setApPat(e.target.value)}/>
        <input name="ApMat" id="ApMat" type="text" placeholder="Apellido Materno" className="inputLarge"
        value={ApMat} onChange={e => setApMat(e.target.value)}/>
        <input name="FechaNac" id="FechaNac" type="date" placeholder="Fecha de Nacimiento" className="inputLarge"
        value={FechaNac} onChange={e => setFechaNac(e.target.value)}/>
        <input name="email" id="email" type="email" placeholder="Correo" className="inputLarge"
        value={email} onChange={e => setEmail(e.target.value)}/>
        <div className="contraseñas">
        <input name="password" id="password" type="password" placeholder="Ingrese su Contraseña" className="inputLarge"
        value={password} onChange={e => setcontraseña(e.target.value)}/>
        <input name="contraseña2" id="contraseña2" type="password" placeholder="Repetir Contraseña" className="inputLarge"
        value={contraseña2} onChange={e => setcontraseña2(e.target.value)}/>

        </div>
        <input name="foto" id="foto" type="file" placeholder="Seleccione Foto" className="inputLarge"
        value={foto} onChange={e => setfoto(e.target.value)}/>


        <input name="registrarse" id="registrarse" type="submit" className="buttonRegistrar" value="Crear Cuenta"></input>
</form>
<div className={`${alerta.error}`}>

{msg && <Alert variant="danger">
  <Alert.Heading>Error</Alert.Heading>
  <p>{alerta.msg}</p>
      </Alert>}
  </div>

<div className={`${correcto.error}`}>

  {msg2 && <Alert variant="success">
    <Alert.Heading>Cuenta Exitosa !</Alert.Heading>
        <p>
          {correcto.msg2}
        </p>  </Alert>}
    </div>

<br></br>
        <div>
          <span className="txtWhite">Ya tienes Cuenta?</span>

          <Link to="/">
            <button className="buttonLoginBack">Iniciar Sesion</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
