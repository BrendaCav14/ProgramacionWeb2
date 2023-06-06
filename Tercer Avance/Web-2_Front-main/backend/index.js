//configuracion del servidor

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from './config/db.js';
import usuarioRoutes from './routers/usuarioRouters.js';
import generoRoutes from './routers/generoRouters.js';
import actorRoutes from './routers/actorRouters.js';
import directorRoutes from './routers/directorRouters.js';
import plataformaRoutes from './routers/plataformaRouters.js';
import peliculaRoutes from './routers/peliculaRouters.js';
import serieRoutes from './routers/serieRouters.js';
import capituloRoutes from './routers/capituloRouters.js';
import carritoRoutes from './routers/carritoRouters.js';
import carritoDetRoutes from './routers/carritoDetRouters.js';
import ventaRoutes from './routers/ventaRouters.js';
import ventaDetRoutes from './routers/ventaDetRouters.js';


const app = express();

app.use(express.json());

dotenv.config();
conectarDB();

// Configurando CORS
const whiteList = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function(origin,callback){
        if(whiteList.includes(origin))
        {
            //puede consultar la API
            callback(null,true);
        }
        else{
            //No esta permitido
            callback(new Error())

        }
    }
};

app.use(cors(corsOptions));

app.use("/uploads",express.static("./uploads"));

//ROUTING 
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/generos", generoRoutes);
app.use("/api/actores", actorRoutes);
app.use("/api/directores", directorRoutes);
app.use("/api/plataformas", plataformaRoutes);
app.use("/api/peliculas", peliculaRoutes);
app.use("/api/series", serieRoutes);
app.use("/api/capitulos", capituloRoutes);
app.use("/api/carrito", carritoRoutes);
app.use("/api/carrito-detalle", carritoDetRoutes);
app.use("/api/venta", ventaRoutes);
app.use("/api/venta-detalle", ventaDetRoutes);



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
