import "./Dashboard.css";
import useDashboard from "../../hooks/useDashboard";

export default function Dashboard () {

const {general} = useDashboard();

console.log(general);

  return (
  
      <div className="dashboard">
          <div className="grid-container">
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


