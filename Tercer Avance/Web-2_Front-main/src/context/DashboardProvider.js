import {useState, useEffect, createContext} from 'react';
import axios from "axios";
import useAuth from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";


const DashboardContext = createContext();

const DashboardProvider = ({children}) =>{


const [general, setGeneral] = useState([]);

const [generos, setGeneros] = useState([]);
const [tipoCuenta, setTipoCuenta] = useState([]);
const [alerta, setAlerta] = useState({});
const [generoID, setgeneroID] = useState({});
const [actores, setActores] = useState([]);
const [actorID, setactorID] = useState({});
const [directores, setDirectores] = useState({});
const [directorID, setdirectorID] = useState({});
const [peliculas, setPeliculas] = useState({});
const [peliculasID, setPeliculasID] = useState({});



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

const mostrarAlertaEliminaDirector = alerta => {
    setAlerta(alerta);

    setTimeout(() => {
        setAlerta({});
       navigate("/Home/Director");
    }, 4000);
    
}

const mostrarAlertaEliminaActor = alerta => {
    setAlerta(alerta);

    setTimeout(() => {
        setAlerta({});
       navigate("/Home/Actor");
    }, 4000);
    
}

const mostrarAlertaEliminaMovie = alerta => {
    setAlerta(alerta);

    setTimeout(() => {
        setAlerta({});
       navigate("/Home/Movie");
    }, 4000);
    
}


useEffect(() => {
const obtenerTipodeCuenta = async () =>{
   

    try {
        const token = localStorage.getItem('token');
        if(!token) return

        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`

            }
        }
        const {data} = await axios.get(`http://localhost:4000/api/usuarios/TipoCuenta`,config);

        setTipoCuenta(data);


    } catch (error) {
        console.log(error);
    }
};
obtenerTipodeCuenta()
}, [auth])




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

useEffect(() => { const ObtenerPeliculaUser = async () => {

    try{
        const tokenUser = localStorage.getItem('token');
        if(!tokenUser) return
        const config = {
            headers:{
                "Content-Type" : "application/json",
                Authorization: `Bearer ${tokenUser}`
            }
        }
        const {data} = await axios.get('http://localhost:4000/api/peliculas', config);

        setPeliculas(data);
    } catch (error){
        console.log(error);
    }
    
 }; ObtenerPeliculaUser()
 
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


const nuevaPelicula = async pelicula => {
    try {
        const tokenG = localStorage.getItem('token');
        if(!tokenG) return

        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenG}`
            }
        }

        const {data} = await axios.post('http://localhost:4000/api/peliculas', pelicula, config);
        setPeliculas([...peliculas, data]);
    } catch (error){
        console.log(error);
    }
};




const obtenerGeneroID = async id => {
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

const obtenerPeliculaID = async id => {
    try{
        const token = localStorage.getItem('token');
        if(!token) return

        const config = {
            headers: {
                "Content-Type" : "application/json", 
                Authorization: `Bearer ${token}`
            }
        }

        const {data} = await axios.get(`http://localhost:4000/api/peliculas/${id}`, config);
        setPeliculasID(data);
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

       console.log(data);

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

const editarMovie = async pelicula => {
    try{
        const tokenG = localStorage.getItem('token');
        if(!tokenG) return

        const config = {
            headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${tokenG}`
            }
        }

        const {data} = await axios.put(`http://localhost:4000/api/peliculas/${pelicula.id}`, pelicula, config);
        const peliculasActualizadas = peliculas.map (peliculaState => peliculaState._id === data._id ? data : peliculaState);

        setPeliculas(peliculasActualizadas);
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



const eliminarproyecto = async id => { }

const eliminargenero = async id => {
    try {
        console.log('elimnando', id)
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

  const eliminarActor = async id => {
    try {
        console.log('elimnando', id)
        const tokenG = localStorage.getItem('token');
        if(!tokenG) return

        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenG}`

            }
        } 

       const {data} = await axios.delete(`http://localhost:4000/api/actores/${id}`,config);

const actoresActualizados = actores.filter(actorState => actorState._id !== id);

setActores(actoresActualizados);

       mostrarAlertaEliminaActor({
        msg: data.msg,
        error: false
      })

    } catch (error) {
        console.log(error)
    }
  }

  const eliminarDirector = async id => {
    try {
        console.log('elimnando', id)
        const tokenG = localStorage.getItem('token');
        if(!tokenG) return

        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenG}`

            }
        } 

       const {data} = await axios.delete(`http://localhost:4000/api/directores/${id}`,config);

const directoresActualizados = directores.filter(directorState => directorState._id !== id);

setDirectores(directoresActualizados);

       mostrarAlertaEliminaDirector({
        msg: data.msg,
        error: false
      })

    } catch (error) {
        console.log(error)
    }
  }

  const eliminarMovie = async id => {
    try {
        console.log('elimnando', id)
        const tokenG = localStorage.getItem('token');
        if(!tokenG) return

        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${tokenG}`

            }
        } 

       const {data} = await axios.delete(`http://localhost:4000/api/peliculas/${id}`,config);

const peliculasActualizadas = peliculas.filter(peliculaState => peliculaState._id !== id);

setPeliculas(peliculasActualizadas);

       mostrarAlertaEliminaMovie({
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
    setTipoCuenta([])
    setAlerta({})
    setgeneroID({})
    setactorID({})
    setdirectorID({})
    setPeliculasID({})
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
            nuevaPelicula,
            peliculas,
            setPeliculasID,
            obtenerPeliculaID,
            peliculasID,
            editarMovie,

            tipoCuenta,
            
            eliminargenero,
            eliminarDirector,
            eliminarActor,
            eliminarMovie,


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