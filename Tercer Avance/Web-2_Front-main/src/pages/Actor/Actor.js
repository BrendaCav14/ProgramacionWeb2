import "./Actor.css";
import FormActor from "../../components/FormActor";
import useDashboard from "../../hooks/useDashboard";
import ObtenerActores from "../../components/ObtenerActor";
import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";

export default function Actor() {

    const params = useParams();
    const {actores} = useDashboard();

    useEffect(() => {
        console.log(params);
    }, [])

    return (

        
        <div className="containerActor">
            <div className="containerGeneralActor">
                <div className="Area-Formulario">
                    <div className="container2">
                        <h1>Agregar Actor</h1>
                        <hr className="separador"/>
                    </div>

                    <FormActor/>
                    <div>
                        <button className="buttonB">
                            <Link className="LinkB" to="/Home">Cancelar</Link>
                        </button>
                    </div>
                    <br></br>

                    <div className="ActorDiv">
                        {actores.length
                            ? actores.map(actor => (<ObtenerActores key={actor._id} actor={actor}/>))

                            : <p className="ActoresReg2">NO hay Actores Registrados</p>}
                    </div>
 
                </div>
            </div>
        </div>
    );
}
