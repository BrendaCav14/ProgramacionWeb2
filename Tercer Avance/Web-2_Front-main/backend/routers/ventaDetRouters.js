import express from "express";
import{obtenerVentasDet,nuevoVentaDet,obtenerVentaDet,eliminarVentaDet} from "../controllers/ventaDetController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

// Rutas Generos

router.route("/")
.get(checkAuth, obtenerVentasDet)
.post(checkAuth, nuevoVentaDet);

router.route("/:id")
.get(checkAuth,obtenerVentaDet)
.delete(checkAuth,eliminarVentaDet);

export default router;