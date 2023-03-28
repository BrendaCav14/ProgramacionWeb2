import React from "react";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div class="grid-container">
        <img src="https://via.placeholder.com/400x400" alt="imagen 1" />
        <img src="https://via.placeholder.com/400x400" alt="imagen 2" />
        <img src="https://via.placeholder.com/400x400" alt="imagen 3" />
        <img src="https://via.placeholder.com/400x400" alt="imagen 4" />
        <img src="https://via.placeholder.com/400x400" alt="imagen 5" />
        <img src="https://via.placeholder.com/400x400" alt="imagen 6" />
        <img src="https://via.placeholder.com/400x400" alt="imagen 7" />
        <img src="https://via.placeholder.com/400x400" alt="imagen 8" />
      </div>
      <div class="sidebar">
      <label><input type="checkbox"/> Lo mas Vstto</label>
      <label><input type="checkbox"/> Estrenos</label>
    <h2>Generos:</h2>
    <div class="category-list">
      <label><input type="checkbox"/> Acción</label>
      <label><input type="checkbox"/> Aventuras</label>
      <label><input type="checkbox"/> Comedia</label>
      <label><input type="checkbox"/> Drama</label>
      <label><input type="checkbox"/> Terror</label>
    </div>
  </div>
    </div>
  );
};
