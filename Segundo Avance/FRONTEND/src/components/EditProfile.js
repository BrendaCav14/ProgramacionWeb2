import React from "react";

export const EditProfile = () => {
  return (
    <div className="editProfile">
      <div class="container2">
        <h1>Editar datos personales</h1>
        <form>
          <div class="form-group">
            <input type="text" placeholder="Nombre" className='FormLogin'/>
            <input type="text" placeholder="Apellido Páterno" className='FormLogin'/>
            <input type="text" placeholder="Apellido Materno" className='FormLogin'/>
          </div>
          <div class="form-group">
          </div>
          <div class="form-group">
          <input type="text" placeholder="Correo Electronico" className='FormLogin'/>
          <input type="text" placeholder="Nombre de Usuario" className='FormLogin'/>
          </div>
          <div class="form-group">
          <input type="date" placeholder="Fecha de nacimiento" className='FormLogin'/>
          </div>

          <div class="form-group">
          <label for="fecha-nacimiento">Imagen de Perfil:</label>
          <input type="file" className='FormLogin'/>
          </div>
          
          <button type="submit">Guardar cambios</button>
        </form>
      </div>
    </div>
  );
};
