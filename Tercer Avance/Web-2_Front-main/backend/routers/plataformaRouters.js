import express from "express";
import{obtenerPlataformas,nuevaPlataforma,obtenerPlataforma,eliminarPlataforma} from "../controllers/PlataformaController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();


// Rutas Generos

router.route("/")
.get(checkAuth, obtenerPlataformas)
.post(checkAuth, nuevaPlataforma);

router.route("/:id")
.get(checkAuth,obtenerPlataforma)
.delete(checkAuth,eliminarPlataforma);

export default router;