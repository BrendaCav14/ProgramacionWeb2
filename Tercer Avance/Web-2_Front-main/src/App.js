import { BrowserRouter, Route, Routes } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

//? IMPORTACION DE PAGINAS ?//
import AuthLayout from "./layout/AuthLayout.js";
import RutaProtegida from "./layout/RutaProtegida.js";
import Actor from "./pages/Actor/Actor.js";
import OlvidePassword from "./pages/OlvidePassword/OlvidePassword.js";
import NuevoPassword from "./pages/OlvidePassword/NuevoPassword.js";
import CuentaConfirmada from "./pages/ConfirmarCuenta/ConfirmarCuenta.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import Director from "./pages/Director/Director.js";
import Genero from "./pages/Genero/Genero.js";
import EditarGenero from "./pages/Genero/EditarGenero.js";
import EditarActor from "./pages/Actor/EditarActor.js";
import EditarDirector from "./pages/Director/EditarDirector.js";
import Movie from "./pages/Movie/Movie.js";
import Profile from "./pages/Profile/Profile.js";
import Error404 from "./components/Error404/Error.js";
import Login from "./pages/Login/Login.js";
import Registro from "./pages/Registro/Registro.js";

import Carrito from "./pages/Carrito/Carrito.js";
import MisCompras from "./pages/MisCompras/MisCompras.js";
import Reportes from "./pages/Reportes/Reportes.js";
// import Reproductor from "./pages/Reproductor/Reproductor.js";

import {AuthProvider} from './context/AuthProvider.js';
import { DashboardProvider } from "./context/DashboardProvider.js";

//? IMPORTACION DE COMPONENTES ?//
import Navbar from "./components/Navbar/Navbar";



function App() {
  return (
      <BrowserRouter>
      <AuthProvider>
       <DashboardProvider>
        
        <Routes>
      {/* RUTAS PUBLICAS */}
<Route path= "/" element = {<AuthLayout />}>
  <Route index element={<Login/>} />
  <Route path="/Registro" element={<Registro/>} />
  <Route path="/Olvide-password" element={<OlvidePassword/>} />
  <Route path="/Olvide-password/:token" element={<NuevoPassword/>} />
  <Route path="/confirmar/:id" element={<CuentaConfirmada/>} />


</Route>  

{/* RUTAS PRIVADAS DEL USUARIO AUTENTICADO*/}

<Route path="/Home" element={<RutaProtegida/>}>
  <Route index element={<Dashboard/>} /> 
  <Route path="Genero" element={<Genero/>} />
  <Route path="Genero/:id" element={<EditarGenero/>} />
  <Route path="Actor" element={<Actor/>} />
  <Route path = "Actor/:id" element = {<EditarActor/>} />
  <Route path="Director" element={<Director/>} />
  <Route path = "Director/:id" element = {<EditarDirector/>} />
  <Route path="Movie" element={<Movie/>} />
  <Route path="Profile" element={<Profile/>} />
  <Route path="Carrito" element={<Carrito/>} />
  <Route path="MisCompras" element={<MisCompras/>} />
  <Route path="Reportes" element={<Reportes/>} />
  {/* RUTAS PRIVADAS DEL USUARIO AUTENTICADO
  
    <Route path="Reproductor" element={<Reproductor/>} />

  */}

  <Route path="*" element={<Error404/>} />

  </Route>
        </Routes>
        </DashboardProvider>
        </AuthProvider>
      
      </BrowserRouter>
  );
}

export default App;
