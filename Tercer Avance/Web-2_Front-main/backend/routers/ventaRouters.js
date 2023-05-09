import express from "express";
import{obtenerVentas,nuevoVenta,obtenerVenta,eliminarVenta} from "../controllers/ventaController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

// Rutas Generos

router.route("/")
.get(checkAuth, obtenerVentas)
.post(checkAuth, nuevoVenta);

router.route("/:id")
.get(checkAuth,obtenerVenta)
.delete(checkAuth,eliminarVenta);

export default router;