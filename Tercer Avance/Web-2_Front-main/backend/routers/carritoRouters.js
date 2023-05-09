import express from "express";
import{obtenerCarritos,nuevoCarrito,obtenerCarrito,eliminarCarrito} from "../controllers/carritoController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

// Rutas Generos

router.route("/")
.get(checkAuth, obtenerCarritos)
.post(checkAuth, nuevoCarrito);

router.route("/:id")
.get(checkAuth,obtenerCarrito)
.delete(checkAuth,eliminarCarrito);

export default router;