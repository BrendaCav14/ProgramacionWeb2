import express from "express";
import{obtenerActores,nuevoActor,obtenerActor,editarActor,eliminarActor} from "../controllers/actorController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

// Rutas Generos
router.route("/")
.get(checkAuth, obtenerActores)
.post(checkAuth, nuevoActor);

router.route("/:id")
.get(checkAuth,obtenerActor)
.put(checkAuth, editarActor)
.delete(checkAuth,eliminarActor);

export default router;