import "./Dashboard.css";
import useDashboard from "../../hooks/useDashboard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Dashboard () {

const {general} = useDashboard();

console.log(general);
const [optionsPelicula, setOptionsPelicula] = useState([]);

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
          <div className="grid-container">
            {optionsPelicula.map(option => (
              <img key={option.id} value={option.value} src={option.FotoPeli}></img>
            ))}
            <img src="https://via.placeholder.com/400x400" alt="imagen 1" />
            <img src="https://via.placeholder.com/400x400" alt="imagen 2" />
            <img src="https://via.placeholder.com/400x400" alt="imagen 3" />
            <img src="https://via.placeholder.com/400x400" alt="imagen 4" />
            <img src="https://via.placeholder.com/400x400" alt="imagen 5" />
            <img src="https://via.placeholder.com/400x400" alt="imagen 6" />
            <img src="https://via.placeholder.com/400x400" alt="imagen 7" />
            <img src="https://via.placeholder.com/400x400" alt="imagen 8" />
          </div>
          <div className="sidebar">
          <label><input type="checkbox"/> Lo mas Visto</label>
          <label><input type="checkbox"/> Estrenos</label>
        <h2>Generos:</h2>
        <div className="category-list">
          <label><input type="checkbox"/> Acción</label>
          <label><input type="checkbox"/> Aventuras</label>
          <label><input type="checkbox"/> Comedia</label>
          <label><input type="checkbox"/> Drama</label>
          <label><input type="checkbox"/> Terror</label>
        </div>
      </div>
        </div>
    
  )
}


