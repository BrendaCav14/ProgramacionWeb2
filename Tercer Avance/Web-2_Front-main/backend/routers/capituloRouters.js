import express from "express";
import{obtenerCapitulos,nuevoCapitulo,obtenerCapitulo,editarCapitulo,eliminarCapitulo} from "../controllers/capituloController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

// Rutas Generos

router.route("/")
.get(checkAuth, obtenerCapitulos)
.post(checkAuth, nuevoCapitulo);

router.route("/:id")
.get(checkAuth,obtenerCapitulo)
.put(checkAuth,editarCapitulo)
.delete(checkAuth,eliminarCapitulo);

export default router;