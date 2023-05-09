import express from "express";
import{obtenerPeliculas,nuevoPelicula,obtenerPelicula,editarPelicula,eliminarPelicula} from "../controllers/peliculaController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

// Rutas Generos

router.route("/")
.get(checkAuth, obtenerPeliculas)
.post(checkAuth, nuevoPelicula);

router.route("/:id")
.get(checkAuth,obtenerPelicula)
.put(checkAuth,editarPelicula)
.delete(checkAuth,eliminarPelicula);

export default router;