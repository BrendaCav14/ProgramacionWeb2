import "./Dashboard.css";
import useDashboard from "../../hooks/useDashboard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Dashboard () {

const {general} = useDashboard();

console.log(general);
const [optionsPelicula, setOptionsPelicula] = useState([]);
const [optionsSeries, setOptionsSeries] = useState([]);
const [generostodos, setOptionsgenerostodos] = useState([]);

useEffect(() =>{
  const Obtenergenerotodos= async () =>{
      try {
          const token = localStorage.getItem('token');
          if(!token) return
  
          const config = {
              headers:{
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`
  
              }
          }
          const {data} = await axios.get('http://localhost:4000/api/generos/generostodos',config);
          console.log(data);
          setOptionsgenerostodos(data);
         
  
      } catch (error) {
          console.log(error);
      }
  }

  Obtenergenerotodos()
}, []);



useEffect(() =>{
  const ObtenerSeries= async () =>{
      try {
          const token = localStorage.getItem('token');
          if(!token) return
  
          const config = {
              headers:{
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`
  
              }
          }
          const {data} = await axios.get('http://localhost:4000/api/series/',config);
          console.log(data);
          setOptionsSeries(data);
         
  
      } catch (error) {
          console.log(error);
      }
  }

  ObtenerSeries()
}, []);


useEffect(() =>{
  const ObtenerPelicula = async () =>{
      try {
          const token = localStorage.getItem('token');
          if(!token) return
  
          const config = {
              headers:{
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`
  
              }
          }
          const {data} = await axios.get('http://localhost:4000/api/peliculas/',config);
          console.log(data);
          setOptionsPelicula(data);
         
  
      } catch (error) {
          console.log(error);
      }
  }

  ObtenerPelicula()
}, []);

  return (
  
      <div className="dashboard">
        <div className="contPelis">
        <h1 className="titulo_dash">Peliculas</h1>
        <br/>
          <div className="grid-container">
            
            {optionsPelicula.map(option => (
              <img classname='imagenprod' key={option.id} value={option.value} src={option.Poster}></img>
            
            ))}
            <img src="https://via.placeholder.com/400x400" alt="imagen 1" />
            <img src="https://via.placeholder.com/400x400" alt="imagen 2" />
            <img src="https://via.placeholder.com/400x400" alt="imagen 3" />
            <img src="https://via.placeholder.com/400x400" alt="imagen 4" />
          </div>
       
        <h1 className="titulo_dash">Series</h1>
        <br/>
          <div className="grid-container">
            
            {optionsSeries.map(option => (
             
                 <img key={option._id} value={option.value} src={option.Poster}></img>
              
             
             
            ))}
            <img src="https://via.placeholder.com/400x400" alt="imagen 1" />
            <img src="https://via.placeholder.com/400x400" alt="imagen 2" />
            <img src="https://via.placeholder.com/400x400" alt="imagen 3" />
            <img src="https://via.placeholder.com/400x400" alt="imagen 4" />
          </div>
          
        </div>

        
          <div className="sidebar">
          <label><input type="checkbox"/> Lo mas Visto</label>
          <label><input type="checkbox"/> Estrenos</label>
        <h2>Generos:</h2>
        <div className="category-list">

        {generostodos.map(option => (
            <Link className="link02" to={`${option._id}`}>
                {option.nombre}
                </Link>

           
            ))}

        </div>
      </div>
        </div>
    
  )
}


