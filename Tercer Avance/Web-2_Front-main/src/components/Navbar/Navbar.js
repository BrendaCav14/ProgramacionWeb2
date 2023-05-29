import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link} from "react-router-dom";
import { SidebarData } from "./SidebarData.js";
import { SidebarCliente } from "./SidebarCliente.js";
import "./Navbar.css";
import { IconContext } from "react-icons";
import MyAxolotlVideo from '../../img/MyAxolotlVideo.png';
import Image1 from '../../img/Image1.jpg';
import useAuth from "../../hooks/useAuth.js";
import useDashboard from "../../hooks/useDashboard.js";





function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const {  cerrarSesionAuth } = useAuth();
 
  const {  cerrarSesion , tipoCuenta} = useDashboard();


  const handleCerrarSesion = () => {
    cerrarSesion()
    cerrarSesionAuth()
    localStorage.removeItem('token')
  }

 

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
            <img className='Axolotl' src={MyAxolotlVideo}></img>
            
          </Link>
          
          <div className="divImage">
<img className="perfil" src={Image1}></img>
          </div>

        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars2">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {tipoCuenta === "Administrador" ? 
            
            SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            }) 
            :             
            SidebarCliente.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}


            {}

                <li >
                  <button type="button" className="cerrarsesion" onClick={handleCerrarSesion}>Cerrar Sesion</button>
                </li>
           
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
