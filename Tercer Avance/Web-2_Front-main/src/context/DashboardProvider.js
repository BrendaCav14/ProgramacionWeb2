import {useState, useEffect, createContext} from 'react';
import axios from "axios";
import useAuth from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";


const DashboardContext = createContext();

const DashboardProvider = ({children}) =>{


const [general, setGeneral] = useState([]);
const [generos, setGeneros] = useState([]);
const [alerta, setAlerta] = useState({});
const [generoID, setgeneroID] = useState({});

const {auth} = useAuth();

const navigate = useNavigate();


const mostrarAlerta = alerta => {
    setAlerta(alerta);

    setTimeout(() => {
        setAlerta({})
    }, 4000);
}

const mostrarAlertaElimina = alerta => {
    setAlerta(alerta);

    setTimeout(() => {
        setAlerta({});
       navigate("/Home/Genero");
    }, 4000);
    
}

useEffect(() => {
const ObtenerGeneroUser = async () =>{
    try {
        const tokenUser = localStorage.getItem('token');
        if(!tokenUser) return

        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenUser}`

            }
        }
    
        const {data} = await axios.get('http://localhost:4000/api/generos',config);
        
        setGeneros(data);
        

    } catch (error) {
        console.log(error);
    }


}; ObtenerGeneroUser()
 }, [auth])



const nuevoGenero = async genero =>{


        try {

        const tokenG = localStorage.getItem('token');
        if(!tokenG) return

        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenG}`

            }
        } 

       const {data} = await axios.post('http://localhost:4000/api/generos',genero,config);
        
        setGeneros([...generos,data]);


      } catch (error) {
        console.log(error);
      }
};








const obtenerGeneroID = async id => {
    console.log(id);

    try {
        const token = localStorage.getItem('token');
        if(!token) return

        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`

            }
        }
        const {data} = await axios.get(`http://localhost:4000/api/generos/${id}`,config);

        setgeneroID(data);
       

    } catch (error) {
        console.log(error);
    }
};

const editarGenero = async  genero => {
    try {

        const tokenG = localStorage.getItem('token');
        if(!tokenG) return

        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenG}`

            }
        } 

       const {data} = await axios.put(`http://localhost:4000/api/generos/${genero.id}`,genero,config);
        
       //Sincronizar el state
       const generosActualizados = generos.map(generoState => generoState._id === data._id ? data : generoState);


        setGeneros(generosActualizados);


      } catch (error) {
        console.log(error);
      }
};

const eliminarproyecto = async id => {
    try {
        const tokenG = localStorage.getItem('token');
        if(!tokenG) return

        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenG}`

            }
        } 

       const {data} = await axios.delete(`http://localhost:4000/api/generos/${id}`,config);

const generosActualizados = generos.filter(generoState => generoState._id !== id);

setGeneros(generosActualizados);

       mostrarAlertaElimina({
        msg: data.msg,
        error: false
      })

    } catch (error) {
        console.log(error)
    }
  }




const cerrarSesion = () => {
    setGeneral([])
    setGeneros({})
    setAlerta({})
    setgeneroID({})
}

    return(
        <DashboardContext.Provider
        value={{
            general,
            mostrarAlerta,
            mostrarAlertaElimina,
            alerta,
            nuevoGenero,
            generos,
            obtenerGeneroID,
            generoID,
            editarGenero,
            setgeneroID,
            eliminarproyecto,



            cerrarSesion
        }}
        > {children}

        </DashboardContext.Provider>
    )
}

export{
    DashboardProvider
}

export default DashboardContext