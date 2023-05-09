import "./Confirmar.css";
import Alert from "react-bootstrap/Alert";
import { useEffect,useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";


export default function ConfirmarCuenta() {

  const [alerta,setalerta] = useState({});
  const [correcto,setcorrecto] = useState({});
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);

  const params = useParams();
  const {id} = params;

  useEffect(() => {
    const ConfirmaCuenta = async () =>{

      try {
        const url = `http://localhost:4000/api/usuarios/confirmar/${id}`;
        const {data} = await axios.get(url);
        setcorrecto({
          mensaje: data.mensaje,
          error: false
        })
        setCuentaConfirmada(true);
      } 
      catch (error) {
        setalerta({
          msg: error.response.data.msg,
          error: true
        })
      }
      
    }
    ConfirmaCuenta();

  } , [])

  const {msg} = alerta;
  const {mensaje} = correcto;

    return (
      <div className="containerConfirmar">
        <div className="Registro">
          <header className="headerConfirmar">Confirma tu cuenta para empezar</header>
  

<div className={`${alerta.error}`}>
{msg && <Alert variant="danger">
  <Alert.Heading>{alerta.msg}</Alert.Heading>
      </Alert>}
  </div>


<div className={`${correcto.error}`}>
{mensaje && <Alert variant="success">
  <Alert.Heading>{correcto.mensaje}</Alert.Heading>
  </Alert>}


  </div>

{cuentaConfirmada && ( 

<Link to="/" className="linkbutton">Iniciar Sesion</Link>

)}
  
        </div>
      </div>
    );
  }