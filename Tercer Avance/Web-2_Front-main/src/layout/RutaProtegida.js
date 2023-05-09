import {Outlet, Navigate} from 'react-router-dom';
import useAuth from '../hooks/useAuth.js'
import Navbar from '../components/Navbar/Navbar.js';



const RutaProtegida = () => {
    const {auth, cargando} = useAuth();

    if(cargando) return 'Cargando....';
    console.log(auth);
  return (
<>

{auth._id ? (
  <div>
    <Navbar />
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  </div>

            ) : <Navigate to= "/"/>}

</>
  )
}

export default RutaProtegida
