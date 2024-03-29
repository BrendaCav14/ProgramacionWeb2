import useDashboard from "../hooks/useDashboard";
import { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";




const FormDirector = () =>{
    const[id, setId] = useState(null);
    const[nombre, setNombre] = useState('');
    const[apellido, setApellido] = useState('');


    const navigate = useNavigate();

    const {mostrarAlerta, alerta, nuevoDirector , directorID} = useDashboard();

    const params = useParams();

    useEffect(() => {
        if(params.id){
            console.log('Editando...');
            setId(directorID._id);
            setNombre(directorID.nombre);
            setApellido(directorID.apellido);
        } 
        
        else{

            setNombre('')
            setApellido('')
        }
    }, [params])

    const handleSubmit = async e => {
        e.preventDefault();

        if([nombre, apellido].includes('')){
            mostrarAlerta({
                msg: 'Todos los campos son obligatorios.', 
                error: true
            })

         return 
        }

        else{
            nuevoDirector({nombre, apellido});
            mostrarAlerta({
                msg: 'Cambios Realizados', 
                error: false
            })

            setNombre('');
            setApellido('');
        }
    };

    const {msg} = alerta;

    return(

        <form onSubmit={handleSubmit}>
            <br></br>
            <div>
                {msg && <Alert variant={`${alerta.error ? 'danger' : 'success'}`}>
                    <Alert.Heading>{alert.msg}</Alert.Heading>
                    </Alert>}
            </div>

            <input name="nombre" id="nombre" type="text" placeholder="Nombre(s) del Director/a" className="inputLarge"
            value={nombre} onChange={e => setNombre(e.target.value)}/>

            <input name="apellidos" id="nombre" type="text" placeholder ="Apellidos del Director/a" className="inputLarge"
            value={apellido} onChange = {e => setApellido(e.target.value)}/>

            <input name="registrarse" id="registrarse" type="submit" className="buttonA" value={'Agregar'}></input>
        </form>
    )

}

export default FormDirector