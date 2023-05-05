import express from "express";
import{obtenerDirectores,nuevoDirector,obtenerDirector,editarDirector,eliminarDirector} from "../controllers/directorController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

// Rutas Generos

router.route("/")
.get(checkAuth, obtenerDirectores)
.post(checkAuth, nuevoDirector);

router.route("/:id")
.get(checkAuth,obtenerDirector)
.put(checkAuth,editarDirector)
.delete(checkAuth,eliminarDirector);

export default router;