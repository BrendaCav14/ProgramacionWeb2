import {useState, useEffect, createContext} from 'react';
import axios from "axios";
import useAuth from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";


const DashboardContext = createContext();

const DashboardProvider = ({children}) =>{


const [general, setGeneral] = useState([]);
const [alerta, setAlerta] = useState({});
const [generos, setGeneros] = useState([]);
const [generoID, setgeneroID] = useState({});
const [actores, setActores] = useState([]);
const [actorID, setactorID] = useState({});
const [directores, setDirectores] = useState({});
const [directorID, setdirectorID] = useState({});

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
 }, [auth]

 )

 useEffect(() => { const ObtenerActorUser = async () => {

    try{
        const tokenUser = localStorage.getItem('token');
        if(!tokenUser) return
        const config = {
            headers:{
                "Content-Type" : "application/json",
                Authorization: `Bearer ${tokenUser}`
            }
        }
        const {data} = await axios.get('http://localhost:4000/api/actores', config);

        setActores(data);
    } catch (error){
        console.log(error);
    }
    
 }; ObtenerActorUser()
 
}, [auth])

useEffect(() => { const ObtenerDirectorUser = async () => {

    try{
        const tokenUser = localStorage.getItem('token');
        if(!tokenUser) return
        const config = {
            headers:{
                "Content-Type" : "application/json",
                Authorization: `Bearer ${tokenUser}`
            }
        }
        const {data} = await axios.get('http://localhost:4000/api/directores', config);

        setDirectores(data);
    } catch (error){
        console.log(error);
    }
    
 }; ObtenerDirectorUser()
 
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


const nuevoActor = async actor => {
    try {
        const tokenG = localStorage.getItem('token');
        if(!tokenG) return

        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenG}`
            }
        }

        const {data} = await axios.post('http://localhost:4000/api/actores', actor, config);
        setActores([...actores, data]);
    } catch (error){
        console.log(error);
    }
};

const nuevoDirector = async director => {
    try {
        const tokenG = localStorage.getItem('token');
        if(!tokenG) return

        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenG}`
            }
        }

        const {data} = await axios.post('http://localhost:4000/api/directores', director, config);
        setDirectores([...directores, data]);
    } catch (error){
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

const obtenerActorID = async id => {
    console.log(id);
    try{
        const token = localStorage.getItem('token');
        if(!token) return

        const config = {
            headers: {
                "Content-Type" : "application/json", 
                Authorization: `Bearer ${token}`
            }
        }

        const {data} = await axios.get(`http://localhost:4000/api/actores/${id}`, config);
        setactorID(data);
    }catch (error){
        console.log(error);
    }
};

const obtenerDirectorID = async id => {
    console.log(id);
    try{
        const token = localStorage.getItem('token');
        if(!token) return

        const config = {
            headers: {
                "Content-Type" : "application/json", 
                Authorization: `Bearer ${token}`
            }
        }

        const {data} = await axios.get(`http://localhost:4000/api/directores/${id}`, config);
        setdirectorID(data);
    }catch (error){
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

const editarActor = async actor => {
    try{
        const tokenG = localStorage.getItem('token');
        if(!tokenG) return

        const config = {
            headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${tokenG}`
            }
        }

        const {data} = await axios.put(`http://localhost:4000/api/actores/${actor.id}`, actor, config);
        const actoresActualizados = actores.map (actorState => actorState._id === data._id ? data : actorState);

        setActores(actoresActualizados);
    } catch (error){
        console.log(error);
    }
};

const editarDirector = async director => {
    try{
        const tokenG = localStorage.getItem('token');
        if(!tokenG) return

        const config = {
            headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${tokenG}`
            }
        }

        const {data} = await axios.put(`http://localhost:4000/api/directores/${director.id}`, director, config);
        const directoresActualizados = directores.map (directorState => directorState._id === data._id ? data : directorState);

        setDirectores(directoresActualizados);
    } catch (error){
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
    setactorID({})
    setdirectorID({})
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
            nuevoActor,
            actores,
            obtenerActorID,
            actorID,
            editarActor,
            setactorID, 
            nuevoDirector,
            directores,
            obtenerDirectorID,
            directorID,
            editarDirector,
            setdirectorID,


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