import express from "express";
import{obtenerGeneros,nuevoGenero,obtenerGenero,editarGenero,eliminarGenero} from "../controllers/generoController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

// Rutas Generos

router.route("/")
.get(checkAuth, obtenerGeneros)
.post(checkAuth, nuevoGenero);

router.route("/:id")
.get(checkAuth,obtenerGenero)
.put(checkAuth,editarGenero)
.delete(checkAuth,eliminarGenero);

export default router;