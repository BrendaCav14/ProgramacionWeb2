//configuracion del servidor

import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import usuarioRoutes from './routers/usuarioRouters.js'

const app = express();

app.use(express.json());

dotenv.config();
conectarDB();


//ROUTING 
app.use("/api/usuarios", usuarioRoutes);


console.log("Configurando Servidor");
console.log("desde index.js");

const PORT = process.env.PORT || 4000;
app.listen(4000,()=> {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})