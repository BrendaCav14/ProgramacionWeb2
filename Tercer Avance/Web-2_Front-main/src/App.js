import { BrowserRouter, Route, Routes } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

//? IMPORTACION DE PAGINAS ?//
import Actor from "./pages/Actor";
import Dashboard from "./pages/Dashboard";
import Director from "./pages/Director";
import Genero from "./pages/Genero";
import Movie from "./pages/Movie"
import Profile from "./pages/Profile";
import Error404 from "./components/Error404/Error";
import Login from "./pages/Login/Login";
import Registro from "./pages/Registro/Registro";

//? IMPORTACION DE COMPONENTES ?//
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Login/>} />
          <Route path="/Home" element={<Dashboard/>} />
          <Route path="/Actor" element={<Actor/>} />
          <Route path="/Director" element={<Director/>} />
          <Route path="/Genero" element={<Genero/>} />
          <Route path="/Movie" element={<Movie/>} />
          <Route path="/Profile" element={<Profile/>} />

          <Route path="/Registro" element={<Registro/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
