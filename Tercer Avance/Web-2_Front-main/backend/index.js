//configuracion del servidor

import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import usuarioRoutes from './routers/usuarioRouters.js';
import generoRoutes from './routers/generoRouters.js';
import actorRoutes from './routers/actorRouters.js';
import directorRoutes from './routers/directorRouters.js';

const app = express();

app.use(express.json());

dotenv.config();
conectarDB();


//ROUTING 
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/generos", generoRoutes);
app.use("/api/actores", actorRoutes);
app.use("/api/directores", directorRoutes);


console.log("Configurando Servidor");
console.log("desde index.js");

const PORT = process.env.PORT || 4000;
try {
    app.listen(4000,()=> {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
} catch (error) {
    console.log(`Coneccion de Base de datos Invalida...`);
}
