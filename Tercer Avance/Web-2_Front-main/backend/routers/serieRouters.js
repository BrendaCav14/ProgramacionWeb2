import express from "express";
import{obtenerSeries,nuevoSerie,obtenerSerie,editarSerie,eliminarSerie} from "../controllers/serieController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

// Rutas Generos

router.route("/")
.get(checkAuth, obtenerSeries)
.post(checkAuth, nuevoSerie);

router.route("/:id")
.get(checkAuth,obtenerSerie)
.put(checkAuth,editarSerie)
.delete(checkAuth,eliminarSerie);

export default router;