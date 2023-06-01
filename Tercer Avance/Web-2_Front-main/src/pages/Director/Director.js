import "./Director.css";
import React from 'react'
import FormDirector from "../../components/FormDirector";
import useDashboard from "../../hooks/useDashboard";
import ObtenerDirector from "../../components/ObtenerDirector";
import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";

const Director = () => {

    const params = useParams();
    const {directores} = useDashboard();

    useEffect(() => {
        console.log(params);
    }, [])

    return (
        <div className="containerDirector">
            <div className="containerGeneralDirector">
                <div className="Area-Formulario">
                    <div className="container2">
                        <h1 className="tituloMovie">Agregar Director</h1>
                        <hr className="separador"/>
                    </div>

                    <FormDirector/>
                    <div>
                        <button className="buttonB">
                            <Link className="LinkB" to="/Home">Cancelar</Link>
                        </button>
                    </div>
                    <br></br>

                    <div className="DirectorDiv">
                        {directores.length
                            ? directores.map(director => (<ObtenerDirector key={director._id} director={director}/>))

                            : <p className="DirectorReg2">NO hay Directores Registrados</p>}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Director
