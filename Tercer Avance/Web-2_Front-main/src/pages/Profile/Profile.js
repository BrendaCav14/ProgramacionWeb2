import "./Profile.css";

export default function Profile() {
  return (
    <div className="editProfile">
      <div className="container2">
        <h1>Editar datos personales</h1>
        <hr className="separador"></hr>

        <input type="text" placeholder="Nombre" className="inputLarge" />
        <input
          type="text"
          placeholder="Apellido Páterno"
          className="inputLarge"
        />
        <input
          type="text"
          placeholder="Apellido Materno"
          className="inputLarge"
        />

        <input
          type="text"
          placeholder="Correo Electronico"
          className="inputLarge"
        />
        <input
          type="text"
          placeholder="Nombre de Usuario"
          className="inputLarge"
        />

        <input
          type="date"
          placeholder="Fecha de nacimiento"
          className="inputLarge"
        />

        <label>Imagen de Perfil:</label>
        <input type="file" className="inputLarge" />

        <button className="buttonA">Confirmar</button>
        <button className="buttonB">Cancelar</button>
      </div>
    </div>
  );
}
